// Module ID: 8992
// Function ID: 8993
// Dependencies: [8982, 8993, 5209, 8979, 8977]

// Module 8992
import normalizeColor from "normalizeColor" /* 8977 */;
import _mod8979 from "module_8979" /* 8979 */;
import _mod8993 from "module_8993" /* 8993 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8982 */;
import "module_5209";
import module_5209_mod from "module_5209" /* 5209 */;

let module_5209;
let module_8993;
const obj = { ellipsizeMode: module_5209.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5209.number, textBreakStrategy: module_5209.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5209.func, onPress: module_5209.func, onLongPress: module_5209.func, pressRetentionOffset: _mod8979, selectable: module_5209.bool, selectionColor: normalizeColor, suppressHighlighting: module_5209.bool, style: module_8993, testID: module_5209.string, nativeID: module_5209.string, allowFontScaling: module_5209.bool, maxFontSizeMultiplier: module_5209.number, accessible: module_5209.bool, adjustsFontSizeToFit: module_5209.bool, minimumFontScale: module_5209.number, disabled: module_5209.bool, dataDetectorType: module_5209.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8993 = DeprecatedStyleSheetPropType(_mod8993);
module_5209 = module_5209_mod;

export default obj;
