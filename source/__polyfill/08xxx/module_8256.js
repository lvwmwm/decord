// Module ID: 8256
// Function ID: 8257
// Dependencies: [8252, 8253, 8254, 4310, 8244]

// Module 8256
import colorPropType from "colorPropType" /* 8244 */;
import _mod8252 from "module_8252" /* 8252 */;
import merged12 from "merged1" /* 8253 */;
import merged22 from "merged2" /* 8254 */;
import emptyFunction from "emptyFunction" /* 4310 */;

const obj = {};
const module_8252 = Object.assign(_mod8252);
const merged1 = Object.assign(merged12);
const merged2 = Object.assign(merged22);
obj.resizeMode = emptyFunction.oneOf(["center", "contain", "cover", "repeat", "stretch"]);
obj.backfaceVisibility = emptyFunction.oneOf(["visible", "hidden"]);
obj.backgroundColor = colorPropType;
obj.borderColor = colorPropType;
obj.borderWidth = emptyFunction.number;
obj.borderRadius = emptyFunction.number;
obj.overflow = emptyFunction.oneOf(["visible", "hidden"]);
obj.tintColor = colorPropType;
obj.opacity = emptyFunction.number;
obj.overlayColor = emptyFunction.string;
obj.borderTopLeftRadius = emptyFunction.number;
obj.borderTopRightRadius = emptyFunction.number;
obj.borderBottomLeftRadius = emptyFunction.number;
obj.borderBottomRightRadius = emptyFunction.number;

export default obj;
