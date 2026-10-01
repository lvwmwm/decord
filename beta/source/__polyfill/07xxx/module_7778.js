// Module ID: 7778
// Function ID: 7779
// Dependencies: [7769, 7762, 4663]

// Module 7778
import normalizeColor from "normalizeColor" /* 7762 */;
import _mod7769 from "module_7769" /* 7769 */;
import "module_4663";
import module_4663_mod from "module_4663" /* 4663 */;

let arrayOf;
let module_4663;
let size;
const obj = { color: normalizeColor, fontFamily: module_4663.string, fontSize: module_4663.number, fontStyle: module_4663.oneOf(["normal", "italic"]), fontWeight: module_4663.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_4663.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_4663.shape(size), textShadowRadius: module_4663.number, textShadowColor: normalizeColor, letterSpacing: module_4663.number, lineHeight: module_4663.number, textAlign: module_4663.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_4663.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_4663.bool, textDecorationLine: module_4663.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_4663.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_4663.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_4663.oneOf(["auto", "ltr", "rtl"]) };
const module_7769 = Object.assign(_mod7769);
module_4663 = module_4663_mod;
arrayOf = module_4663.arrayOf;
module_4663 = module_4663_mod;
size = { width: module_4663.number, height: module_4663.number };
module_4663 = module_4663_mod;

export default obj;
