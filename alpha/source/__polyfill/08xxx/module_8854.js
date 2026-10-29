// Module ID: 8854
// Function ID: 8855
// Dependencies: [8850, 8851, 8852, 5044, 8842]

// Module 8854
import normalizeColor2 from "normalizeColor" /* 8842 */;
import _mod8850 from "module_8850" /* 8850 */;
import normalizeColor3 from "normalizeColor" /* 8851 */;
import merged22 from "merged2" /* 8852 */;
import "module_5044";
import module_5044_mod from "module_5044" /* 5044 */;

let module_5044;
const obj = { resizeMode: module_5044.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5044.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5044.number, borderRadius: module_5044.number, overflow: module_5044.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5044.number, overlayColor: module_5044.string, borderTopLeftRadius: module_5044.number, borderTopRightRadius: module_5044.number, borderBottomLeftRadius: module_5044.number, borderBottomRightRadius: module_5044.number };
const size = Object.assign(_mod8850);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5044 = module_5044_mod;

export default obj;
