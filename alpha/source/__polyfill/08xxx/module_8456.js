// Module ID: 8456
// Function ID: 8457
// Dependencies: [8447, 8440, 4949]

// Module 8456
import normalizeColor from "normalizeColor" /* 8440 */;
import _mod8447 from "module_8447" /* 8447 */;
import "module_4949";
import module_4949_mod from "module_4949" /* 4949 */;

let arrayOf;
let module_4949;
let size;
const obj = { color: normalizeColor, fontFamily: module_4949.string, fontSize: module_4949.number, fontStyle: module_4949.oneOf(["normal", "italic"]), fontWeight: module_4949.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_4949.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_4949.shape(size), textShadowRadius: module_4949.number, textShadowColor: normalizeColor, letterSpacing: module_4949.number, lineHeight: module_4949.number, textAlign: module_4949.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_4949.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_4949.bool, textDecorationLine: module_4949.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_4949.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_4949.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_4949.oneOf(["auto", "ltr", "rtl"]) };
const module_8447 = Object.assign(_mod8447);
module_4949 = module_4949_mod;
arrayOf = module_4949.arrayOf;
module_4949 = module_4949_mod;
size = { width: module_4949.number, height: module_4949.number };
module_4949 = module_4949_mod;

export default obj;
