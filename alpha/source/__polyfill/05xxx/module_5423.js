// Module ID: 5423
// Function ID: 5424
// Dependencies: []
// Exports: enableLogging, print

// Module 5423
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
