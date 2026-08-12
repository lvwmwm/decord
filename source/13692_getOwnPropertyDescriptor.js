// Module ID: 13692
// Function ID: 13693
// Name: getOwnPropertyDescriptor
// Dependencies: [13640, 13641]

// Module 13692 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13641")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
