// Module ID: 13284
// Function ID: 101982
// Name: check
// Dependencies: [13283]

// Module 13284 (check)

export default (arg0, value) => {
  const obj = { value, configurable: true, writable: true };
  defineProperty(require(13283) /* check */, arg0, obj);
};
