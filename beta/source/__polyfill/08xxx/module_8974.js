// Module ID: 8974
// Function ID: 8975
// Dependencies: [8964, 8975, 5179, 8961, 8959]

// Module 8974
import normalizeColor from "normalizeColor" /* 8959 */;
import _mod8961 from "module_8961" /* 8961 */;
import _mod8975 from "module_8975" /* 8975 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8964 */;
import "module_5179";
import module_5179_mod from "module_5179" /* 5179 */;

let module_5179;
let module_8975;
const obj = { ellipsizeMode: module_5179.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5179.number, textBreakStrategy: module_5179.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5179.func, onPress: module_5179.func, onLongPress: module_5179.func, pressRetentionOffset: _mod8961, selectable: module_5179.bool, selectionColor: normalizeColor, suppressHighlighting: module_5179.bool, style: module_8975, testID: module_5179.string, nativeID: module_5179.string, allowFontScaling: module_5179.bool, maxFontSizeMultiplier: module_5179.number, accessible: module_5179.bool, adjustsFontSizeToFit: module_5179.bool, minimumFontScale: module_5179.number, disabled: module_5179.bool, dataDetectorType: module_5179.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8975 = DeprecatedStyleSheetPropType(_mod8975);
module_5179 = module_5179_mod;

export default obj;
