// Module ID: 5251
// Function ID: 5252
// Dependencies: []
// Exports: enableLogging, print

// Module 5251
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
