// Module ID: 8947
// Function ID: 8948
// Dependencies: [8948, 8949, 8950, 4173, 8940]

// Module 8947
import module_8948 from "module_8948";
import merged1 from "merged1";
import merged2 from "merged2";
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

export default obj;
