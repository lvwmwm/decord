// Module ID: 6552
// Function ID: 6553
// Dependencies: []
// Exports: enableLogging, print

// Module 6552
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
