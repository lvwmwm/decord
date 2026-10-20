// Module ID: 8749
// Function ID: 8750
// Dependencies: [8739, 8750, 4979, 8736, 8734]

// Module 8749
import normalizeColor from "normalizeColor" /* 8734 */;
import _mod8736 from "module_8736" /* 8736 */;
import _mod8750 from "module_8750" /* 8750 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8739 */;
import "module_4979";
import module_4979_mod from "module_4979" /* 4979 */;

let module_4979;
let module_8750;
const obj = { ellipsizeMode: module_4979.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4979.number, textBreakStrategy: module_4979.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4979.func, onPress: module_4979.func, onLongPress: module_4979.func, pressRetentionOffset: _mod8736, selectable: module_4979.bool, selectionColor: normalizeColor, suppressHighlighting: module_4979.bool, style: module_8750, testID: module_4979.string, nativeID: module_4979.string, allowFontScaling: module_4979.bool, maxFontSizeMultiplier: module_4979.number, accessible: module_4979.bool, adjustsFontSizeToFit: module_4979.bool, minimumFontScale: module_4979.number, disabled: module_4979.bool, dataDetectorType: module_4979.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8750 = DeprecatedStyleSheetPropType(_mod8750);
module_4979 = module_4979_mod;

export default obj;
