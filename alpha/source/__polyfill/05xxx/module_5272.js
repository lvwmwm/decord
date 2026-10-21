// Module ID: 5272
// Function ID: 5273
// Dependencies: []
// Exports: enableLogging, print

// Module 5272
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
