// Module ID: 9691
// Function ID: 9692
// Dependencies: [9681, 9692, 5294, 9678, 9676]

// Module 9691
import normalizeColor from "normalizeColor" /* 9676 */;
import _mod9678 from "module_9678" /* 9678 */;
import _mod9692 from "module_9692" /* 9692 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 9681 */;
import "module_5294";
import module_5294_mod from "module_5294" /* 5294 */;

let module_5294;
let module_9692;
const obj = { ellipsizeMode: module_5294.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5294.number, textBreakStrategy: module_5294.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5294.func, onPress: module_5294.func, onLongPress: module_5294.func, pressRetentionOffset: _mod9678, selectable: module_5294.bool, selectionColor: normalizeColor, suppressHighlighting: module_5294.bool, style: module_9692, testID: module_5294.string, nativeID: module_5294.string, allowFontScaling: module_5294.bool, maxFontSizeMultiplier: module_5294.number, accessible: module_5294.bool, adjustsFontSizeToFit: module_5294.bool, minimumFontScale: module_5294.number, disabled: module_5294.bool, dataDetectorType: module_5294.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_9692 = DeprecatedStyleSheetPropType(_mod9692);
module_5294 = module_5294_mod;

export default obj;
