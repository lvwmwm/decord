// Module ID: 8424
// Function ID: 8425
// Dependencies: [8415, 8408, 4907]

// Module 8424
import normalizeColor from "normalizeColor" /* 8408 */;
import _mod8415 from "module_8415" /* 8415 */;
import "module_4907";
import module_4907_mod from "module_4907" /* 4907 */;

let arrayOf;
let module_4907;
let size;
const obj = { color: normalizeColor, fontFamily: module_4907.string, fontSize: module_4907.number, fontStyle: module_4907.oneOf(["normal", "italic"]), fontWeight: module_4907.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_4907.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_4907.shape(size), textShadowRadius: module_4907.number, textShadowColor: normalizeColor, letterSpacing: module_4907.number, lineHeight: module_4907.number, textAlign: module_4907.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_4907.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_4907.bool, textDecorationLine: module_4907.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_4907.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_4907.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_4907.oneOf(["auto", "ltr", "rtl"]) };
const module_8415 = Object.assign(_mod8415);
module_4907 = module_4907_mod;
arrayOf = module_4907.arrayOf;
module_4907 = module_4907_mod;
size = { width: module_4907.number, height: module_4907.number };
module_4907 = module_4907_mod;

export default obj;
