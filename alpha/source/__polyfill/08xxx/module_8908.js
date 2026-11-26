// Module ID: 8908
// Function ID: 8909
// Dependencies: [8899, 8892, 5084]

// Module 8908
import normalizeColor from "normalizeColor" /* 8892 */;
import _mod8899 from "module_8899" /* 8899 */;
import "module_5084";
import module_5084_mod from "module_5084" /* 5084 */;

let arrayOf;
let module_5084;
let size;
const obj = { color: normalizeColor, fontFamily: module_5084.string, fontSize: module_5084.number, fontStyle: module_5084.oneOf(["normal", "italic"]), fontWeight: module_5084.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5084.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5084.shape(size), textShadowRadius: module_5084.number, textShadowColor: normalizeColor, letterSpacing: module_5084.number, lineHeight: module_5084.number, textAlign: module_5084.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5084.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5084.bool, textDecorationLine: module_5084.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5084.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5084.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5084.oneOf(["auto", "ltr", "rtl"]) };
const module_8899 = Object.assign(_mod8899);
module_5084 = module_5084_mod;
arrayOf = module_5084.arrayOf;
module_5084 = module_5084_mod;
size = { width: module_5084.number, height: module_5084.number };
module_5084 = module_5084_mod;

export default obj;
