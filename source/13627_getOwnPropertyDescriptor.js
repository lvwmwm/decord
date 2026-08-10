// Module ID: 13627
// Function ID: 13628
// Name: getOwnPropertyDescriptor
// Dependencies: [13575, 13576]

// Module 13627 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13576")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
