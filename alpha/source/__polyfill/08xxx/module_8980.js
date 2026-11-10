// Module ID: 8980
// Function ID: 8981
// Dependencies: [8970, 8981, 5181, 8967, 8965]

// Module 8980
import normalizeColor from "normalizeColor" /* 8965 */;
import _mod8967 from "module_8967" /* 8967 */;
import _mod8981 from "module_8981" /* 8981 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8970 */;
import "module_5181";
import module_5181_mod from "module_5181" /* 5181 */;

let module_5181;
let module_8981;
const obj = { ellipsizeMode: module_5181.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5181.number, textBreakStrategy: module_5181.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5181.func, onPress: module_5181.func, onLongPress: module_5181.func, pressRetentionOffset: _mod8967, selectable: module_5181.bool, selectionColor: normalizeColor, suppressHighlighting: module_5181.bool, style: module_8981, testID: module_5181.string, nativeID: module_5181.string, allowFontScaling: module_5181.bool, maxFontSizeMultiplier: module_5181.number, accessible: module_5181.bool, adjustsFontSizeToFit: module_5181.bool, minimumFontScale: module_5181.number, disabled: module_5181.bool, dataDetectorType: module_5181.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8981 = DeprecatedStyleSheetPropType(_mod8981);
module_5181 = module_5181_mod;

export default obj;
