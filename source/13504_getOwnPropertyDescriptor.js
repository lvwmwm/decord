// Module ID: 13504
// Function ID: 13505
// Name: getOwnPropertyDescriptor
// Dependencies: [13452, 13453]

// Module 13504 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13453")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
