// Module ID: 7774
// Function ID: 7775
// Dependencies: [7770, 7771, 7772, 4663, 7762]

// Module 7774
import normalizeColor2 from "normalizeColor" /* 7762 */;
import _mod7770 from "module_7770" /* 7770 */;
import normalizeColor3 from "normalizeColor" /* 7771 */;
import merged22 from "merged2" /* 7772 */;
import "module_4663";
import module_4663_mod from "module_4663" /* 4663 */;

let module_4663;
const obj = { resizeMode: module_4663.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_4663.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_4663.number, borderRadius: module_4663.number, overflow: module_4663.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_4663.number, overlayColor: module_4663.string, borderTopLeftRadius: module_4663.number, borderTopRightRadius: module_4663.number, borderBottomLeftRadius: module_4663.number, borderBottomRightRadius: module_4663.number };
const size = Object.assign(_mod7770);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_4663 = module_4663_mod;

export default obj;
