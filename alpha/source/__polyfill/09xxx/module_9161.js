// Module ID: 9161
// Function ID: 9162
// Dependencies: [9151, 9162, 4835, 9148, 9146]

// Module 9161
import normalizeColor from "normalizeColor" /* 9146 */;
import _mod9148 from "module_9148" /* 9148 */;
import _mod9162 from "module_9162" /* 9162 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 9151 */;
import "module_4835";
import module_4835_mod from "module_4835" /* 4835 */;

let module_4835;
let module_9162;
const obj = { ellipsizeMode: module_4835.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4835.number, textBreakStrategy: module_4835.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4835.func, onPress: module_4835.func, onLongPress: module_4835.func, pressRetentionOffset: _mod9148, selectable: module_4835.bool, selectionColor: normalizeColor, suppressHighlighting: module_4835.bool, style: module_9162, testID: module_4835.string, nativeID: module_4835.string, allowFontScaling: module_4835.bool, maxFontSizeMultiplier: module_4835.number, accessible: module_4835.bool, adjustsFontSizeToFit: module_4835.bool, minimumFontScale: module_4835.number, disabled: module_4835.bool, dataDetectorType: module_4835.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_9162 = DeprecatedStyleSheetPropType(_mod9162);
module_4835 = module_4835_mod;

export default obj;
