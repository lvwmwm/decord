// Module ID: 6916
// Function ID: 6917
// Dependencies: []
// Exports: enableLogging, print

// Module 6916
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
