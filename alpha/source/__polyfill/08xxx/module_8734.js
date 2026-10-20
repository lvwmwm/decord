// Module ID: 8734
// Function ID: 8735
// Dependencies: [8730, 8731, 8732, 4979, 8722]

// Module 8734
import normalizeColor2 from "normalizeColor" /* 8722 */;
import _mod8730 from "module_8730" /* 8730 */;
import normalizeColor3 from "normalizeColor" /* 8731 */;
import merged22 from "merged2" /* 8732 */;
import "module_4979";
import module_4979_mod from "module_4979" /* 4979 */;

let module_4979;
const obj = { resizeMode: module_4979.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_4979.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_4979.number, borderRadius: module_4979.number, overflow: module_4979.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_4979.number, overlayColor: module_4979.string, borderTopLeftRadius: module_4979.number, borderTopRightRadius: module_4979.number, borderBottomLeftRadius: module_4979.number, borderBottomRightRadius: module_4979.number };
const size = Object.assign(_mod8730);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_4979 = module_4979_mod;

export default obj;
