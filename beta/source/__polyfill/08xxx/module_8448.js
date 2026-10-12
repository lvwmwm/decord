// Module ID: 8448
// Function ID: 8449
// Dependencies: [8438, 8449, 4947, 8435, 8433]

// Module 8448
import normalizeColor from "normalizeColor" /* 8433 */;
import _mod8435 from "module_8435" /* 8435 */;
import _mod8449 from "module_8449" /* 8449 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8438 */;
import "module_4947";
import module_4947_mod from "module_4947" /* 4947 */;

let module_4947;
let module_8449;
const obj = { ellipsizeMode: module_4947.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_4947.number, textBreakStrategy: module_4947.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_4947.func, onPress: module_4947.func, onLongPress: module_4947.func, pressRetentionOffset: _mod8435, selectable: module_4947.bool, selectionColor: normalizeColor, suppressHighlighting: module_4947.bool, style: module_8449, testID: module_4947.string, nativeID: module_4947.string, allowFontScaling: module_4947.bool, maxFontSizeMultiplier: module_4947.number, accessible: module_4947.bool, adjustsFontSizeToFit: module_4947.bool, minimumFontScale: module_4947.number, disabled: module_4947.bool, dataDetectorType: module_4947.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8449 = DeprecatedStyleSheetPropType(_mod8449);
module_4947 = module_4947_mod;

export default obj;
