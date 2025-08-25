let express = require("express");
let app = express();

require("dotenv").config();

app.get("/", (req, res) => {
	absolutePath = __dirname + "/views/index.html";
	res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

app.use((req, res, next) => {
	console.log(`${req.method} ${req.path} - ${req.ip}`);
	next();
});

app.get("/json", (req, res) => {
	let message = { message: "Hello json" };

	if (process.env.MESSAGE_STYLE === "uppercase") {
		message.message = message.message.toUpperCase();
	}

	res.json(message);
});

module.exports = app;
