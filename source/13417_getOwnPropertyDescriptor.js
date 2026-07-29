// Module ID: 13417
// Function ID: 13418
// Name: getOwnPropertyDescriptor
// Dependencies: [13365, 13366]

// Module 13417 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13366")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
