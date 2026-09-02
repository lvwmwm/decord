// Module ID: 14230
// Function ID: 14231
// Name: getOwnPropertyDescriptor
// Dependencies: [14178, 14179]

// Module 14230 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14178 */;
import _mod14179 from "module_14179" /* 14179 */;


export default getOwnPropertyDescriptor && _mod14179(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
