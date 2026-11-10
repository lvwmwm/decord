// Module ID: 8981
// Function ID: 8982
// Dependencies: [8972, 8965, 5181]

// Module 8981
import normalizeColor from "normalizeColor" /* 8965 */;
import _mod8972 from "module_8972" /* 8972 */;
import "module_5181";
import module_5181_mod from "module_5181" /* 5181 */;

let arrayOf;
let module_5181;
let size;
const obj = { color: normalizeColor, fontFamily: module_5181.string, fontSize: module_5181.number, fontStyle: module_5181.oneOf(["normal", "italic"]), fontWeight: module_5181.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5181.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5181.shape(size), textShadowRadius: module_5181.number, textShadowColor: normalizeColor, letterSpacing: module_5181.number, lineHeight: module_5181.number, textAlign: module_5181.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5181.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5181.bool, textDecorationLine: module_5181.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5181.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5181.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5181.oneOf(["auto", "ltr", "rtl"]) };
const module_8972 = Object.assign(_mod8972);
module_5181 = module_5181_mod;
arrayOf = module_5181.arrayOf;
module_5181 = module_5181_mod;
size = { width: module_5181.number, height: module_5181.number };
module_5181 = module_5181_mod;

export default obj;
