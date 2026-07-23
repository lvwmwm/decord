// Module ID: 13231
// Function ID: 101655
// Name: check
// Dependencies: [13230]

// Module 13231 (check)

export default (arg0, value) => {
  const obj = { value, configurable: true, writable: true };
  defineProperty(require(13230) /* check */, arg0, obj);
};
