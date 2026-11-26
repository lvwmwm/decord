// Module ID: 8907
// Function ID: 8908
// Dependencies: [8897, 8908, 5084, 8894, 8892]

// Module 8907
import normalizeColor from "normalizeColor" /* 8892 */;
import _mod8894 from "module_8894" /* 8894 */;
import _mod8908 from "module_8908" /* 8908 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8897 */;
import "module_5084";
import module_5084_mod from "module_5084" /* 5084 */;

let module_5084;
let module_8908;
const obj = { ellipsizeMode: module_5084.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5084.number, textBreakStrategy: module_5084.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5084.func, onPress: module_5084.func, onLongPress: module_5084.func, pressRetentionOffset: _mod8894, selectable: module_5084.bool, selectionColor: normalizeColor, suppressHighlighting: module_5084.bool, style: module_8908, testID: module_5084.string, nativeID: module_5084.string, allowFontScaling: module_5084.bool, maxFontSizeMultiplier: module_5084.number, accessible: module_5084.bool, adjustsFontSizeToFit: module_5084.bool, minimumFontScale: module_5084.number, disabled: module_5084.bool, dataDetectorType: module_5084.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8908 = DeprecatedStyleSheetPropType(_mod8908);
module_5084 = module_5084_mod;

export default obj;
