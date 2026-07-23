// Module ID: 8158
// Function ID: 64519
// Dependencies: [8159, 8161, 3955, 8165, 8156]

// Module 8158
import flattenStyle from "flattenStyle";
import module_8161 from "module_8161";
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
obj.accessibilityRole = emptyFunction.oneOf(require("module_8165").DeprecatedAccessibilityRoles);
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
obj.style = module_8161;
obj.removeClippedSubviews = require("emptyFunction").bool;
obj.renderToHardwareTextureAndroid = require("emptyFunction").bool;
obj.shouldRasterizeIOS = require("emptyFunction").bool;
obj.collapsable = require("emptyFunction").bool;
obj.needsOffscreenAlphaCompositing = require("emptyFunction").bool;

export default obj;
