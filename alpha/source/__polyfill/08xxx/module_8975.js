// Module ID: 8975
// Function ID: 8976
// Dependencies: [8966, 8959, 5179]

// Module 8975
import normalizeColor from "normalizeColor" /* 8959 */;
import _mod8966 from "module_8966" /* 8966 */;
import "module_5179";
import module_5179_mod from "module_5179" /* 5179 */;

let arrayOf;
let module_5179;
let size;
const obj = { color: normalizeColor, fontFamily: module_5179.string, fontSize: module_5179.number, fontStyle: module_5179.oneOf(["normal", "italic"]), fontWeight: module_5179.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5179.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5179.shape(size), textShadowRadius: module_5179.number, textShadowColor: normalizeColor, letterSpacing: module_5179.number, lineHeight: module_5179.number, textAlign: module_5179.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5179.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5179.bool, textDecorationLine: module_5179.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5179.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5179.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5179.oneOf(["auto", "ltr", "rtl"]) };
const module_8966 = Object.assign(_mod8966);
module_5179 = module_5179_mod;
arrayOf = module_5179.arrayOf;
module_5179 = module_5179_mod;
size = { width: module_5179.number, height: module_5179.number };
module_5179 = module_5179_mod;

export default obj;
