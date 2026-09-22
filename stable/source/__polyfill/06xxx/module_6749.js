// Module ID: 6749
// Function ID: 6750
// Dependencies: []
// Exports: enableLogging, print

// Module 6749
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
