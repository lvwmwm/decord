// Module ID: 8663
// Function ID: 8664
// Dependencies: [8659, 8660, 8661, 5003, 8651]

// Module 8663
import normalizeColor2 from "normalizeColor" /* 8651 */;
import _mod8659 from "module_8659" /* 8659 */;
import normalizeColor3 from "normalizeColor" /* 8660 */;
import merged22 from "merged2" /* 8661 */;
import "module_5003";
import module_5003_mod from "module_5003" /* 5003 */;

let module_5003;
const obj = { resizeMode: module_5003.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5003.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5003.number, borderRadius: module_5003.number, overflow: module_5003.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5003.number, overlayColor: module_5003.string, borderTopLeftRadius: module_5003.number, borderTopRightRadius: module_5003.number, borderBottomLeftRadius: module_5003.number, borderBottomRightRadius: module_5003.number };
const size = Object.assign(_mod8659);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5003 = module_5003_mod;

export default obj;
