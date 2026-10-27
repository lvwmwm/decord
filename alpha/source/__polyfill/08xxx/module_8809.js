// Module ID: 8809
// Function ID: 8810
// Dependencies: [8810, 8811, 8812, 5011, 8802]

// Module 8809
import normalizeColor2 from "normalizeColor" /* 8802 */;
import _mod8810 from "module_8810" /* 8810 */;
import normalizeColor3 from "normalizeColor" /* 8811 */;
import merged22 from "merged2" /* 8812 */;
import "module_5011";
import module_5011_mod from "module_5011" /* 5011 */;

let module_5011;
const obj = { backfaceVisibility: module_5011.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderTopColor: normalizeColor2, borderRightColor: normalizeColor2, borderBottomColor: normalizeColor2, borderLeftColor: normalizeColor2, borderStartColor: normalizeColor2, borderEndColor: normalizeColor2, borderRadius: module_5011.number, borderTopLeftRadius: module_5011.number, borderTopRightRadius: module_5011.number, borderTopStartRadius: module_5011.number, borderTopEndRadius: module_5011.number, borderBottomLeftRadius: module_5011.number, borderBottomRightRadius: module_5011.number, borderBottomStartRadius: module_5011.number, borderBottomEndRadius: module_5011.number, borderStyle: module_5011.oneOf(["solid", "dotted", "dashed"]), borderWidth: module_5011.number, borderTopWidth: module_5011.number, borderRightWidth: module_5011.number, borderBottomWidth: module_5011.number, borderLeftWidth: module_5011.number, opacity: module_5011.number, elevation: module_5011.number };
const size = Object.assign(_mod8810);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5011 = module_5011_mod;

export default obj;
