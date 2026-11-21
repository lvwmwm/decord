// Module ID: 5166
// Function ID: 5167
// Dependencies: []
// Exports: enableLogging, print

// Module 5166
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
