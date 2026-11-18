// Module ID: 9185
// Function ID: 9186
// Dependencies: [9175, 9186, 4864, 9172, 9170]

// Module 9185
import normalizeColor from "normalizeColor" /* 9170 */;
import _mod9172 from "module_9172" /* 9172 */;
import _mod9186 from "module_9186" /* 9186 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 9175 */;
import "module_4864";
import module_4864_mod from "module_4864" /* 4864 */;

let module_4864;
let module_9186;
const obj = { ellipsizeMode: module_4864.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4864.number, textBreakStrategy: module_4864.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4864.func, onPress: module_4864.func, onLongPress: module_4864.func, pressRetentionOffset: _mod9172, selectable: module_4864.bool, selectionColor: normalizeColor, suppressHighlighting: module_4864.bool, style: module_9186, testID: module_4864.string, nativeID: module_4864.string, allowFontScaling: module_4864.bool, maxFontSizeMultiplier: module_4864.number, accessible: module_4864.bool, adjustsFontSizeToFit: module_4864.bool, minimumFontScale: module_4864.number, disabled: module_4864.bool, dataDetectorType: module_4864.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_9186 = DeprecatedStyleSheetPropType(_mod9186);
module_4864 = module_4864_mod;

export default obj;
