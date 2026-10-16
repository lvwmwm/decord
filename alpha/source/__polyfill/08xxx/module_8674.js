// Module ID: 8674
// Function ID: 8675
// Dependencies: [8664, 8675, 5006, 8661, 8659]

// Module 8674
import normalizeColor from "normalizeColor" /* 8659 */;
import _mod8661 from "module_8661" /* 8661 */;
import _mod8675 from "module_8675" /* 8675 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8664 */;
import "module_5006";
import module_5006_mod from "module_5006" /* 5006 */;

let module_5006;
let module_8675;
const obj = { ellipsizeMode: module_5006.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5006.number, textBreakStrategy: module_5006.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5006.func, onPress: module_5006.func, onLongPress: module_5006.func, pressRetentionOffset: _mod8661, selectable: module_5006.bool, selectionColor: normalizeColor, suppressHighlighting: module_5006.bool, style: module_8675, testID: module_5006.string, nativeID: module_5006.string, allowFontScaling: module_5006.bool, maxFontSizeMultiplier: module_5006.number, accessible: module_5006.bool, adjustsFontSizeToFit: module_5006.bool, minimumFontScale: module_5006.number, disabled: module_5006.bool, dataDetectorType: module_5006.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8675 = DeprecatedStyleSheetPropType(_mod8675);
module_5006 = module_5006_mod;

export default obj;
