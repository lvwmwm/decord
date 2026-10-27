// Module ID: 8817
// Function ID: 8818
// Dependencies: [8807, 8818, 5011, 8804, 8802]

// Module 8817
import normalizeColor from "normalizeColor" /* 8802 */;
import _mod8804 from "module_8804" /* 8804 */;
import _mod8818 from "module_8818" /* 8818 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8807 */;
import "module_5011";
import module_5011_mod from "module_5011" /* 5011 */;

let module_5011;
let module_8818;
const obj = { ellipsizeMode: module_5011.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5011.number, textBreakStrategy: module_5011.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5011.func, onPress: module_5011.func, onLongPress: module_5011.func, pressRetentionOffset: _mod8804, selectable: module_5011.bool, selectionColor: normalizeColor, suppressHighlighting: module_5011.bool, style: module_8818, testID: module_5011.string, nativeID: module_5011.string, allowFontScaling: module_5011.bool, maxFontSizeMultiplier: module_5011.number, accessible: module_5011.bool, adjustsFontSizeToFit: module_5011.bool, minimumFontScale: module_5011.number, disabled: module_5011.bool, dataDetectorType: module_5011.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8818 = DeprecatedStyleSheetPropType(_mod8818);
module_5011 = module_5011_mod;

export default obj;
