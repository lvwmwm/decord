// Module ID: 5419
// Function ID: 5420
// Dependencies: []
// Exports: enableLogging, print

// Module 5419
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
