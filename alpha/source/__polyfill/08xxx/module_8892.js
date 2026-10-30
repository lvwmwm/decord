// Module ID: 8892
// Function ID: 8893
// Dependencies: [8883, 8876, 5048]

// Module 8892
import normalizeColor from "normalizeColor" /* 8876 */;
import _mod8883 from "module_8883" /* 8883 */;
import "module_5048";
import module_5048_mod from "module_5048" /* 5048 */;

let arrayOf;
let module_5048;
let size;
const obj = { color: normalizeColor, fontFamily: module_5048.string, fontSize: module_5048.number, fontStyle: module_5048.oneOf(["normal", "italic"]), fontWeight: module_5048.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), fontVariant: arrayOf(module_5048.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"])), textShadowOffset: module_5048.shape(size), textShadowRadius: module_5048.number, textShadowColor: normalizeColor, letterSpacing: module_5048.number, lineHeight: module_5048.number, textAlign: module_5048.oneOf(["auto", "left", "right", "center", "justify"]), textAlignVertical: module_5048.oneOf(["auto", "top", "bottom", "center"]), includeFontPadding: module_5048.bool, textDecorationLine: module_5048.oneOf(["none", "underline", "line-through", "underline line-through"]), textDecorationStyle: module_5048.oneOf(["solid", "double", "dotted", "dashed"]), textDecorationColor: normalizeColor, textTransform: module_5048.oneOf(["none", "capitalize", "uppercase", "lowercase"]), writingDirection: module_5048.oneOf(["auto", "ltr", "rtl"]) };
const module_8883 = Object.assign(_mod8883);
module_5048 = module_5048_mod;
arrayOf = module_5048.arrayOf;
module_5048 = module_5048_mod;
size = { width: module_5048.number, height: module_5048.number };
module_5048 = module_5048_mod;

export default obj;
