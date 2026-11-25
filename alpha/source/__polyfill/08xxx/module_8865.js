// Module ID: 8865
// Function ID: 8866
// Dependencies: [8855, 8866, 5053, 8852, 8850]

// Module 8865
import normalizeColor from "normalizeColor" /* 8850 */;
import _mod8852 from "module_8852" /* 8852 */;
import _mod8866 from "module_8866" /* 8866 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8855 */;
import "module_5053";
import module_5053_mod from "module_5053" /* 5053 */;

let module_5053;
let module_8866;
const obj = { ellipsizeMode: module_5053.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5053.number, textBreakStrategy: module_5053.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5053.func, onPress: module_5053.func, onLongPress: module_5053.func, pressRetentionOffset: _mod8852, selectable: module_5053.bool, selectionColor: normalizeColor, suppressHighlighting: module_5053.bool, style: module_8866, testID: module_5053.string, nativeID: module_5053.string, allowFontScaling: module_5053.bool, maxFontSizeMultiplier: module_5053.number, accessible: module_5053.bool, adjustsFontSizeToFit: module_5053.bool, minimumFontScale: module_5053.number, disabled: module_5053.bool, dataDetectorType: module_5053.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8866 = DeprecatedStyleSheetPropType(_mod8866);
module_5053 = module_5053_mod;

export default obj;
