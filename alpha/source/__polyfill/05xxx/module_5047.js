// Module ID: 5047
// Function ID: 5048
// Dependencies: []
// Exports: enableLogging, print

// Module 5047
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
