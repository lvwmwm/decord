// Module ID: 9043
// Function ID: 9044
// Dependencies: [9039, 9040, 9041, 5182, 9031]

// Module 9043
import normalizeColor2 from "normalizeColor" /* 9031 */;
import _mod9039 from "module_9039" /* 9039 */;
import normalizeColor3 from "normalizeColor" /* 9040 */;
import merged22 from "merged2" /* 9041 */;
import "module_5182";
import module_5182_mod from "module_5182" /* 5182 */;

let module_5182;
const obj = { resizeMode: module_5182.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5182.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5182.number, borderRadius: module_5182.number, overflow: module_5182.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5182.number, overlayColor: module_5182.string, borderTopLeftRadius: module_5182.number, borderTopRightRadius: module_5182.number, borderBottomLeftRadius: module_5182.number, borderBottomRightRadius: module_5182.number };
const size = Object.assign(_mod9039);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5182 = module_5182_mod;

export default obj;
