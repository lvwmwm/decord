// Module ID: 7763
// Function ID: 7764
// Name: merged1
// Dependencies: [7754, 4660]

// Module 7763 (merged1)
import colorPropType from "colorPropType" /* 7754 */;
import emptyFunction from "module_4660" /* 4660 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;
