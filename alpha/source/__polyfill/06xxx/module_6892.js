// Module ID: 6892
// Function ID: 6893
// Dependencies: []
// Exports: enableLogging, print

// Module 6892
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
