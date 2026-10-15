// Module ID: 6548
// Function ID: 6549
// Dependencies: []
// Exports: enableLogging, print

// Module 6548
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
