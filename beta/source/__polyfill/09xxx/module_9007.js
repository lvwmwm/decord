// Module ID: 9007
// Function ID: 9008
// Dependencies: [8997, 9008, 5211, 8994, 8992]

// Module 9007
import normalizeColor from "normalizeColor" /* 8992 */;
import _mod8994 from "module_8994" /* 8994 */;
import _mod9008 from "module_9008" /* 9008 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8997 */;
import "module_5211";
import module_5211_mod from "module_5211" /* 5211 */;

let module_5211;
let module_9008;
const obj = { ellipsizeMode: module_5211.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5211.number, textBreakStrategy: module_5211.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5211.func, onPress: module_5211.func, onLongPress: module_5211.func, pressRetentionOffset: _mod8994, selectable: module_5211.bool, selectionColor: normalizeColor, suppressHighlighting: module_5211.bool, style: module_9008, testID: module_5211.string, nativeID: module_5211.string, allowFontScaling: module_5211.bool, maxFontSizeMultiplier: module_5211.number, accessible: module_5211.bool, adjustsFontSizeToFit: module_5211.bool, minimumFontScale: module_5211.number, disabled: module_5211.bool, dataDetectorType: module_5211.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_9008 = DeprecatedStyleSheetPropType(_mod9008);
module_5211 = module_5211_mod;

export default obj;
