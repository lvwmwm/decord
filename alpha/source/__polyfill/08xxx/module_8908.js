// Module ID: 8908
// Function ID: 8909
// Dependencies: [8898, 8909, 5084, 8895, 8893]

// Module 8908
import normalizeColor from "normalizeColor" /* 8893 */;
import _mod8895 from "module_8895" /* 8895 */;
import _mod8909 from "module_8909" /* 8909 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8898 */;
import "module_5084";
import module_5084_mod from "module_5084" /* 5084 */;

let module_5084;
let module_8909;
const obj = { ellipsizeMode: module_5084.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5084.number, textBreakStrategy: module_5084.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5084.func, onPress: module_5084.func, onLongPress: module_5084.func, pressRetentionOffset: _mod8895, selectable: module_5084.bool, selectionColor: normalizeColor, suppressHighlighting: module_5084.bool, style: module_8909, testID: module_5084.string, nativeID: module_5084.string, allowFontScaling: module_5084.bool, maxFontSizeMultiplier: module_5084.number, accessible: module_5084.bool, adjustsFontSizeToFit: module_5084.bool, minimumFontScale: module_5084.number, disabled: module_5084.bool, dataDetectorType: module_5084.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8909 = DeprecatedStyleSheetPropType(_mod8909);
module_5084 = module_5084_mod;

export default obj;
