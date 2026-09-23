// Module ID: 6976
// Function ID: 6977
// Dependencies: []
// Exports: enableLogging, print

// Module 6976
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
