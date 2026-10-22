// Module ID: 8792
// Function ID: 8793
// Dependencies: [8782, 8793, 5003, 8779, 8777]

// Module 8792
import normalizeColor from "normalizeColor" /* 8777 */;
import _mod8779 from "module_8779" /* 8779 */;
import _mod8793 from "module_8793" /* 8793 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8782 */;
import "module_5003";
import module_5003_mod from "module_5003" /* 5003 */;

let module_5003;
let module_8793;
const obj = { ellipsizeMode: module_5003.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5003.number, textBreakStrategy: module_5003.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5003.func, onPress: module_5003.func, onLongPress: module_5003.func, pressRetentionOffset: _mod8779, selectable: module_5003.bool, selectionColor: normalizeColor, suppressHighlighting: module_5003.bool, style: module_8793, testID: module_5003.string, nativeID: module_5003.string, allowFontScaling: module_5003.bool, maxFontSizeMultiplier: module_5003.number, accessible: module_5003.bool, adjustsFontSizeToFit: module_5003.bool, minimumFontScale: module_5003.number, disabled: module_5003.bool, dataDetectorType: module_5003.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8793 = DeprecatedStyleSheetPropType(_mod8793);
module_5003 = module_5003_mod;

export default obj;
