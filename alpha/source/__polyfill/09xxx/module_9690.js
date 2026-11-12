// Module ID: 9690
// Function ID: 9691
// Dependencies: [9680, 9691, 5294, 9677, 9675]

// Module 9690
import normalizeColor from "normalizeColor" /* 9675 */;
import _mod9677 from "module_9677" /* 9677 */;
import _mod9691 from "module_9691" /* 9691 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 9680 */;
import "module_5294";
import module_5294_mod from "module_5294" /* 5294 */;

let module_5294;
let module_9691;
const obj = { ellipsizeMode: module_5294.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5294.number, textBreakStrategy: module_5294.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5294.func, onPress: module_5294.func, onLongPress: module_5294.func, pressRetentionOffset: _mod9677, selectable: module_5294.bool, selectionColor: normalizeColor, suppressHighlighting: module_5294.bool, style: module_9691, testID: module_5294.string, nativeID: module_5294.string, allowFontScaling: module_5294.bool, maxFontSizeMultiplier: module_5294.number, accessible: module_5294.bool, adjustsFontSizeToFit: module_5294.bool, minimumFontScale: module_5294.number, disabled: module_5294.bool, dataDetectorType: module_5294.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_9691 = DeprecatedStyleSheetPropType(_mod9691);
module_5294 = module_5294_mod;

export default obj;
