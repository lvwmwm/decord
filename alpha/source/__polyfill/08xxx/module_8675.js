// Module ID: 8675
// Function ID: 8676
// Dependencies: [8665, 8676, 5006, 8662, 8660]

// Module 8675
import normalizeColor from "normalizeColor" /* 8660 */;
import _mod8662 from "module_8662" /* 8662 */;
import _mod8676 from "module_8676" /* 8676 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8665 */;
import "module_5006";
import module_5006_mod from "module_5006" /* 5006 */;

let module_5006;
let module_8676;
const obj = { ellipsizeMode: module_5006.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5006.number, textBreakStrategy: module_5006.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5006.func, onPress: module_5006.func, onLongPress: module_5006.func, pressRetentionOffset: _mod8662, selectable: module_5006.bool, selectionColor: normalizeColor, suppressHighlighting: module_5006.bool, style: module_8676, testID: module_5006.string, nativeID: module_5006.string, allowFontScaling: module_5006.bool, maxFontSizeMultiplier: module_5006.number, accessible: module_5006.bool, adjustsFontSizeToFit: module_5006.bool, minimumFontScale: module_5006.number, disabled: module_5006.bool, dataDetectorType: module_5006.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8676 = DeprecatedStyleSheetPropType(_mod8676);
module_5006 = module_5006_mod;

export default obj;
