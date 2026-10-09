// Module ID: 8432
// Function ID: 8433
// Dependencies: [8423, 8416, 4908]

// Module 8432
import normalizeColor from "normalizeColor" /* 8416 */;
import _mod8423 from "module_8423" /* 8423 */;
import "module_4908";
import module_4908_mod from "module_4908" /* 4908 */;

let arrayOf;
let module_4908;
let size;
const obj = { color: normalizeColor, fontFamily: module_4908.string, fontSize: module_4908.number, fontStyle: module_4908.oneOf(["normal", "italic"]), fontWeight: module_4908.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_4908.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_4908.shape(size), textShadowRadius: module_4908.number, textShadowColor: normalizeColor, letterSpacing: module_4908.number, lineHeight: module_4908.number, textAlign: module_4908.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_4908.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_4908.bool, textDecorationLine: module_4908.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_4908.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_4908.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_4908.oneOf(["auto", "ltr", "rtl"]) };
const module_8423 = Object.assign(_mod8423);
module_4908 = module_4908_mod;
arrayOf = module_4908.arrayOf;
module_4908 = module_4908_mod;
size = { width: module_4908.number, height: module_4908.number };
module_4908 = module_4908_mod;

export default obj;
