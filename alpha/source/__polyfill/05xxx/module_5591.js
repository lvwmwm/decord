// Module ID: 5591
// Function ID: 5592
// Dependencies: []
// Exports: enableLogging, print

// Module 5591
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
