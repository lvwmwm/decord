// Module ID: 9281
// Function ID: 9282
// Dependencies: [9271, 9282, 4954, 9268, 9266]

// Module 9281
import normalizeColor from "normalizeColor" /* 9266 */;
import _mod9268 from "module_9268" /* 9268 */;
import _mod9282 from "module_9282" /* 9282 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 9271 */;
import "module_4954";
import module_4954_mod from "module_4954" /* 4954 */;

let module_4954;
let module_9282;
const obj = { ellipsizeMode: module_4954.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4954.number, textBreakStrategy: module_4954.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4954.func, onPress: module_4954.func, onLongPress: module_4954.func, pressRetentionOffset: _mod9268, selectable: module_4954.bool, selectionColor: normalizeColor, suppressHighlighting: module_4954.bool, style: module_9282, testID: module_4954.string, nativeID: module_4954.string, allowFontScaling: module_4954.bool, maxFontSizeMultiplier: module_4954.number, accessible: module_4954.bool, adjustsFontSizeToFit: module_4954.bool, minimumFontScale: module_4954.number, disabled: module_4954.bool, dataDetectorType: module_4954.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_9282 = DeprecatedStyleSheetPropType(_mod9282);
module_4954 = module_4954_mod;

export default obj;
