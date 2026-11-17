// Module ID: 9767
// Function ID: 9768
// Dependencies: [9763, 9764, 9765, 5351, 9755]

// Module 9767
import normalizeColor2 from "normalizeColor" /* 9755 */;
import _mod9763 from "module_9763" /* 9763 */;
import normalizeColor3 from "normalizeColor" /* 9764 */;
import merged22 from "merged2" /* 9765 */;
import "module_5351";
import module_5351_mod from "module_5351" /* 5351 */;

let module_5351;
const obj = { resizeMode: module_5351.oneOf(["center", "contain", "cover", "repeat", "stretch"]), backfaceVisibility: module_5351.oneOf(["visible", "hidden"]), backgroundColor: normalizeColor2, borderColor: normalizeColor2, borderWidth: module_5351.number, borderRadius: module_5351.number, overflow: module_5351.oneOf(["visible", "hidden"]), tintColor: normalizeColor2, opacity: module_5351.number, overlayColor: module_5351.string, borderTopLeftRadius: module_5351.number, borderTopRightRadius: module_5351.number, borderBottomLeftRadius: module_5351.number, borderBottomRightRadius: module_5351.number };
const size = Object.assign(_mod9763);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_5351 = module_5351_mod;

export default obj;
