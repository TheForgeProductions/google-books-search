const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use static server on production build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
 // routes
app.use(routes);

// connect to the mongo dB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googleBookSearch",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// api server start
app.listen(PORT, () =>
  console.log(`API Running on PORT ${PORT}.`)
);
