// Module ID: 5421
// Function ID: 5422
// Dependencies: []
// Exports: enableLogging, print

// Module 5421
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
