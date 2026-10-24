// Module ID: 5290
// Function ID: 5291
// Dependencies: []
// Exports: enableLogging, print

// Module 5290
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
