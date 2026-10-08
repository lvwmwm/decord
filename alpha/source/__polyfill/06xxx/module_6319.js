// Module ID: 6319
// Function ID: 6320
// Dependencies: []
// Exports: enableLogging, print

// Module 6319
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
