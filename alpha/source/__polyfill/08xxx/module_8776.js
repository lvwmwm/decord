// Module ID: 8776
// Function ID: 8777
// Dependencies: [8766, 8777, 5000, 8763, 8761]

// Module 8776
import normalizeColor from "normalizeColor" /* 8761 */;
import _mod8763 from "module_8763" /* 8763 */;
import _mod8777 from "module_8777" /* 8777 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8766 */;
import "module_5000";
import module_5000_mod from "module_5000" /* 5000 */;

let module_5000;
let module_8777;
const obj = { ellipsizeMode: module_5000.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5000.number, textBreakStrategy: module_5000.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5000.func, onPress: module_5000.func, onLongPress: module_5000.func, pressRetentionOffset: _mod8763, selectable: module_5000.bool, selectionColor: normalizeColor, suppressHighlighting: module_5000.bool, style: module_8777, testID: module_5000.string, nativeID: module_5000.string, allowFontScaling: module_5000.bool, maxFontSizeMultiplier: module_5000.number, accessible: module_5000.bool, adjustsFontSizeToFit: module_5000.bool, minimumFontScale: module_5000.number, disabled: module_5000.bool, dataDetectorType: module_5000.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8777 = DeprecatedStyleSheetPropType(_mod8777);
module_5000 = module_5000_mod;

export default obj;
