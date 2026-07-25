// Module ID: 13295
// Function ID: 102109
// Name: check
// Dependencies: [13294]

// Module 13295 (check)

export default (arg0, value) => {
  const obj = { value, configurable: true, writable: true };
  defineProperty(require(13294) /* check */, arg0, obj);
};
