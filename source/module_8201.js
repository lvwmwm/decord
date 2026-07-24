// Module ID: 8201
// Function ID: 64746
// Dependencies: [8202, 8203, 8210, 3955]

// Module 8201
import module_8202 from "module_8202";
import flattenStyle from "flattenStyle";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";

let obj = {};
obj.style = flattenStyle(require("module_8210"));
obj = { uri: require("emptyFunction").string };
obj.headers = emptyFunction.objectOf(require("emptyFunction").string);
const items = [emptyFunction.shape(obj), require("emptyFunction").number, ];
obj = { uri: require("emptyFunction").string, width: require("emptyFunction").number, height: require("emptyFunction").number };
obj.headers = emptyFunction.objectOf(require("emptyFunction").string);
items[2] = emptyFunction.arrayOf(emptyFunction.shape(obj));
obj.source = emptyFunction.oneOfType(items);
obj.blurRadius = require("emptyFunction").number;
obj.defaultSource = require("emptyFunction").number;
const items1 = [emptyFunction.shape({ uri: require("emptyFunction").string }), require("emptyFunction").number];
obj.loadingIndicatorSource = emptyFunction.oneOfType(items1);
obj.progressiveRenderingEnabled = require("emptyFunction").bool;
obj.fadeDuration = require("emptyFunction").number;
obj.internal_analyticTag = require("emptyFunction").string;
obj.onLoadStart = require("emptyFunction").func;
obj.onError = require("emptyFunction").func;
obj.onLoad = require("emptyFunction").func;
obj.onLoadEnd = require("emptyFunction").func;
obj.testID = require("emptyFunction").string;
obj.resizeMethod = emptyFunction.oneOf(["auto", "resize", "scale"]);
obj.resizeMode = emptyFunction.oneOf(["cover", "contain", "stretch", "repeat", "center"]);

export default Object.assign({}, module_8202, obj);
