// Module ID: 5276
// Function ID: 5277
// Dependencies: []
// Exports: enableLogging, print

// Module 5276
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
