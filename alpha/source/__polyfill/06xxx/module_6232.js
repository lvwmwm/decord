// Module ID: 6232
// Function ID: 6233
// Dependencies: []
// Exports: enableLogging, print

// Module 6232
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
