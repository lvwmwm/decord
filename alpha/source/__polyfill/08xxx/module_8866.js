// Module ID: 8866
// Function ID: 8867
// Dependencies: [8857, 8850, 5053]

// Module 8866
import normalizeColor from "normalizeColor" /* 8850 */;
import _mod8857 from "module_8857" /* 8857 */;
import "module_5053";
import module_5053_mod from "module_5053" /* 5053 */;

let arrayOf;
let module_5053;
let size;
const obj = { color: normalizeColor, fontFamily: module_5053.string, fontSize: module_5053.number, fontStyle: module_5053.oneOf(["normal", "italic"]), fontWeight: module_5053.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5053.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5053.shape(size), textShadowRadius: module_5053.number, textShadowColor: normalizeColor, letterSpacing: module_5053.number, lineHeight: module_5053.number, textAlign: module_5053.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5053.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5053.bool, textDecorationLine: module_5053.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5053.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5053.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5053.oneOf(["auto", "ltr", "rtl"]) };
const module_8857 = Object.assign(_mod8857);
module_5053 = module_5053_mod;
arrayOf = module_5053.arrayOf;
module_5053 = module_5053_mod;
size = { width: module_5053.number, height: module_5053.number };
module_5053 = module_5053_mod;

export default obj;
