// Module ID: 13921
// Function ID: 13922
// Name: getOwnPropertyDescriptor
// Dependencies: [13869, 13870]

// Module 13921 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13869 */;
import _mod13870 from "module_13870" /* 13870 */;


export default getOwnPropertyDescriptor && _mod13870(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
