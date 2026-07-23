// Module ID: 8166
// Function ID: 64537
// Dependencies: [8162, 8163, 8164, 3955, 8154]

// Module 8166
import module_8162 from "module_8162";
import colorPropType from "colorPropType";
import deprecatedPropType from "deprecatedPropType";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";

const obj = {};
obj.resizeMode = emptyFunction.oneOf(["center", "contain", "cover", "repeat", "stretch"]);
obj.backfaceVisibility = emptyFunction.oneOf(["visible", "hidden"]);
obj.backgroundColor = require("colorPropType");
obj.borderColor = require("colorPropType");
obj.borderWidth = require("emptyFunction").number;
obj.borderRadius = require("emptyFunction").number;
obj.overflow = emptyFunction.oneOf(["visible", "hidden"]);
obj.tintColor = require("colorPropType");
obj.opacity = require("emptyFunction").number;
obj.overlayColor = require("emptyFunction").string;
obj.borderTopLeftRadius = require("emptyFunction").number;
obj.borderTopRightRadius = require("emptyFunction").number;
obj.borderBottomLeftRadius = require("emptyFunction").number;
obj.borderBottomRightRadius = require("emptyFunction").number;

export default Object.assign({}, module_8162, colorPropType, deprecatedPropType, obj);
