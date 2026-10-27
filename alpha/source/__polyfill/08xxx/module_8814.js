// Module ID: 8814
// Function ID: 8815
// Dependencies: [8810, 8811, 8812, 5011, 8802]

// Module 8814
import normalizeColor2 from "normalizeColor" /* 8802 */;
import _mod8810 from "module_8810" /* 8810 */;
import normalizeColor3 from "normalizeColor" /* 8811 */;
import merged22 from "merged2" /* 8812 */;
import "module_5011";
import module_5011_mod from "module_5011" /* 5011 */;

let module_5011;
const obj = { resizeMode: module_5011.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5011.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5011.number, borderRadius: module_5011.number, overflow: module_5011.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5011.number, overlayColor: module_5011.string, borderTopLeftRadius: module_5011.number, borderTopRightRadius: module_5011.number, borderBottomLeftRadius: module_5011.number, borderBottomRightRadius: module_5011.number };
const size = Object.assign(_mod8810);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5011 = module_5011_mod;

export default obj;
