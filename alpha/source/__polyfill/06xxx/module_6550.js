// Module ID: 6550
// Function ID: 6551
// Dependencies: []
// Exports: enableLogging, print

// Module 6550
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
