// Module ID: 13541
// Function ID: 13542
// Name: getOwnPropertyDescriptor
// Dependencies: [13489, 13490]

// Module 13541 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13490")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
