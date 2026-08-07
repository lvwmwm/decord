// Module ID: 13555
// Function ID: 13556
// Name: getOwnPropertyDescriptor
// Dependencies: [13503, 13504]

// Module 13555 (getOwnPropertyDescriptor)

export default require("getOwnPropertyDescriptor") && require("module_13504")(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
