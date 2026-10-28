// Module ID: 5322
// Function ID: 5323
// Dependencies: []
// Exports: enableLogging, print

// Module 5322
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
