// Module ID: 5076
// Function ID: 5077
// Dependencies: []
// Exports: enableLogging, print

// Module 5076
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
