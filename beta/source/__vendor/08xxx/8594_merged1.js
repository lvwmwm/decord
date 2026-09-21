// Module ID: 8594
// Function ID: 8595
// Name: merged1
// Dependencies: [8585, 4585]

// Module 8594 (merged1)
import colorPropType from "colorPropType" /* 8585 */;
import emptyFunction from "module_4585" /* 4585 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;
