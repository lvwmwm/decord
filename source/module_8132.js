// Module ID: 8132
// Function ID: 64553
// Dependencies: [8133, 8134, 8135, 3990, 8125]

// Module 8132
import module_8133 from "module_8133";
import colorPropType from "colorPropType";
import deprecatedPropType from "deprecatedPropType";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";

const obj = {};
obj.backfaceVisibility = emptyFunction.oneOf(["visible", "hidden"]);
obj.backgroundColor = require("colorPropType");
obj.borderColor = require("colorPropType");
obj.borderTopColor = require("colorPropType");
obj.borderRightColor = require("colorPropType");
obj.borderBottomColor = require("colorPropType");
obj.borderLeftColor = require("colorPropType");
obj.borderStartColor = require("colorPropType");
obj.borderEndColor = require("colorPropType");
obj.borderRadius = require("emptyFunction").number;
obj.borderTopLeftRadius = require("emptyFunction").number;
obj.borderTopRightRadius = require("emptyFunction").number;
obj.borderTopStartRadius = require("emptyFunction").number;
obj.borderTopEndRadius = require("emptyFunction").number;
obj.borderBottomLeftRadius = require("emptyFunction").number;
obj.borderBottomRightRadius = require("emptyFunction").number;
obj.borderBottomStartRadius = require("emptyFunction").number;
obj.borderBottomEndRadius = require("emptyFunction").number;
obj.borderStyle = emptyFunction.oneOf(["solid", "dotted", "dashed"]);
obj.borderWidth = require("emptyFunction").number;
obj.borderTopWidth = require("emptyFunction").number;
obj.borderRightWidth = require("emptyFunction").number;
obj.borderBottomWidth = require("emptyFunction").number;
obj.borderLeftWidth = require("emptyFunction").number;
obj.opacity = require("emptyFunction").number;
obj.elevation = require("emptyFunction").number;

export default Object.assign({}, module_8133, colorPropType, deprecatedPropType, obj);
