// Module ID: 7781
// Function ID: 7782
// Dependencies: [7771, 7782, 4665, 7768, 7766]

// Module 7781
import normalizeColor from "normalizeColor" /* 7766 */;
import _mod7768 from "module_7768" /* 7768 */;
import _mod7782 from "module_7782" /* 7782 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 7771 */;
import "module_4665";
import module_4665_mod from "module_4665" /* 4665 */;

let module_4665;
let module_7782;
const obj = { ellipsizeMode: module_4665.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4665.number, textBreakStrategy: module_4665.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4665.func, onPress: module_4665.func, onLongPress: module_4665.func, pressRetentionOffset: _mod7768, selectable: module_4665.bool, selectionColor: normalizeColor, suppressHighlighting: module_4665.bool, style: module_7782, testID: module_4665.string, nativeID: module_4665.string, allowFontScaling: module_4665.bool, maxFontSizeMultiplier: module_4665.number, accessible: module_4665.bool, adjustsFontSizeToFit: module_4665.bool, minimumFontScale: module_4665.number, disabled: module_4665.bool, dataDetectorType: module_4665.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_7782 = DeprecatedStyleSheetPropType(_mod7782);
module_4665 = module_4665_mod;

export default obj;
