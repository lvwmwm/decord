// Module ID: 8849
// Function ID: 8850
// Dependencies: [8839, 8850, 5042, 8836, 8834]

// Module 8849
import normalizeColor from "normalizeColor" /* 8834 */;
import _mod8836 from "module_8836" /* 8836 */;
import _mod8850 from "module_8850" /* 8850 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8839 */;
import "module_5042";
import module_5042_mod from "module_5042" /* 5042 */;

let module_5042;
let module_8850;
const obj = { ellipsizeMode: module_5042.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5042.number, textBreakStrategy: module_5042.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5042.func, onPress: module_5042.func, onLongPress: module_5042.func, pressRetentionOffset: _mod8836, selectable: module_5042.bool, selectionColor: normalizeColor, suppressHighlighting: module_5042.bool, style: module_8850, testID: module_5042.string, nativeID: module_5042.string, allowFontScaling: module_5042.bool, maxFontSizeMultiplier: module_5042.number, accessible: module_5042.bool, adjustsFontSizeToFit: module_5042.bool, minimumFontScale: module_5042.number, disabled: module_5042.bool, dataDetectorType: module_5042.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8850 = DeprecatedStyleSheetPropType(_mod8850);
module_5042 = module_5042_mod;

export default obj;
