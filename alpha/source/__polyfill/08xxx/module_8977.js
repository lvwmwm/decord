// Module ID: 8977
// Function ID: 8978
// Dependencies: [8973, 8974, 8975, 5181, 8965]

// Module 8977
import normalizeColor2 from "normalizeColor" /* 8965 */;
import _mod8973 from "module_8973" /* 8973 */;
import normalizeColor3 from "normalizeColor" /* 8974 */;
import merged22 from "merged2" /* 8975 */;
import "module_5181";
import module_5181_mod from "module_5181" /* 5181 */;

let module_5181;
const obj = { resizeMode: module_5181.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5181.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5181.number, borderRadius: module_5181.number, overflow: module_5181.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5181.number, overlayColor: module_5181.string, borderTopLeftRadius: module_5181.number, borderTopRightRadius: module_5181.number, borderBottomLeftRadius: module_5181.number, borderBottomRightRadius: module_5181.number };
const size = Object.assign(_mod8973);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5181 = module_5181_mod;

export default obj;
