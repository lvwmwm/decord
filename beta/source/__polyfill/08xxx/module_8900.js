// Module ID: 8900
// Function ID: 8901
// Dependencies: [8890, 8901, 5053, 8887, 8885]

// Module 8900
import normalizeColor from "normalizeColor" /* 8885 */;
import _mod8887 from "module_8887" /* 8887 */;
import _mod8901 from "module_8901" /* 8901 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8890 */;
import "module_5053";
import module_5053_mod from "module_5053" /* 5053 */;

let module_5053;
let module_8901;
const obj = { ellipsizeMode: module_5053.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5053.number, textBreakStrategy: module_5053.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5053.func, onPress: module_5053.func, onLongPress: module_5053.func, pressRetentionOffset: _mod8887, selectable: module_5053.bool, selectionColor: normalizeColor, suppressHighlighting: module_5053.bool, style: module_8901, testID: module_5053.string, nativeID: module_5053.string, allowFontScaling: module_5053.bool, maxFontSizeMultiplier: module_5053.number, accessible: module_5053.bool, adjustsFontSizeToFit: module_5053.bool, minimumFontScale: module_5053.number, disabled: module_5053.bool, dataDetectorType: module_5053.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8901 = DeprecatedStyleSheetPropType(_mod8901);
module_5053 = module_5053_mod;

export default obj;
