// Module ID: 9757
// Function ID: 9758
// Dependencies: [9747, 9758, 5357, 9744, 9742]

// Module 9757
import normalizeColor from "normalizeColor" /* 9742 */;
import _mod9744 from "module_9744" /* 9744 */;
import _mod9758 from "module_9758" /* 9758 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 9747 */;
import "module_5357";
import module_5357_mod from "module_5357" /* 5357 */;

let module_5357;
let module_9758;
const obj = { ellipsizeMode: module_5357.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5357.number, textBreakStrategy: module_5357.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5357.func, onPress: module_5357.func, onLongPress: module_5357.func, pressRetentionOffset: _mod9744, selectable: module_5357.bool, selectionColor: normalizeColor, suppressHighlighting: module_5357.bool, style: module_9758, testID: module_5357.string, nativeID: module_5357.string, allowFontScaling: module_5357.bool, maxFontSizeMultiplier: module_5357.number, accessible: module_5357.bool, adjustsFontSizeToFit: module_5357.bool, minimumFontScale: module_5357.number, disabled: module_5357.bool, dataDetectorType: module_5357.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_9758 = DeprecatedStyleSheetPropType(_mod9758);
module_5357 = module_5357_mod;

export default obj;
