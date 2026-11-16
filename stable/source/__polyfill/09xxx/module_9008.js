// Module ID: 9008
// Function ID: 9009
// Dependencies: [8999, 8992, 5211]

// Module 9008
import normalizeColor from "normalizeColor" /* 8992 */;
import _mod8999 from "module_8999" /* 8999 */;
import "module_5211";
import module_5211_mod from "module_5211" /* 5211 */;

let arrayOf;
let module_5211;
let size;
const obj = { color: normalizeColor, fontFamily: module_5211.string, fontSize: module_5211.number, fontStyle: module_5211.oneOf(["normal", "italic"]), fontWeight: module_5211.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5211.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5211.shape(size), textShadowRadius: module_5211.number, textShadowColor: normalizeColor, letterSpacing: module_5211.number, lineHeight: module_5211.number, textAlign: module_5211.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5211.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5211.bool, textDecorationLine: module_5211.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5211.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5211.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5211.oneOf(["auto", "ltr", "rtl"]) };
const module_8999 = Object.assign(_mod8999);
module_5211 = module_5211_mod;
arrayOf = module_5211.arrayOf;
module_5211 = module_5211_mod;
size = { width: module_5211.number, height: module_5211.number };
module_5211 = module_5211_mod;

export default obj;
