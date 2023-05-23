import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Image,
  FlatList
} from "react-native";

const BlogComponent = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Great Things are happening",
      image:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80",
      description:
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
    },
    {
      id: 2,
      title: "Globo Here",
      image:
        "https://media.istockphoto.com/id/1400865154/photo/insurance-and-risk-management-concept.jpg?b=1&s=170667a&w=0&k=20&c=txTSImC8-K3Py8sLhNdq6i_38D4gyGSzKOVW5KgmGPY=",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      title: "Zensar Technologies",
      image:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ]);

  const handleAddBlog = () => {
    if (
      title.trim() !== "" &&
      imageUrl.trim() !== "" &&
      description.trim() !== ""
    ) {
      const newBlog = {
        id: blogs.length + 1,
        title: title,
        image: imageUrl,
        description: description,
      };
      setBlogs([...blogs, newBlog]);
      setTitle("");
      setImageUrl("");
      setDescription("");
      setAddModalVisible(false);
    }
  };

  const handleBlogPress = (blog) => {
    setSelectedBlog(blog);
    setImageModalVisible(true);
  };
  const renderBlogItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.blogItemContainer}
      onPress={() => handleBlogPress(item)}
    >
      <Text style={styles.blogItemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
  const handleCloseImageModal = () => {
    setSelectedBlog(null);
    setImageModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={addModalVisible}
        onRequestClose={() => setAddModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setAddModalVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <TextInput
                  style={styles.input}
                  placeholder="Title"
                  value={title}
                  onChangeText={setTitle}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Image URL"
                  value={imageUrl}
                  onChangeText={setImageUrl}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Description"
                  value={description}
                  onChangeText={setDescription}
                  multiline
                />
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={handleAddBlog}
                >
                  <Text style={styles.addButtonText}>Add Blog</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={imageModalVisible}
        onRequestClose={handleCloseImageModal}
      >
        <TouchableWithoutFeedback onPress={handleCloseImageModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Image
                  source={{ uri: selectedBlog?.image }}
                  style={styles.blogItemImage}
                />
                <Text style={styles.blogItemDescription}>
                  {selectedBlog?.description}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setAddModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Add Blog</Text>
      </TouchableOpacity>

      <View style={styles.blogList}>
        {/* {blogs.map((blog) => (
          <TouchableOpacity
            key={blog.id}
            style={styles.blogItemContainer}
            onPress={() => handleBlogPress(blog)}
          >
            <Text style={styles.blogItemTitle}>{blog.title}</Text>
          </TouchableOpacity>
        ))} */}
      
        <FlatList
          data={blogs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderBlogItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 10,
  },
  addButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  addButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  blogList: {
    flex: 1,
  },
  blogItemContainer: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  blogItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333333",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  blogItemImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    resizeMode: "cover",
    borderRadius: 8,
  },
  blogItemDescription: {
    fontSize: 16,
    color: "#333333",
  },
});

export default BlogComponent;
