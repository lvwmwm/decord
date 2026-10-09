// Module ID: 8428
// Function ID: 8429
// Dependencies: [8424, 8425, 8426, 4908, 8416]

// Module 8428
import normalizeColor2 from "normalizeColor" /* 8416 */;
import _mod8424 from "module_8424" /* 8424 */;
import normalizeColor3 from "normalizeColor" /* 8425 */;
import merged22 from "merged2" /* 8426 */;
import "module_4908";
import module_4908_mod from "module_4908" /* 4908 */;

let module_4908;
const obj = { resizeMode: module_4908.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_4908.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_4908.number, borderRadius: module_4908.number, overflow: module_4908.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_4908.number, overlayColor: module_4908.string, borderTopLeftRadius: module_4908.number, borderTopRightRadius: module_4908.number, borderBottomLeftRadius: module_4908.number, borderBottomRightRadius: module_4908.number };
const size = Object.assign(_mod8424);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_4908 = module_4908_mod;

export default obj;
