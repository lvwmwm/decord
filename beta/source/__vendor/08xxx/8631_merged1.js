// Module ID: 8631
// Function ID: 8632
// Name: merged1
// Dependencies: [8622, 4620]

// Module 8631 (merged1)
import colorPropType from "colorPropType" /* 8622 */;
import emptyFunction from "module_4620" /* 4620 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;
