// Module ID: 8431
// Function ID: 8432
// Dependencies: [8421, 8432, 4908, 8418, 8416]

// Module 8431
import normalizeColor from "normalizeColor" /* 8416 */;
import _mod8418 from "module_8418" /* 8418 */;
import _mod8432 from "module_8432" /* 8432 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8421 */;
import "module_4908";
import module_4908_mod from "module_4908" /* 4908 */;

let module_4908;
let module_8432;
const obj = { ellipsizeMode: module_4908.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4908.number, textBreakStrategy: module_4908.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4908.func, onPress: module_4908.func, onLongPress: module_4908.func, pressRetentionOffset: _mod8418, selectable: module_4908.bool, selectionColor: normalizeColor, suppressHighlighting: module_4908.bool, style: module_8432, testID: module_4908.string, nativeID: module_4908.string, allowFontScaling: module_4908.bool, maxFontSizeMultiplier: module_4908.number, accessible: module_4908.bool, adjustsFontSizeToFit: module_4908.bool, minimumFontScale: module_4908.number, disabled: module_4908.bool, dataDetectorType: module_4908.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8432 = DeprecatedStyleSheetPropType(_mod8432);
module_4908 = module_4908_mod;

export default obj;
