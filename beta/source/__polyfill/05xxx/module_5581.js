// Module ID: 5581
// Function ID: 5582
// Dependencies: []
// Exports: enableLogging, print

// Module 5581
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
