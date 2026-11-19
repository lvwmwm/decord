// Module ID: 9161
// Function ID: 9162
// Dependencies: [9151, 9162, 4833, 9148, 9146]

// Module 9161
import normalizeColor from "normalizeColor" /* 9146 */;
import _mod9148 from "module_9148" /* 9148 */;
import _mod9162 from "module_9162" /* 9162 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 9151 */;
import "module_4833";
import module_4833_mod from "module_4833" /* 4833 */;

let module_4833;
let module_9162;
const obj = { ellipsizeMode: module_4833.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4833.number, textBreakStrategy: module_4833.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4833.func, onPress: module_4833.func, onLongPress: module_4833.func, pressRetentionOffset: _mod9148, selectable: module_4833.bool, selectionColor: normalizeColor, suppressHighlighting: module_4833.bool, style: module_9162, testID: module_4833.string, nativeID: module_4833.string, allowFontScaling: module_4833.bool, maxFontSizeMultiplier: module_4833.number, accessible: module_4833.bool, adjustsFontSizeToFit: module_4833.bool, minimumFontScale: module_4833.number, disabled: module_4833.bool, dataDetectorType: module_4833.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_9162 = DeprecatedStyleSheetPropType(_mod9162);
module_4833 = module_4833_mod;

export default obj;
