// Module ID: 8091
// Function ID: 64433
// Dependencies: [8092, 8094, 3956, 8098, 8089]

// Module 8091
import flattenStyle from "flattenStyle";
import module_8094 from "module_8094";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";

const obj = {};
obj.accessible = require("emptyFunction").bool;
obj.accessibilityLabel = require("emptyFunction").node;
obj.accessibilityHint = require("emptyFunction").string;
obj.accessibilityActions = emptyFunction.arrayOf(require("emptyFunction").string);
obj.accessibilityIgnoresInvertColors = require("emptyFunction").bool;
obj.accessibilityRole = emptyFunction.oneOf(require("module_8098").DeprecatedAccessibilityRoles);
obj.accessibilityState = require("emptyFunction").object;
obj.accessibilityValue = require("emptyFunction").object;
obj.accessibilityLiveRegion = emptyFunction.oneOf(["none", "polite", "assertive"]);
obj.importantForAccessibility = emptyFunction.oneOf(["auto", "yes", "no", "no-hide-descendants"]);
obj.accessibilityViewIsModal = require("emptyFunction").bool;
obj.accessibilityElementsHidden = require("emptyFunction").bool;
obj.onAccessibilityAction = require("emptyFunction").func;
obj.onAccessibilityTap = require("emptyFunction").func;
obj.onMagicTap = require("emptyFunction").func;
obj.testID = require("emptyFunction").string;
obj.nativeID = require("emptyFunction").string;
obj.onResponderGrant = require("emptyFunction").func;
obj.onResponderMove = require("emptyFunction").func;
obj.onResponderReject = require("emptyFunction").func;
obj.onResponderRelease = require("emptyFunction").func;
obj.onResponderTerminate = require("emptyFunction").func;
obj.onResponderTerminationRequest = require("emptyFunction").func;
obj.onStartShouldSetResponder = require("emptyFunction").func;
obj.onStartShouldSetResponderCapture = require("emptyFunction").func;
obj.onMoveShouldSetResponder = require("emptyFunction").func;
obj.onMoveShouldSetResponderCapture = require("emptyFunction").func;
obj.hitSlop = require("emptyFunction");
obj.onLayout = require("emptyFunction").func;
obj.pointerEvents = emptyFunction.oneOf(["box-none", "none", "box-only", "auto"]);
obj.style = module_8094;
obj.removeClippedSubviews = require("emptyFunction").bool;
obj.renderToHardwareTextureAndroid = require("emptyFunction").bool;
obj.shouldRasterizeIOS = require("emptyFunction").bool;
obj.collapsable = require("emptyFunction").bool;
obj.needsOffscreenAlphaCompositing = require("emptyFunction").bool;

export default obj;
