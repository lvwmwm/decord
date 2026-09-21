// Module ID: 8599
// Function ID: 8600
// Name: merged1
// Dependencies: [8590, 4588]

// Module 8599 (merged1)
import colorPropType from "colorPropType" /* 8590 */;
import emptyFunction from "module_4588" /* 4588 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;
