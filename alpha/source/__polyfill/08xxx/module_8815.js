// Module ID: 8815
// Function ID: 8816
// Dependencies: [8805, 8816, 5008, 8802, 8800]

// Module 8815
import normalizeColor from "normalizeColor" /* 8800 */;
import _mod8802 from "module_8802" /* 8802 */;
import _mod8816 from "module_8816" /* 8816 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8805 */;
import "module_5008";
import module_5008_mod from "module_5008" /* 5008 */;

let module_5008;
let module_8816;
const obj = { ellipsizeMode: module_5008.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5008.number, textBreakStrategy: module_5008.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5008.func, onPress: module_5008.func, onLongPress: module_5008.func, pressRetentionOffset: _mod8802, selectable: module_5008.bool, selectionColor: normalizeColor, suppressHighlighting: module_5008.bool, style: module_8816, testID: module_5008.string, nativeID: module_5008.string, allowFontScaling: module_5008.bool, maxFontSizeMultiplier: module_5008.number, accessible: module_5008.bool, adjustsFontSizeToFit: module_5008.bool, minimumFontScale: module_5008.number, disabled: module_5008.bool, dataDetectorType: module_5008.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8816 = DeprecatedStyleSheetPropType(_mod8816);
module_5008 = module_5008_mod;

export default obj;
