// Module ID: 8673
// Function ID: 8674
// Name: merged1
// Dependencies: [8664, 4658]

// Module 8673 (merged1)
import colorPropType from "colorPropType" /* 8664 */;
import emptyFunction from "module_4658" /* 4658 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;
