// Module ID: 8626
// Function ID: 8627
// Name: merged1
// Dependencies: [8617, 4617]

// Module 8626 (merged1)
import colorPropType from "colorPropType" /* 8617 */;
import emptyFunction from "module_4617" /* 4617 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;
