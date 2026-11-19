// Module ID: 9158
// Function ID: 9159
// Dependencies: [9154, 9155, 9156, 4833, 9146]

// Module 9158
import normalizeColor2 from "normalizeColor" /* 9146 */;
import _mod9154 from "module_9154" /* 9154 */;
import normalizeColor3 from "normalizeColor" /* 9155 */;
import merged22 from "merged2" /* 9156 */;
import "module_4833";
import module_4833_mod from "module_4833" /* 4833 */;

let module_4833;
const obj = { resizeMode: module_4833.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_4833.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_4833.number, borderRadius: module_4833.number, overflow: module_4833.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_4833.number, overlayColor: module_4833.string, borderTopLeftRadius: module_4833.number, borderTopRightRadius: module_4833.number, borderBottomLeftRadius: module_4833.number, borderBottomRightRadius: module_4833.number };
const size = Object.assign(_mod9154);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_4833 = module_4833_mod;

export default obj;
