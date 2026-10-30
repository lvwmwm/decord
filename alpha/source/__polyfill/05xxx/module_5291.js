// Module ID: 5291
// Function ID: 5292
// Dependencies: []
// Exports: enableLogging, print

// Module 5291
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
