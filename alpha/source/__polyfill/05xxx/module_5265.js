// Module ID: 5265
// Function ID: 5266
// Dependencies: []
// Exports: enableLogging, print

// Module 5265
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
