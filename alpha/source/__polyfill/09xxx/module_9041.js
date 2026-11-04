// Module ID: 9041
// Function ID: 9042
// Dependencies: [9031, 9042, 5180, 9028, 9026]

// Module 9041
import normalizeColor from "normalizeColor" /* 9026 */;
import _mod9028 from "module_9028" /* 9028 */;
import _mod9042 from "module_9042" /* 9042 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 9031 */;
import "module_5180";
import module_5180_mod from "module_5180" /* 5180 */;

let module_5180;
let module_9042;
const obj = { ellipsizeMode: module_5180.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5180.number, textBreakStrategy: module_5180.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5180.func, onPress: module_5180.func, onLongPress: module_5180.func, pressRetentionOffset: _mod9028, selectable: module_5180.bool, selectionColor: normalizeColor, suppressHighlighting: module_5180.bool, style: module_9042, testID: module_5180.string, nativeID: module_5180.string, allowFontScaling: module_5180.bool, maxFontSizeMultiplier: module_5180.number, accessible: module_5180.bool, adjustsFontSizeToFit: module_5180.bool, minimumFontScale: module_5180.number, disabled: module_5180.bool, dataDetectorType: module_5180.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_9042 = DeprecatedStyleSheetPropType(_mod9042);
module_5180 = module_5180_mod;

export default obj;
