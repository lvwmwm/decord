// Module ID: 8669
// Function ID: 8670
// Name: merged1
// Dependencies: [8660, 4656]

// Module 8669 (merged1)
import colorPropType from "colorPropType" /* 8660 */;
import emptyFunction from "module_4656" /* 4656 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;
