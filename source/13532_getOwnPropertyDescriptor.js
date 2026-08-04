// Module ID: 13532
// Function ID: 13533
// Name: getOwnPropertyDescriptor
// Dependencies: [13480, 13481]

// Module 13532 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13481")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
