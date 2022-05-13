const client = require("./client");

let current_new = {
    title: "Note 999", body: "Content 999", postImage: "Post image 999"
};

client.insertNews(current_new, (error, news) => {
  
  if (error) throw error;
  
  console.log(news);
});

