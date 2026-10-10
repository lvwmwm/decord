// Module ID: 8447
// Function ID: 8448
// Dependencies: [8437, 8448, 4947, 8434, 8432]

// Module 8447
import normalizeColor from "normalizeColor" /* 8432 */;
import _mod8434 from "module_8434" /* 8434 */;
import _mod8448 from "module_8448" /* 8448 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8437 */;
import "module_4947";
import module_4947_mod from "module_4947" /* 4947 */;

let module_4947;
let module_8448;
const obj = { ellipsizeMode: module_4947.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4947.number, textBreakStrategy: module_4947.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4947.func, onPress: module_4947.func, onLongPress: module_4947.func, pressRetentionOffset: _mod8434, selectable: module_4947.bool, selectionColor: normalizeColor, suppressHighlighting: module_4947.bool, style: module_8448, testID: module_4947.string, nativeID: module_4947.string, allowFontScaling: module_4947.bool, maxFontSizeMultiplier: module_4947.number, accessible: module_4947.bool, adjustsFontSizeToFit: module_4947.bool, minimumFontScale: module_4947.number, disabled: module_4947.bool, dataDetectorType: module_4947.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8448 = DeprecatedStyleSheetPropType(_mod8448);
module_4947 = module_4947_mod;

export default obj;
