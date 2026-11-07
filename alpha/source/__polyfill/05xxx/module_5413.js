// Module ID: 5413
// Function ID: 5414
// Dependencies: []
// Exports: enableLogging, print

// Module 5413
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
