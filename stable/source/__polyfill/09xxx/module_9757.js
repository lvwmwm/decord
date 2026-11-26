// Module ID: 9757
// Function ID: 9758
// Dependencies: [9747, 9758, 5347, 9744, 9742]

// Module 9757
import normalizeColor from "normalizeColor" /* 9742 */;
import _mod9744 from "module_9744" /* 9744 */;
import _mod9758 from "module_9758" /* 9758 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 9747 */;
import "module_5347";
import module_5347_mod from "module_5347" /* 5347 */;

let module_5347;
let module_9758;
const obj = { ellipsizeMode: module_5347.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5347.number, textBreakStrategy: module_5347.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5347.func, onPress: module_5347.func, onLongPress: module_5347.func, pressRetentionOffset: _mod9744, selectable: module_5347.bool, selectionColor: normalizeColor, suppressHighlighting: module_5347.bool, style: module_9758, testID: module_5347.string, nativeID: module_5347.string, allowFontScaling: module_5347.bool, maxFontSizeMultiplier: module_5347.number, accessible: module_5347.bool, adjustsFontSizeToFit: module_5347.bool, minimumFontScale: module_5347.number, disabled: module_5347.bool, dataDetectorType: module_5347.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_9758 = DeprecatedStyleSheetPropType(_mod9758);
module_5347 = module_5347_mod;

export default obj;
