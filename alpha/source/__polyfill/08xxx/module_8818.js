// Module ID: 8818
// Function ID: 8819
// Dependencies: [8809, 8802, 5010]

// Module 8818
import normalizeColor from "normalizeColor" /* 8802 */;
import _mod8809 from "module_8809" /* 8809 */;
import "module_5010";
import module_5010_mod from "module_5010" /* 5010 */;

let arrayOf;
let module_5010;
let size;
const obj = { color: normalizeColor, fontFamily: module_5010.string, fontSize: module_5010.number, fontStyle: module_5010.oneOf(["normal", "italic"]), fontWeight: module_5010.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5010.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5010.shape(size), textShadowRadius: module_5010.number, textShadowColor: normalizeColor, letterSpacing: module_5010.number, lineHeight: module_5010.number, textAlign: module_5010.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5010.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5010.bool, textDecorationLine: module_5010.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5010.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5010.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5010.oneOf(["auto", "ltr", "rtl"]) };
const module_8809 = Object.assign(_mod8809);
module_5010 = module_5010_mod;
arrayOf = module_5010.arrayOf;
module_5010 = module_5010_mod;
size = { width: module_5010.number, height: module_5010.number };
module_5010 = module_5010_mod;

export default obj;
