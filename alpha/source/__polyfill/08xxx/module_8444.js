// Module ID: 8444
// Function ID: 8445
// Dependencies: [8440, 8441, 8442, 4947, 8432]

// Module 8444
import normalizeColor2 from "normalizeColor" /* 8432 */;
import _mod8440 from "module_8440" /* 8440 */;
import normalizeColor3 from "normalizeColor" /* 8441 */;
import merged22 from "merged2" /* 8442 */;
import "module_4947";
import module_4947_mod from "module_4947" /* 4947 */;

let module_4947;
const obj = { resizeMode: module_4947.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_4947.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_4947.number, borderRadius: module_4947.number, overflow: module_4947.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_4947.number, overlayColor: module_4947.string, borderTopLeftRadius: module_4947.number, borderTopRightRadius: module_4947.number, borderBottomLeftRadius: module_4947.number, borderBottomRightRadius: module_4947.number };
const size = Object.assign(_mod8440);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_4947 = module_4947_mod;

export default obj;
