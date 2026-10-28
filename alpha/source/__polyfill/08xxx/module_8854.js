// Module ID: 8854
// Function ID: 8855
// Dependencies: [8844, 8855, 5043, 8841, 8839]

// Module 8854
import normalizeColor from "normalizeColor" /* 8839 */;
import _mod8841 from "module_8841" /* 8841 */;
import _mod8855 from "module_8855" /* 8855 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8844 */;
import "module_5043";
import module_5043_mod from "module_5043" /* 5043 */;

let module_5043;
let module_8855;
const obj = { ellipsizeMode: module_5043.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5043.number, textBreakStrategy: module_5043.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5043.func, onPress: module_5043.func, onLongPress: module_5043.func, pressRetentionOffset: _mod8841, selectable: module_5043.bool, selectionColor: normalizeColor, suppressHighlighting: module_5043.bool, style: module_8855, testID: module_5043.string, nativeID: module_5043.string, allowFontScaling: module_5043.bool, maxFontSizeMultiplier: module_5043.number, accessible: module_5043.bool, adjustsFontSizeToFit: module_5043.bool, minimumFontScale: module_5043.number, disabled: module_5043.bool, dataDetectorType: module_5043.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8855 = DeprecatedStyleSheetPropType(_mod8855);
module_5043 = module_5043_mod;

export default obj;
