// Module ID: 6922
// Function ID: 6923
// Dependencies: []
// Exports: enableLogging, print

// Module 6922
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
