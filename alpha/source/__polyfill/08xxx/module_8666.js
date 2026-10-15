// Module ID: 8666
// Function ID: 8667
// Dependencies: [8656, 8667, 5003, 8653, 8651]

// Module 8666
import normalizeColor from "normalizeColor" /* 8651 */;
import _mod8653 from "module_8653" /* 8653 */;
import _mod8667 from "module_8667" /* 8667 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8656 */;
import "module_5003";
import module_5003_mod from "module_5003" /* 5003 */;

let module_5003;
let module_8667;
const obj = { ellipsizeMode: module_5003.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5003.number, textBreakStrategy: module_5003.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5003.func, onPress: module_5003.func, onLongPress: module_5003.func, pressRetentionOffset: _mod8653, selectable: module_5003.bool, selectionColor: normalizeColor, suppressHighlighting: module_5003.bool, style: module_8667, testID: module_5003.string, nativeID: module_5003.string, allowFontScaling: module_5003.bool, maxFontSizeMultiplier: module_5003.number, accessible: module_5003.bool, adjustsFontSizeToFit: module_5003.bool, minimumFontScale: module_5003.number, disabled: module_5003.bool, dataDetectorType: module_5003.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8667 = DeprecatedStyleSheetPropType(_mod8667);
module_5003 = module_5003_mod;

export default obj;
