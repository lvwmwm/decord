// Module ID: 8785
// Function ID: 8786
// Dependencies: [8775, 8786, 5003, 8772, 8770]

// Module 8785
import normalizeColor from "normalizeColor" /* 8770 */;
import _mod8772 from "module_8772" /* 8772 */;
import _mod8786 from "module_8786" /* 8786 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8775 */;
import "module_5003";
import module_5003_mod from "module_5003" /* 5003 */;

let module_5003;
let module_8786;
const obj = { ellipsizeMode: module_5003.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5003.number, textBreakStrategy: module_5003.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5003.func, onPress: module_5003.func, onLongPress: module_5003.func, pressRetentionOffset: _mod8772, selectable: module_5003.bool, selectionColor: normalizeColor, suppressHighlighting: module_5003.bool, style: module_8786, testID: module_5003.string, nativeID: module_5003.string, allowFontScaling: module_5003.bool, maxFontSizeMultiplier: module_5003.number, accessible: module_5003.bool, adjustsFontSizeToFit: module_5003.bool, minimumFontScale: module_5003.number, disabled: module_5003.bool, dataDetectorType: module_5003.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8786 = DeprecatedStyleSheetPropType(_mod8786);
module_5003 = module_5003_mod;

export default obj;
