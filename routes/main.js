// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {
  shopName: "The Thirsty Student",
  productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
  shops: [
    { manager: "Ali Demir", address: "Istanbul - Kadıköy" },
    { manager: "Ayşe Kaya", address: "Ankara - Çankaya" },
    { manager: "John Smith", address: "London - Camden" }
  ]
};

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData);
  });

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData);
  });

router.get("/search", (req, res) => {
    let query = req.query.q; // Kullanıcının yazdığı arama kelimesi
    let results = [];
  
    if (query) {
      // Harf duyarlılığını kaldırmak için lowercase karşılaştırması
      results = shopData.productCategories.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
    }
  
    // Sayfaya hem shopData hem de results'ı gönderiyoruz
    res.render("search.ejs", { ...shopData, results });
  });

  router.get("/search_result", (req, res) => {
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
  });

// Export the router object so index.js can access it
module.exports = router;

router.get("/register", (req, res) => {
  res.render("register.ejs", shopData);
});

router.post("/registered", (req, res) => {
  res.send('Hello ' + req.body.first + ' ' + req.body.last + 
           ', your email ' + req.body.email + ' is now registered!');
});

router.get("/survey", (req, res) => {
  res.render("survey.ejs", shopData);
});

router.post('/survey_submitted', (req, res) => {
  const formData = req.body;
  console.log(formData);
  res.render('survey_thanks', { shopName: "The Thirsty Student Shop" });
});