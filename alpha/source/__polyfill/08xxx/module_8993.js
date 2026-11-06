// Module ID: 8993
// Function ID: 8994
// Dependencies: [8984, 8977, 5209]

// Module 8993
import normalizeColor from "normalizeColor" /* 8977 */;
import _mod8984 from "module_8984" /* 8984 */;
import "module_5209";
import module_5209_mod from "module_5209" /* 5209 */;

let arrayOf;
let module_5209;
let size;
const obj = { color: normalizeColor, fontFamily: module_5209.string, fontSize: module_5209.number, fontStyle: module_5209.oneOf(["normal", "italic"]), fontWeight: module_5209.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5209.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5209.shape(size), textShadowRadius: module_5209.number, textShadowColor: normalizeColor, letterSpacing: module_5209.number, lineHeight: module_5209.number, textAlign: module_5209.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5209.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5209.bool, textDecorationLine: module_5209.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5209.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5209.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5209.oneOf(["auto", "ltr", "rtl"]) };
const module_8984 = Object.assign(_mod8984);
module_5209 = module_5209_mod;
arrayOf = module_5209.arrayOf;
module_5209 = module_5209_mod;
size = { width: module_5209.number, height: module_5209.number };
module_5209 = module_5209_mod;

export default obj;
