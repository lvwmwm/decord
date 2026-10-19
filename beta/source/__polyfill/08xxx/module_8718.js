// Module ID: 8718
// Function ID: 8719
// Dependencies: [8714, 8715, 8716, 5042, 8706]

// Module 8718
import normalizeColor2 from "normalizeColor" /* 8706 */;
import _mod8714 from "module_8714" /* 8714 */;
import normalizeColor3 from "normalizeColor" /* 8715 */;
import merged22 from "merged2" /* 8716 */;
import "module_5042";
import module_5042_mod from "module_5042" /* 5042 */;

let module_5042;
const obj = { resizeMode: module_5042.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5042.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5042.number, borderRadius: module_5042.number, overflow: module_5042.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5042.number, overlayColor: module_5042.string, borderTopLeftRadius: module_5042.number, borderTopRightRadius: module_5042.number, borderBottomLeftRadius: module_5042.number, borderBottomRightRadius: module_5042.number };
const size = Object.assign(_mod8714);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5042 = module_5042_mod;

export default obj;
