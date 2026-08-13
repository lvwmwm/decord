// Module ID: 13684
// Function ID: 13685
// Name: getOwnPropertyDescriptor
// Dependencies: [13632, 13633]

// Module 13684 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13633")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
