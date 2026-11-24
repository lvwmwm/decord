// Module ID: 9282
// Function ID: 9283
// Dependencies: [9273, 9266, 4954]

// Module 9282
import normalizeColor from "normalizeColor" /* 9266 */;
import _mod9273 from "module_9273" /* 9273 */;
import "module_4954";
import module_4954_mod from "module_4954" /* 4954 */;

let arrayOf;
let module_4954;
let size;
const obj = { color: normalizeColor, fontFamily: module_4954.string, fontSize: module_4954.number, fontStyle: module_4954.oneOf(["normal", "italic"]), fontWeight: module_4954.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_4954.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_4954.shape(size), textShadowRadius: module_4954.number, textShadowColor: normalizeColor, letterSpacing: module_4954.number, lineHeight: module_4954.number, textAlign: module_4954.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_4954.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_4954.bool, textDecorationLine: module_4954.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_4954.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_4954.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_4954.oneOf(["auto", "ltr", "rtl"]) };
const module_9273 = Object.assign(_mod9273);
module_4954 = module_4954_mod;
arrayOf = module_4954.arrayOf;
module_4954 = module_4954_mod;
size = { width: module_4954.number, height: module_4954.number };
module_4954 = module_4954_mod;

export default obj;
