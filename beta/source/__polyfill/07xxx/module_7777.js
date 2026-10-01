// Module ID: 7777
// Function ID: 7778
// Dependencies: [7767, 7778, 4663, 7764, 7762]

// Module 7777
import normalizeColor from "normalizeColor" /* 7762 */;
import _mod7764 from "module_7764" /* 7764 */;
import _mod7778 from "module_7778" /* 7778 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 7767 */;
import "module_4663";
import module_4663_mod from "module_4663" /* 4663 */;

let module_4663;
let module_7778;
const obj = { ellipsizeMode: module_4663.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4663.number, textBreakStrategy: module_4663.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4663.func, onPress: module_4663.func, onLongPress: module_4663.func, pressRetentionOffset: _mod7764, selectable: module_4663.bool, selectionColor: normalizeColor, suppressHighlighting: module_4663.bool, style: module_7778, testID: module_4663.string, nativeID: module_4663.string, allowFontScaling: module_4663.bool, maxFontSizeMultiplier: module_4663.number, accessible: module_4663.bool, adjustsFontSizeToFit: module_4663.bool, minimumFontScale: module_4663.number, disabled: module_4663.bool, dataDetectorType: module_4663.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_7778 = DeprecatedStyleSheetPropType(_mod7778);
module_4663 = module_4663_mod;

export default obj;
