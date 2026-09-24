// Module ID: 6978
// Function ID: 6979
// Dependencies: []
// Exports: enableLogging, print

// Module 6978
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
