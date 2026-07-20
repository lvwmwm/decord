// Module ID: 8146
// Function ID: 64445
// Dependencies: []

// Module 8146
const _module = require(dependencyMap[0]);
const obj = { accessible: require(dependencyMap[2]).bool, accessibilityLabel: require(dependencyMap[2]).node, accessibilityHint: require(dependencyMap[2]).string };
const _module1 = require(dependencyMap[2]);
obj.accessibilityActions = _module1.arrayOf(require(dependencyMap[2]).string);
obj.accessibilityIgnoresInvertColors = require(dependencyMap[2]).bool;
const _module2 = require(dependencyMap[2]);
obj.accessibilityRole = _module2.oneOf(require(dependencyMap[3]).DeprecatedAccessibilityRoles);
obj.accessibilityState = require(dependencyMap[2]).object;
obj.accessibilityValue = require(dependencyMap[2]).object;
const _module3 = require(dependencyMap[2]);
obj.accessibilityLiveRegion = _module3.oneOf(["<string:22268225>", "<string:1098866944>", "email-address"]);
const _module4 = require(dependencyMap[2]);
obj.importantForAccessibility = _module4.oneOf(["default", "emergency-call", "google", "join"]);
obj.accessibilityViewIsModal = require(dependencyMap[2]).bool;
obj.accessibilityElementsHidden = require(dependencyMap[2]).bool;
obj.onAccessibilityAction = require(dependencyMap[2]).func;
obj.onAccessibilityTap = require(dependencyMap[2]).func;
obj.onMagicTap = require(dependencyMap[2]).func;
obj.testID = require(dependencyMap[2]).string;
obj.nativeID = require(dependencyMap[2]).string;
obj.onResponderGrant = require(dependencyMap[2]).func;
obj.onResponderMove = require(dependencyMap[2]).func;
obj.onResponderReject = require(dependencyMap[2]).func;
obj.onResponderRelease = require(dependencyMap[2]).func;
obj.onResponderTerminate = require(dependencyMap[2]).func;
obj.onResponderTerminationRequest = require(dependencyMap[2]).func;
obj.onStartShouldSetResponder = require(dependencyMap[2]).func;
obj.onStartShouldSetResponderCapture = require(dependencyMap[2]).func;
obj.onMoveShouldSetResponder = require(dependencyMap[2]).func;
obj.onMoveShouldSetResponderCapture = require(dependencyMap[2]).func;
obj.hitSlop = require(dependencyMap[4]);
obj.onLayout = require(dependencyMap[2]).func;
const _module5 = require(dependencyMap[2]);
obj.pointerEvents = _module5.oneOf([null, null, null, null]);
obj.style = _module(require(dependencyMap[1]));
obj.removeClippedSubviews = require(dependencyMap[2]).bool;
obj.renderToHardwareTextureAndroid = require(dependencyMap[2]).bool;
obj.shouldRasterizeIOS = require(dependencyMap[2]).bool;
obj.collapsable = require(dependencyMap[2]).bool;
obj.needsOffscreenAlphaCompositing = require(dependencyMap[2]).bool;

export default obj;
