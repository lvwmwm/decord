// Module ID: 6890
// Function ID: 6891
// Dependencies: []
// Exports: enableLogging, print

// Module 6890
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
