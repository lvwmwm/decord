// Module ID: 8738
// Function ID: 8739
// Dependencies: [8729, 8722, 4979]

// Module 8738
import normalizeColor from "normalizeColor" /* 8722 */;
import _mod8729 from "module_8729" /* 8729 */;
import "module_4979";
import module_4979_mod from "module_4979" /* 4979 */;

let arrayOf;
let module_4979;
let size;
const obj = { color: normalizeColor, fontFamily: module_4979.string, fontSize: module_4979.number, fontStyle: module_4979.oneOf(["normal", "italic"]), fontWeight: module_4979.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_4979.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_4979.shape(size), textShadowRadius: module_4979.number, textShadowColor: normalizeColor, letterSpacing: module_4979.number, lineHeight: module_4979.number, textAlign: module_4979.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_4979.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_4979.bool, textDecorationLine: module_4979.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_4979.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_4979.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_4979.oneOf(["auto", "ltr", "rtl"]) };
const module_8729 = Object.assign(_mod8729);
module_4979 = module_4979_mod;
arrayOf = module_4979.arrayOf;
module_4979 = module_4979_mod;
size = { width: module_4979.number, height: module_4979.number };
module_4979 = module_4979_mod;

export default obj;
