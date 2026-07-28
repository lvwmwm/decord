// Module ID: 8140
// Function ID: 64565
// Dependencies: [8130, 8141, 3990, 8127, 8125]

// Module 8140
import flattenStyle from "flattenStyle";
import module_8141 from "module_8141";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";

const obj = {};
obj.ellipsizeMode = emptyFunction.oneOf(["head", "middle", "tail", "clip"]);
obj.numberOfLines = require("emptyFunction").number;
obj.textBreakStrategy = emptyFunction.oneOf(["simple", "highQuality", "balanced"]);
obj.onLayout = require("emptyFunction").func;
obj.onPress = require("emptyFunction").func;
obj.onLongPress = require("emptyFunction").func;
obj.pressRetentionOffset = require("emptyFunction");
obj.selectable = require("emptyFunction").bool;
obj.selectionColor = require("colorPropType");
obj.suppressHighlighting = require("emptyFunction").bool;
obj.style = module_8141;
obj.testID = require("emptyFunction").string;
obj.nativeID = require("emptyFunction").string;
obj.allowFontScaling = require("emptyFunction").bool;
obj.maxFontSizeMultiplier = require("emptyFunction").number;
obj.accessible = require("emptyFunction").bool;
obj.adjustsFontSizeToFit = require("emptyFunction").bool;
obj.minimumFontScale = require("emptyFunction").number;
obj.disabled = require("emptyFunction").bool;
obj.dataDetectorType = emptyFunction.oneOf(["phoneNumber", "link", "email", "none", "all"]);

export default obj;
