// Module ID: 8746
// Function ID: 8747
// Dependencies: [8742, 8743, 8744, 4979, 8734]

// Module 8746
import normalizeColor2 from "normalizeColor" /* 8734 */;
import _mod8742 from "module_8742" /* 8742 */;
import normalizeColor3 from "normalizeColor" /* 8743 */;
import merged22 from "merged2" /* 8744 */;
import "module_4979";
import module_4979_mod from "module_4979" /* 4979 */;

let module_4979;
const obj = { resizeMode: module_4979.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_4979.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_4979.number, borderRadius: module_4979.number, overflow: module_4979.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_4979.number, overlayColor: module_4979.string, borderTopLeftRadius: module_4979.number, borderTopRightRadius: module_4979.number, borderBottomLeftRadius: module_4979.number, borderBottomRightRadius: module_4979.number };
const size = Object.assign(_mod8742);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_4979 = module_4979_mod;

export default obj;
