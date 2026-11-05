// Module ID: 9046
// Function ID: 9047
// Dependencies: [9036, 9047, 5182, 9033, 9031]

// Module 9046
import normalizeColor from "normalizeColor" /* 9031 */;
import _mod9033 from "module_9033" /* 9033 */;
import _mod9047 from "module_9047" /* 9047 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 9036 */;
import "module_5182";
import module_5182_mod from "module_5182" /* 5182 */;

let module_5182;
let module_9047;
const obj = { ellipsizeMode: module_5182.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5182.number, textBreakStrategy: module_5182.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5182.func, onPress: module_5182.func, onLongPress: module_5182.func, pressRetentionOffset: _mod9033, selectable: module_5182.bool, selectionColor: normalizeColor, suppressHighlighting: module_5182.bool, style: module_9047, testID: module_5182.string, nativeID: module_5182.string, allowFontScaling: module_5182.bool, maxFontSizeMultiplier: module_5182.number, accessible: module_5182.bool, adjustsFontSizeToFit: module_5182.bool, minimumFontScale: module_5182.number, disabled: module_5182.bool, dataDetectorType: module_5182.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_9047 = DeprecatedStyleSheetPropType(_mod9047);
module_5182 = module_5182_mod;

export default obj;
