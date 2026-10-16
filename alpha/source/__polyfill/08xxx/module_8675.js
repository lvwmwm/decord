// Module ID: 8675
// Function ID: 8676
// Dependencies: [8666, 8659, 5006]

// Module 8675
import normalizeColor from "normalizeColor" /* 8659 */;
import _mod8666 from "module_8666" /* 8666 */;
import "module_5006";
import module_5006_mod from "module_5006" /* 5006 */;

let arrayOf;
let module_5006;
let size;
const obj = { color: normalizeColor, fontFamily: module_5006.string, fontSize: module_5006.number, fontStyle: module_5006.oneOf(["normal", "italic"]), fontWeight: module_5006.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5006.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5006.shape(size), textShadowRadius: module_5006.number, textShadowColor: normalizeColor, letterSpacing: module_5006.number, lineHeight: module_5006.number, textAlign: module_5006.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5006.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5006.bool, textDecorationLine: module_5006.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5006.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5006.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5006.oneOf(["auto", "ltr", "rtl"]) };
const module_8666 = Object.assign(_mod8666);
module_5006 = module_5006_mod;
arrayOf = module_5006.arrayOf;
module_5006 = module_5006_mod;
size = { width: module_5006.number, height: module_5006.number };
module_5006 = module_5006_mod;

export default obj;
