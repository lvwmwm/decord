// Module ID: 13635
// Function ID: 13636
// Name: getOwnPropertyDescriptor
// Dependencies: [13583, 13584]

// Module 13635 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13584")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
