// Module ID: 8452
// Function ID: 8453
// Dependencies: [8448, 8449, 8450, 4949, 8440]

// Module 8452
import normalizeColor2 from "normalizeColor" /* 8440 */;
import _mod8448 from "module_8448" /* 8448 */;
import normalizeColor3 from "normalizeColor" /* 8449 */;
import merged22 from "merged2" /* 8450 */;
import "module_4949";
import module_4949_mod from "module_4949" /* 4949 */;

let module_4949;
const obj = { resizeMode: module_4949.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_4949.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_4949.number, borderRadius: module_4949.number, overflow: module_4949.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_4949.number, overlayColor: module_4949.string, borderTopLeftRadius: module_4949.number, borderTopRightRadius: module_4949.number, borderBottomLeftRadius: module_4949.number, borderBottomRightRadius: module_4949.number };
const size = Object.assign(_mod8448);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_4949 = module_4949_mod;

export default obj;
