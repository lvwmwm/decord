// Module ID: 8891
// Function ID: 8892
// Dependencies: [8881, 8892, 5048, 8878, 8876]

// Module 8891
import normalizeColor from "normalizeColor" /* 8876 */;
import _mod8878 from "module_8878" /* 8878 */;
import _mod8892 from "module_8892" /* 8892 */;
import DeprecatedStyleSheetPropType from "DeprecatedStyleSheetPropType" /* 8881 */;
import "module_5048";
import module_5048_mod from "module_5048" /* 5048 */;

let module_5048;
let module_8892;
const obj = { ellipsizeMode: module_5048.oneOf(["head", "middle", "tail", "clip"]), numberOfLines: module_5048.number, textBreakStrategy: module_5048.oneOf(["simple", "highQuality", "balanced"]), onLayout: module_5048.func, onPress: module_5048.func, onLongPress: module_5048.func, pressRetentionOffset: _mod8878, selectable: module_5048.bool, selectionColor: normalizeColor, suppressHighlighting: module_5048.bool, style: module_8892, testID: module_5048.string, nativeID: module_5048.string, allowFontScaling: module_5048.bool, maxFontSizeMultiplier: module_5048.number, accessible: module_5048.bool, adjustsFontSizeToFit: module_5048.bool, minimumFontScale: module_5048.number, disabled: module_5048.bool, dataDetectorType: module_5048.oneOf(["phoneNumber", "link", "email", "none", "all"]) };
module_8892 = DeprecatedStyleSheetPropType(_mod8892);
module_5048 = module_5048_mod;

export default obj;
