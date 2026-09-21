// Module ID: 6884
// Function ID: 6885
// Dependencies: []
// Exports: enableLogging, print

// Module 6884
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
