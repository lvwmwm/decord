// Module ID: 9025
// Function ID: 9026
// Dependencies: [9016, 9009, 5180]

// Module 9025
import normalizeColor from "normalizeColor" /* 9009 */;
import _mod9016 from "module_9016" /* 9016 */;
import "module_5180";
import module_5180_mod from "module_5180" /* 5180 */;

let arrayOf;
let module_5180;
let size;
const obj = { color: normalizeColor, fontFamily: module_5180.string, fontSize: module_5180.number, fontStyle: module_5180.oneOf(["normal", "italic"]), fontWeight: module_5180.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5180.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5180.shape(size), textShadowRadius: module_5180.number, textShadowColor: normalizeColor, letterSpacing: module_5180.number, lineHeight: module_5180.number, textAlign: module_5180.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5180.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5180.bool, textDecorationLine: module_5180.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5180.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5180.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5180.oneOf(["auto", "ltr", "rtl"]) };
const module_9016 = Object.assign(_mod9016);
module_5180 = module_5180_mod;
arrayOf = module_5180.arrayOf;
module_5180 = module_5180_mod;
size = { width: module_5180.number, height: module_5180.number };
module_5180 = module_5180_mod;

export default obj;
