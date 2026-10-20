// Module ID: 8443
// Function ID: 8444
// Dependencies: [8433, 8444, 4947, 8430, 8428]

// Module 8443
import normalizeColor from "normalizeColor" /* 8428 */;
import _mod8430 from "module_8430" /* 8430 */;
import _mod8444 from "module_8444" /* 8444 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8433 */;
import "module_4947";
import module_4947_mod from "module_4947" /* 4947 */;

let module_4947;
let module_8444;
const obj = { ellipsizeMode: module_4947.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4947.number, textBreakStrategy: module_4947.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4947.func, onPress: module_4947.func, onLongPress: module_4947.func, pressRetentionOffset: _mod8430, selectable: module_4947.bool, selectionColor: normalizeColor, suppressHighlighting: module_4947.bool, style: module_8444, testID: module_4947.string, nativeID: module_4947.string, allowFontScaling: module_4947.bool, maxFontSizeMultiplier: module_4947.number, accessible: module_4947.bool, adjustsFontSizeToFit: module_4947.bool, minimumFontScale: module_4947.number, disabled: module_4947.bool, dataDetectorType: module_4947.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8444 = DeprecatedStyleSheetPropType(_mod8444);
module_4947 = module_4947_mod;

export default obj;
