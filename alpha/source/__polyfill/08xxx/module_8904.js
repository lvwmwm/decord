// Module ID: 8904
// Function ID: 8905
// Dependencies: [8900, 8901, 8902, 5084, 8892]

// Module 8904
import normalizeColor2 from "normalizeColor" /* 8892 */;
import _mod8900 from "module_8900" /* 8900 */;
import normalizeColor3 from "normalizeColor" /* 8901 */;
import merged22 from "merged2" /* 8902 */;
import "module_5084";
import module_5084_mod from "module_5084" /* 5084 */;

let module_5084;
const obj = { resizeMode: module_5084.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5084.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5084.number, borderRadius: module_5084.number, overflow: module_5084.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5084.number, overlayColor: module_5084.string, borderTopLeftRadius: module_5084.number, borderTopRightRadius: module_5084.number, borderBottomLeftRadius: module_5084.number, borderBottomRightRadius: module_5084.number };
const size = Object.assign(_mod8900);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5084 = module_5084_mod;

export default obj;
