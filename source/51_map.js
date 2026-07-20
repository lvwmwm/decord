// Module ID: 51
// Function ID: 1364
// Name: map
// Dependencies: []

// Module 51 (map)
const map = new Map();
arg5.unstable_hasComponent = function unstable_hasComponent(arg0) {
  let value = map.get(arg0);
  if (null == value) {
    if (arg0.__nativeComponentRegistry__hasComponent) {
      const result = arg0.__nativeComponentRegistry__hasComponent(arg0);
      const result1 = map.set(arg0, result);
      value = result;
    } else {
      const _HermesInternal = HermesInternal;
      throw "unstable_hasComponent('" + arg0 + "'): Global function is not registered";
    }
  }
  return value;
};
