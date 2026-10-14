// Module ID: 8455
// Function ID: 8456
// Dependencies: [8445, 8456, 4949, 8442, 8440]

// Module 8455
import normalizeColor from "normalizeColor" /* 8440 */;
import _mod8442 from "module_8442" /* 8442 */;
import _mod8456 from "module_8456" /* 8456 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8445 */;
import "module_4949";
import module_4949_mod from "module_4949" /* 4949 */;

let module_4949;
let module_8456;
const obj = { ellipsizeMode: module_4949.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4949.number, textBreakStrategy: module_4949.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4949.func, onPress: module_4949.func, onLongPress: module_4949.func, pressRetentionOffset: _mod8442, selectable: module_4949.bool, selectionColor: normalizeColor, suppressHighlighting: module_4949.bool, style: module_8456, testID: module_4949.string, nativeID: module_4949.string, allowFontScaling: module_4949.bool, maxFontSizeMultiplier: module_4949.number, accessible: module_4949.bool, adjustsFontSizeToFit: module_4949.bool, minimumFontScale: module_4949.number, disabled: module_4949.bool, dataDetectorType: module_4949.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8456 = DeprecatedStyleSheetPropType(_mod8456);
module_4949 = module_4949_mod;

export default obj;
