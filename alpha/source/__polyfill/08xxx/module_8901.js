// Module ID: 8901
// Function ID: 8902
// Dependencies: [8892, 8885, 5053]

// Module 8901
import normalizeColor from "normalizeColor" /* 8885 */;
import _mod8892 from "module_8892" /* 8892 */;
import "module_5053";
import module_5053_mod from "module_5053" /* 5053 */;

let arrayOf;
let module_5053;
let size;
const obj = { color: normalizeColor, fontFamily: module_5053.string, fontSize: module_5053.number, fontStyle: module_5053.oneOf(["normal", "italic"]), fontWeight: module_5053.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5053.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5053.shape(size), textShadowRadius: module_5053.number, textShadowColor: normalizeColor, letterSpacing: module_5053.number, lineHeight: module_5053.number, textAlign: module_5053.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5053.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5053.bool, textDecorationLine: module_5053.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5053.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5053.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5053.oneOf(["auto", "ltr", "rtl"]) };
const module_8892 = Object.assign(_mod8892);
module_5053 = module_5053_mod;
arrayOf = module_5053.arrayOf;
module_5053 = module_5053_mod;
size = { width: module_5053.number, height: module_5053.number };
module_5053 = module_5053_mod;

export default obj;
