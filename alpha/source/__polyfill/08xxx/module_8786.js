// Module ID: 8786
// Function ID: 8787
// Dependencies: [8777, 8770, 5003]

// Module 8786
import normalizeColor from "normalizeColor" /* 8770 */;
import _mod8777 from "module_8777" /* 8777 */;
import "module_5003";
import module_5003_mod from "module_5003" /* 5003 */;

let arrayOf;
let module_5003;
let size;
const obj = { color: normalizeColor, fontFamily: module_5003.string, fontSize: module_5003.number, fontStyle: module_5003.oneOf(["normal", "italic"]), fontWeight: module_5003.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5003.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5003.shape(size), textShadowRadius: module_5003.number, textShadowColor: normalizeColor, letterSpacing: module_5003.number, lineHeight: module_5003.number, textAlign: module_5003.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5003.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5003.bool, textDecorationLine: module_5003.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5003.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5003.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5003.oneOf(["auto", "ltr", "rtl"]) };
const module_8777 = Object.assign(_mod8777);
module_5003 = module_5003_mod;
arrayOf = module_5003.arrayOf;
module_5003 = module_5003_mod;
size = { width: module_5003.number, height: module_5003.number };
module_5003 = module_5003_mod;

export default obj;
