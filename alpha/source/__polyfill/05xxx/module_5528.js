// Module ID: 5528
// Function ID: 5529
// Dependencies: []
// Exports: enableLogging, print

// Module 5528
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
