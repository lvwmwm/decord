// Module ID: 8737
// Function ID: 8738
// Dependencies: [8727, 8738, 4979, 8724, 8722]

// Module 8737
import normalizeColor from "normalizeColor" /* 8722 */;
import _mod8724 from "module_8724" /* 8724 */;
import _mod8738 from "module_8738" /* 8738 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8727 */;
import "module_4979";
import module_4979_mod from "module_4979" /* 4979 */;

let module_4979;
let module_8738;
const obj = { ellipsizeMode: module_4979.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4979.number, textBreakStrategy: module_4979.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4979.func, onPress: module_4979.func, onLongPress: module_4979.func, pressRetentionOffset: _mod8724, selectable: module_4979.bool, selectionColor: normalizeColor, suppressHighlighting: module_4979.bool, style: module_8738, testID: module_4979.string, nativeID: module_4979.string, allowFontScaling: module_4979.bool, maxFontSizeMultiplier: module_4979.number, accessible: module_4979.bool, adjustsFontSizeToFit: module_4979.bool, minimumFontScale: module_4979.number, disabled: module_4979.bool, dataDetectorType: module_4979.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8738 = DeprecatedStyleSheetPropType(_mod8738);
module_4979 = module_4979_mod;

export default obj;
