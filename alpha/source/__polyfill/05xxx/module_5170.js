// Module ID: 5170
// Function ID: 5171
// Dependencies: []
// Exports: enableLogging, print

// Module 5170
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
