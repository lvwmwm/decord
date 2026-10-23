// Module ID: 8804
// Function ID: 8805
// Dependencies: [8805, 8807, 5008, 8811, 8802]

// Module 8804
import _mod8802 from "module_8802" /* 8802 */;
import _mod8807 from "module_8807" /* 8807 */;
import _mod8811 from "module_8811" /* 8811 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8805 */;
import "module_5008";
import module_5008_mod from "module_5008" /* 5008 */;

let module_5008;
let module_8807;
const obj = { accessible: module_5008.bool, accessibilityLabel: module_5008.node, accessibilityHint: module_5008.string, accessibilityActions: module_5008.arrayOf(module_5008.string), accessibilityIgnoresInvertColors: module_5008.bool, accessibilityRole: module_5008.oneOf(_mod8811.DeprecatedAccessibilityRoles), accessibilityState: module_5008.object, accessibilityValue: module_5008.object, accessibilityLiveRegion: module_5008.oneOf(["none", "polite", "assertive"]), importantForAccessibility: module_5008.oneOf(["auto", "yes", "no", "no-hide-descendants"]), accessibilityViewIsModal: module_5008.bool, accessibilityElementsHidden: module_5008.bool, onAccessibilityAction: module_5008.func, onAccessibilityTap: module_5008.func, onMagicTap: module_5008.func, testID: module_5008.string, nativeID: module_5008.string, onResponderGrant: module_5008.func, onResponderMove: module_5008.func, onResponderReject: module_5008.func, onResponderRelease: module_5008.func, onResponderTerminate: module_5008.func, onResponderTerminationRequest: module_5008.func, onStartShouldSetResponder: module_5008.func, onStartShouldSetResponderCapture: module_5008.func, onMoveShouldSetResponder: module_5008.func, onMoveShouldSetResponderCapture: module_5008.func, hitSlop: _mod8802, onLayout: module_5008.func, pointerEvents: module_5008.oneOf(["box-none", "none", "box-only", "auto"]), style: module_8807, removeClippedSubviews: module_5008.bool, renderToHardwareTextureAndroid: module_5008.bool, shouldRasterizeIOS: module_5008.bool, collapsable: module_5008.bool, needsOffscreenAlphaCompositing: module_5008.bool };
module_8807 = DeprecatedStyleSheetPropType(_mod8807);
module_5008 = module_5008_mod;

export default obj;
