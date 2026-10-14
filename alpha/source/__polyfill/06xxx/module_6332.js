// Module ID: 6332
// Function ID: 6333
// Dependencies: []
// Exports: enableLogging, print

// Module 6332
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
