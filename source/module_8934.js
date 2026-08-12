// Module ID: 8934
// Function ID: 8935
// Dependencies: [8930, 8931, 8932, 4175, 8922]

// Module 8934
import module_8930 from "module_8930";
import merged1 from "merged1";
import merged2 from "merged2";
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

export default obj;
