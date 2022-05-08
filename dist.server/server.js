"use strict";
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var app = (0, _express).default();
app.use(_express.default.static("dist.client"));
var port = process.env.PORT || 3000;
app.get("/", function(req, res) {
    res.sendFile("index.html", {
        root: "."
    });
});
app.listen(port, function() {
    console.log("Listening on port: ".concat(port));
});
