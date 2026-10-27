// Module ID: 8818
// Function ID: 8819
// Dependencies: [8809, 8802, 5011]

// Module 8818
import normalizeColor from "normalizeColor" /* 8802 */;
import _mod8809 from "module_8809" /* 8809 */;
import "module_5011";
import module_5011_mod from "module_5011" /* 5011 */;

let arrayOf;
let module_5011;
let size;
const obj = { color: normalizeColor, fontFamily: module_5011.string, fontSize: module_5011.number, fontStyle: module_5011.oneOf(["normal", "italic"]), fontWeight: module_5011.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5011.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5011.shape(size), textShadowRadius: module_5011.number, textShadowColor: normalizeColor, letterSpacing: module_5011.number, lineHeight: module_5011.number, textAlign: module_5011.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5011.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5011.bool, textDecorationLine: module_5011.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5011.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5011.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5011.oneOf(["auto", "ltr", "rtl"]) };
const module_8809 = Object.assign(_mod8809);
module_5011 = module_5011_mod;
arrayOf = module_5011.arrayOf;
module_5011 = module_5011_mod;
size = { width: module_5011.number, height: module_5011.number };
module_5011 = module_5011_mod;

export default obj;
