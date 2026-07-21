// Module ID: 8150
// Function ID: 64469
// Dependencies: []

// Module 8150
let obj = {};
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
obj.style = _module1(require(dependencyMap[2]));
const _module2 = require(dependencyMap[3]);
const _module3 = require(dependencyMap[3]);
obj = { uri: require(dependencyMap[3]).string };
const _module4 = require(dependencyMap[3]);
obj.headers = _module4.objectOf(require(dependencyMap[3]).string);
const items = [_module3.shape(obj), require(dependencyMap[3]).number, ];
const _module5 = require(dependencyMap[3]);
const _module6 = require(dependencyMap[3]);
obj = { uri: require(dependencyMap[3]).string, width: require(dependencyMap[3]).number, height: require(dependencyMap[3]).number };
const _module7 = require(dependencyMap[3]);
obj.headers = _module7.objectOf(require(dependencyMap[3]).string);
items[2] = _module5.arrayOf(_module6.shape(obj));
obj.source = _module2.oneOfType(items);
obj.blurRadius = require(dependencyMap[3]).number;
obj.defaultSource = require(dependencyMap[3]).number;
const _module8 = require(dependencyMap[3]);
const _module9 = require(dependencyMap[3]);
const items1 = [_module9.shape({ uri: require(dependencyMap[3]).string }), require(dependencyMap[3]).number];
obj.loadingIndicatorSource = _module8.oneOfType(items1);
obj.progressiveRenderingEnabled = require(dependencyMap[3]).bool;
obj.fadeDuration = require(dependencyMap[3]).number;
obj.internal_analyticTag = require(dependencyMap[3]).string;
obj.onLoadStart = require(dependencyMap[3]).func;
obj.onError = require(dependencyMap[3]).func;
obj.onLoad = require(dependencyMap[3]).func;
obj.onLoadEnd = require(dependencyMap[3]).func;
obj.testID = require(dependencyMap[3]).string;
const _module10 = require(dependencyMap[3]);
obj.resizeMethod = _module10.oneOf(["done", "go", "next"]);
const _module11 = require(dependencyMap[3]);
obj.resizeMode = _module11.oneOf([null, null, null, null, null]);

export default Object.assign({}, _module, obj);
