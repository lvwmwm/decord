// Module ID: 8789
// Function ID: 8790
// Dependencies: [8785, 8786, 8787, 5003, 8777]

// Module 8789
import normalizeColor2 from "normalizeColor" /* 8777 */;
import _mod8785 from "module_8785" /* 8785 */;
import normalizeColor3 from "normalizeColor" /* 8786 */;
import merged22 from "merged2" /* 8787 */;
import "module_5003";
import module_5003_mod from "module_5003" /* 5003 */;

let module_5003;
const obj = { resizeMode: module_5003.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5003.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5003.number, borderRadius: module_5003.number, overflow: module_5003.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5003.number, overlayColor: module_5003.string, borderTopLeftRadius: module_5003.number, borderTopRightRadius: module_5003.number, borderBottomLeftRadius: module_5003.number, borderBottomRightRadius: module_5003.number };
const size = Object.assign(_mod8785);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5003 = module_5003_mod;

export default obj;
