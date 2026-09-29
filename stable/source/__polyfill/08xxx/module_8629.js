// Module ID: 8629
// Function ID: 8630
// Dependencies: [8625, 8626, 8627, 4617, 8617]

// Module 8629
import colorPropType from "colorPropType" /* 8617 */;
import _mod8625 from "module_8625" /* 8625 */;
import merged12 from "merged1" /* 8626 */;
import merged22 from "merged2" /* 8627 */;
import emptyFunction_mod from "module_4617" /* 4617 */;

const obj = {};
const size = Object.assign(_mod8625);
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
