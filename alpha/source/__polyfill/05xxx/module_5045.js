// Module ID: 5045
// Function ID: 5046
// Dependencies: []
// Exports: enableLogging, print

// Module 5045
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
