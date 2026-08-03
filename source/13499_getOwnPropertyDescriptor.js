// Module ID: 13499
// Function ID: 13500
// Name: getOwnPropertyDescriptor
// Dependencies: [13447, 13448]

// Module 13499 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13448")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
