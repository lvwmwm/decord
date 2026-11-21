// Module ID: 9278
// Function ID: 9279
// Dependencies: [9274, 9275, 9276, 4954, 9266]

// Module 9278
import normalizeColor2 from "normalizeColor" /* 9266 */;
import _mod9274 from "module_9274" /* 9274 */;
import normalizeColor3 from "normalizeColor" /* 9275 */;
import merged22 from "merged2" /* 9276 */;
import "module_4954";
import module_4954_mod from "module_4954" /* 4954 */;

let module_4954;
const obj = { resizeMode: module_4954.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_4954.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_4954.number, borderRadius: module_4954.number, overflow: module_4954.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_4954.number, overlayColor: module_4954.string, borderTopLeftRadius: module_4954.number, borderTopRightRadius: module_4954.number, borderBottomLeftRadius: module_4954.number, borderBottomRightRadius: module_4954.number };
const size = Object.assign(_mod9274);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_4954 = module_4954_mod;

export default obj;
