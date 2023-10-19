
module.exports = {
  'setting the value in google search': (client) => {
    const rahul = client.page.amazonesearch();
    rahul.navigate() // You may need to adjust the path to your page object
   .performGoogleSearch('amazon');
  },  
};