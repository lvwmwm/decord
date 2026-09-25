// Module ID: 6061
// Function ID: 6062
// Dependencies: []
// Exports: enableLogging, print

// Module 6061
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
