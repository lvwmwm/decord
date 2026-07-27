// Module ID: 13296
// Function ID: 102114
// Name: check
// Dependencies: [13295]

// Module 13296 (check)

export default (arg0, value) => {
  const obj = { value, configurable: true, writable: true };
  defineProperty(require(13295) /* check */, arg0, obj);
};
