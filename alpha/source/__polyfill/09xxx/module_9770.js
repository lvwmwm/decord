// Module ID: 9770
// Function ID: 9771
// Dependencies: [9760, 9771, 5351, 9757, 9755]

// Module 9770
import normalizeColor from "normalizeColor" /* 9755 */;
import _mod9757 from "module_9757" /* 9757 */;
import _mod9771 from "module_9771" /* 9771 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 9760 */;
import "module_5351";
import module_5351_mod from "module_5351" /* 5351 */;

let module_5351;
let module_9771;
const obj = { ellipsizeMode: module_5351.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5351.number, textBreakStrategy: module_5351.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5351.func, onPress: module_5351.func, onLongPress: module_5351.func, pressRetentionOffset: _mod9757, selectable: module_5351.bool, selectionColor: normalizeColor, suppressHighlighting: module_5351.bool, style: module_9771, testID: module_5351.string, nativeID: module_5351.string, allowFontScaling: module_5351.bool, maxFontSizeMultiplier: module_5351.number, accessible: module_5351.bool, adjustsFontSizeToFit: module_5351.bool, minimumFontScale: module_5351.number, disabled: module_5351.bool, dataDetectorType: module_5351.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_9771 = DeprecatedStyleSheetPropType(_mod9771);
module_5351 = module_5351_mod;

export default obj;
