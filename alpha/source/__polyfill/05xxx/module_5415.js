// Module ID: 5415
// Function ID: 5416
// Dependencies: []
// Exports: enableLogging, print

// Module 5415
function print() {

}
const frozen = Object.freeze(print);

export { print };
export const enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};
