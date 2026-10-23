// Module ID: 5288
// Function ID: 5289
// Dependencies: []
// Exports: enableLogging, print

// Module 5288
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
