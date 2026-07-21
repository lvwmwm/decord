// Module ID: 8163
// Function ID: 64492
// Dependencies: []

// Module 8163
let obj = {};
const _module = require(dependencyMap[0]);
obj.color = require(dependencyMap[1]);
obj.fontFamily = require(dependencyMap[2]).string;
obj.fontSize = require(dependencyMap[2]).number;
const _module1 = require(dependencyMap[2]);
obj.fontStyle = _module1.oneOf(["<string:1308623186>", "<string:2785018194>"]);
const _module2 = require(dependencyMap[2]);
obj.fontWeight = _module2.oneOf([]);
const _module3 = require(dependencyMap[2]);
const _module4 = require(dependencyMap[2]);
obj.fontVariant = _module3.arrayOf(_module4.oneOf([]));
const _module5 = require(dependencyMap[2]);
obj = { width: require(dependencyMap[2]).number, height: require(dependencyMap[2]).number };
obj.textShadowOffset = _module5.shape(obj);
obj.textShadowRadius = require(dependencyMap[2]).number;
obj.textShadowColor = require(dependencyMap[1]);
obj.letterSpacing = require(dependencyMap[2]).number;
obj.lineHeight = require(dependencyMap[2]).number;
const _module6 = require(dependencyMap[2]);
obj.textAlign = _module6.oneOf([null, null, null, null, null]);
const _module7 = require(dependencyMap[2]);
obj.textAlignVertical = _module7.oneOf([]);
obj.includeFontPadding = require(dependencyMap[2]).bool;
const _module8 = require(dependencyMap[2]);
obj.textDecorationLine = _module8.oneOf([]);
const _module9 = require(dependencyMap[2]);
obj.textDecorationStyle = _module9.oneOf([]);
obj.textDecorationColor = require(dependencyMap[1]);
const _module10 = require(dependencyMap[2]);
obj.textTransform = _module10.oneOf(["isArray", "CDN_URL_BASE", "isArray", "BASEBALL"]);
const _module11 = require(dependencyMap[2]);
obj.writingDirection = _module11.oneOf(["<string:1090519303>", "<string:3925869061>", "<string:4211081505>"]);

export default Object.assign({}, _module, obj);
