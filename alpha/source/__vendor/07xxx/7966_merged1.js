// Module ID: 7966
// Function ID: 7967
// Name: merged1
// Dependencies: [7957, 4693]

// Module 7966 (merged1)
import colorPropType from "colorPropType" /* 7957 */;
import emptyFunction from "module_4693" /* 4693 */;

const obj = { shadowColor: colorPropType, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.shadowOffset = emptyFunction.shape(size);
obj.shadowOpacity = emptyFunction.number;
obj.shadowRadius = emptyFunction.number;

export default obj;
