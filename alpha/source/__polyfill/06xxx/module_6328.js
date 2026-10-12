// Module ID: 6328
// Function ID: 6329
// Dependencies: []
// Exports: enableLogging, print

// Module 6328
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
