// Module ID: 6327
// Function ID: 6328
// Dependencies: []
// Exports: enableLogging, print

// Module 6327
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
