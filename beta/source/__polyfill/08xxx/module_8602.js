// Module ID: 8602
// Function ID: 8603
// Dependencies: [8598, 8599, 8600, 4588, 8590]

// Module 8602
import colorPropType from "colorPropType" /* 8590 */;
import _mod8598 from "module_8598" /* 8598 */;
import merged12 from "merged1" /* 8599 */;
import merged22 from "merged2" /* 8600 */;
import emptyFunction_mod from "module_4588" /* 4588 */;

const obj = {};
const size = Object.assign(_mod8598);
const merged1 = Object.assign(merged12);
const merged2 = Object.assign(merged22);
let emptyFunction = emptyFunction_mod;
obj.resizeMode = emptyFunction.oneOf(["center", "contain", "cover", "repeat", "stretch"]);
let emptyFunction = emptyFunction_mod;
obj.backfaceVisibility = emptyFunction.oneOf(["visible", "hidden"]);
obj.backgroundColor = colorPropType;
obj.borderColor = colorPropType;
obj.borderWidth = emptyFunction.number;
obj.borderRadius = emptyFunction.number;
let emptyFunction = emptyFunction_mod;
obj.overflow = emptyFunction.oneOf(["visible", "hidden"]);
obj.tintColor = colorPropType;
obj.opacity = emptyFunction.number;
obj.overlayColor = emptyFunction.string;
obj.borderTopLeftRadius = emptyFunction.number;
obj.borderTopRightRadius = emptyFunction.number;
obj.borderBottomLeftRadius = emptyFunction.number;
obj.borderBottomRightRadius = emptyFunction.number;

export default obj;
