// Module ID: 8817
// Function ID: 8818
// Dependencies: [8807, 8818, 5010, 8804, 8802]

// Module 8817
import normalizeColor from "normalizeColor" /* 8802 */;
import _mod8804 from "module_8804" /* 8804 */;
import _mod8818 from "module_8818" /* 8818 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8807 */;
import "module_5010";
import module_5010_mod from "module_5010" /* 5010 */;

let module_5010;
let module_8818;
const obj = { ellipsizeMode: module_5010.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5010.number, textBreakStrategy: module_5010.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5010.func, onPress: module_5010.func, onLongPress: module_5010.func, pressRetentionOffset: _mod8804, selectable: module_5010.bool, selectionColor: normalizeColor, suppressHighlighting: module_5010.bool, style: module_8818, testID: module_5010.string, nativeID: module_5010.string, allowFontScaling: module_5010.bool, maxFontSizeMultiplier: module_5010.number, accessible: module_5010.bool, adjustsFontSizeToFit: module_5010.bool, minimumFontScale: module_5010.number, disabled: module_5010.bool, dataDetectorType: module_5010.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8818 = DeprecatedStyleSheetPropType(_mod8818);
module_5010 = module_5010_mod;

export default obj;
