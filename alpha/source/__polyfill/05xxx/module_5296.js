// Module ID: 5296
// Function ID: 5297
// Dependencies: []
// Exports: enableLogging, print

// Module 5296
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
