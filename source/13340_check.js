// Module ID: 13340
// Function ID: 102287
// Name: check
// Dependencies: [13339]

// Module 13340 (check)

export default (arg0, value) => {
  const obj = { value, configurable: true, writable: true };
  defineProperty(require(13339) /* check */, arg0, obj);
};
