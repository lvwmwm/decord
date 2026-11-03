// Module ID: 9024
// Function ID: 9025
// Dependencies: [9014, 9025, 5180, 9011, 9009]

// Module 9024
import normalizeColor from "normalizeColor" /* 9009 */;
import _mod9011 from "module_9011" /* 9011 */;
import _mod9025 from "module_9025" /* 9025 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 9014 */;
import "module_5180";
import module_5180_mod from "module_5180" /* 5180 */;

let module_5180;
let module_9025;
const obj = { ellipsizeMode: module_5180.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5180.number, textBreakStrategy: module_5180.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5180.func, onPress: module_5180.func, onLongPress: module_5180.func, pressRetentionOffset: _mod9011, selectable: module_5180.bool, selectionColor: normalizeColor, suppressHighlighting: module_5180.bool, style: module_9025, testID: module_5180.string, nativeID: module_5180.string, allowFontScaling: module_5180.bool, maxFontSizeMultiplier: module_5180.number, accessible: module_5180.bool, adjustsFontSizeToFit: module_5180.bool, minimumFontScale: module_5180.number, disabled: module_5180.bool, dataDetectorType: module_5180.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_9025 = DeprecatedStyleSheetPropType(_mod9025);
module_5180 = module_5180_mod;

export default obj;
