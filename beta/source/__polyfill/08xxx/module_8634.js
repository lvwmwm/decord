// Module ID: 8634
// Function ID: 8635
// Dependencies: [8630, 8631, 8632, 4620, 8622]

// Module 8634
import colorPropType from "colorPropType" /* 8622 */;
import _mod8630 from "module_8630" /* 8630 */;
import merged12 from "merged1" /* 8631 */;
import merged22 from "merged2" /* 8632 */;
import emptyFunction_mod from "module_4620" /* 4620 */;

const obj = {};
const size = Object.assign(_mod8630);
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
