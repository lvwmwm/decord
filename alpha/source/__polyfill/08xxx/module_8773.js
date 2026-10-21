// Module ID: 8773
// Function ID: 8774
// Dependencies: [8769, 8770, 8771, 5000, 8761]

// Module 8773
import normalizeColor2 from "normalizeColor" /* 8761 */;
import _mod8769 from "module_8769" /* 8769 */;
import normalizeColor3 from "normalizeColor" /* 8770 */;
import merged22 from "merged2" /* 8771 */;
import "module_5000";
import module_5000_mod from "module_5000" /* 5000 */;

let module_5000;
const obj = { resizeMode: module_5000.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5000.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5000.number, borderRadius: module_5000.number, overflow: module_5000.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5000.number, overlayColor: module_5000.string, borderTopLeftRadius: module_5000.number, borderTopRightRadius: module_5000.number, borderBottomLeftRadius: module_5000.number, borderBottomRightRadius: module_5000.number };
const size = Object.assign(_mod8769);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5000 = module_5000_mod;

export default obj;
