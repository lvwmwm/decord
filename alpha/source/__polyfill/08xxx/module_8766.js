// Module ID: 8766
// Function ID: 8767
// Dependencies: [8756, 8767, 4958, 8753, 8751]

// Module 8766
import normalizeColor from "normalizeColor" /* 8751 */;
import _mod8753 from "module_8753" /* 8753 */;
import _mod8767 from "module_8767" /* 8767 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8756 */;
import "module_4958";
import module_4958_mod from "module_4958" /* 4958 */;

let module_4958;
let module_8767;
const obj = { ellipsizeMode: module_4958.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4958.number, textBreakStrategy: module_4958.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4958.func, onPress: module_4958.func, onLongPress: module_4958.func, pressRetentionOffset: _mod8753, selectable: module_4958.bool, selectionColor: normalizeColor, suppressHighlighting: module_4958.bool, style: module_8767, testID: module_4958.string, nativeID: module_4958.string, allowFontScaling: module_4958.bool, maxFontSizeMultiplier: module_4958.number, accessible: module_4958.bool, adjustsFontSizeToFit: module_4958.bool, minimumFontScale: module_4958.number, disabled: module_4958.bool, dataDetectorType: module_4958.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8767 = DeprecatedStyleSheetPropType(_mod8767);
module_4958 = module_4958_mod;

export default obj;
