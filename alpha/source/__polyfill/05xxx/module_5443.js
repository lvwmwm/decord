// Module ID: 5443
// Function ID: 5444
// Dependencies: []
// Exports: enableLogging, print

// Module 5443
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
