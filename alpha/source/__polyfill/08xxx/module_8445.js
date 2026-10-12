// Module ID: 8445
// Function ID: 8446
// Dependencies: [8441, 8442, 8443, 4947, 8433]

// Module 8445
import normalizeColor2 from "normalizeColor" /* 8433 */;
import _mod8441 from "module_8441" /* 8441 */;
import normalizeColor3 from "normalizeColor" /* 8442 */;
import merged22 from "merged2" /* 8443 */;
import "module_4947";
import module_4947_mod from "module_4947" /* 4947 */;

let module_4947;
const obj = { resizeMode: module_4947.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_4947.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_4947.number, borderRadius: module_4947.number, overflow: module_4947.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_4947.number, overlayColor: module_4947.string, borderTopLeftRadius: module_4947.number, borderTopRightRadius: module_4947.number, borderBottomLeftRadius: module_4947.number, borderBottomRightRadius: module_4947.number };
const size = Object.assign(_mod8441);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_4947 = module_4947_mod;

export default obj;
