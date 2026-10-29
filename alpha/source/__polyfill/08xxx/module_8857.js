// Module ID: 8857
// Function ID: 8858
// Dependencies: [8847, 8858, 5044, 8844, 8842]

// Module 8857
import normalizeColor from "normalizeColor" /* 8842 */;
import _mod8844 from "module_8844" /* 8844 */;
import _mod8858 from "module_8858" /* 8858 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8847 */;
import "module_5044";
import module_5044_mod from "module_5044" /* 5044 */;

let module_5044;
let module_8858;
const obj = { ellipsizeMode: module_5044.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5044.number, textBreakStrategy: module_5044.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5044.func, onPress: module_5044.func, onLongPress: module_5044.func, pressRetentionOffset: _mod8844, selectable: module_5044.bool, selectionColor: normalizeColor, suppressHighlighting: module_5044.bool, style: module_8858, testID: module_5044.string, nativeID: module_5044.string, allowFontScaling: module_5044.bool, maxFontSizeMultiplier: module_5044.number, accessible: module_5044.bool, adjustsFontSizeToFit: module_5044.bool, minimumFontScale: module_5044.number, disabled: module_5044.bool, dataDetectorType: module_5044.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8858 = DeprecatedStyleSheetPropType(_mod8858);
module_5044 = module_5044_mod;

export default obj;
