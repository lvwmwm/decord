// Module ID: 8721
// Function ID: 8722
// Dependencies: [8711, 8722, 5042, 8708, 8706]

// Module 8721
import normalizeColor from "normalizeColor" /* 8706 */;
import _mod8708 from "module_8708" /* 8708 */;
import _mod8722 from "module_8722" /* 8722 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8711 */;
import "module_5042";
import module_5042_mod from "module_5042" /* 5042 */;

let module_5042;
let module_8722;
const obj = { ellipsizeMode: module_5042.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5042.number, textBreakStrategy: module_5042.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5042.func, onPress: module_5042.func, onLongPress: module_5042.func, pressRetentionOffset: _mod8708, selectable: module_5042.bool, selectionColor: normalizeColor, suppressHighlighting: module_5042.bool, style: module_8722, testID: module_5042.string, nativeID: module_5042.string, allowFontScaling: module_5042.bool, maxFontSizeMultiplier: module_5042.number, accessible: module_5042.bool, adjustsFontSizeToFit: module_5042.bool, minimumFontScale: module_5042.number, disabled: module_5042.bool, dataDetectorType: module_5042.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8722 = DeprecatedStyleSheetPropType(_mod8722);
module_5042 = module_5042_mod;

export default obj;
