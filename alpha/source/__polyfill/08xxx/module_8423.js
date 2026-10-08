// Module ID: 8423
// Function ID: 8424
// Dependencies: [8413, 8424, 4907, 8410, 8408]

// Module 8423
import normalizeColor from "normalizeColor" /* 8408 */;
import _mod8410 from "module_8410" /* 8410 */;
import _mod8424 from "module_8424" /* 8424 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8413 */;
import "module_4907";
import module_4907_mod from "module_4907" /* 4907 */;

let module_4907;
let module_8424;
const obj = { ellipsizeMode: module_4907.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4907.number, textBreakStrategy: module_4907.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4907.func, onPress: module_4907.func, onLongPress: module_4907.func, pressRetentionOffset: _mod8410, selectable: module_4907.bool, selectionColor: normalizeColor, suppressHighlighting: module_4907.bool, style: module_8424, testID: module_4907.string, nativeID: module_4907.string, allowFontScaling: module_4907.bool, maxFontSizeMultiplier: module_4907.number, accessible: module_4907.bool, adjustsFontSizeToFit: module_4907.bool, minimumFontScale: module_4907.number, disabled: module_4907.bool, dataDetectorType: module_4907.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8424 = DeprecatedStyleSheetPropType(_mod8424);
module_4907 = module_4907_mod;

export default obj;
