// Module ID: 13821
// Function ID: 13822
// Name: getOwnPropertyDescriptor
// Dependencies: [13769, 13770]

// Module 13821 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13769 */;
import _mod13770 from "module_13770" /* 13770 */;


export default getOwnPropertyDescriptor && _mod13770(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
