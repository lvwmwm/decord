// Module ID: 13693
// Function ID: 13694
// Name: getOwnPropertyDescriptor
// Dependencies: [13641, 13642]

// Module 13693 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13642")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
