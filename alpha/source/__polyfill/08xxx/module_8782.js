// Module ID: 8782
// Function ID: 8783
// Dependencies: [8778, 8779, 8780, 5003, 8770]

// Module 8782
import normalizeColor2 from "normalizeColor" /* 8770 */;
import _mod8778 from "module_8778" /* 8778 */;
import normalizeColor3 from "normalizeColor" /* 8779 */;
import merged22 from "merged2" /* 8780 */;
import "module_5003";
import module_5003_mod from "module_5003" /* 5003 */;

let module_5003;
const obj = { resizeMode: module_5003.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5003.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5003.number, borderRadius: module_5003.number, overflow: module_5003.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5003.number, overlayColor: module_5003.string, borderTopLeftRadius: module_5003.number, borderTopRightRadius: module_5003.number, borderBottomLeftRadius: module_5003.number, borderBottomRightRadius: module_5003.number };
const size = Object.assign(_mod8778);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5003 = module_5003_mod;

export default obj;
