// Module ID: 51
// Function ID: 1364
// Name: map
// Dependencies: []

// Module 51 (map)
const global = arg0;
const map = new Map();
arg5.unstable_hasComponent = function unstable_hasComponent(unstable_hasComponent) {
  let value = map.get(unstable_hasComponent);
  if (null == value) {
    if (global.__nativeComponentRegistry__hasComponent) {
      const result = global.__nativeComponentRegistry__hasComponent(unstable_hasComponent);
      const result1 = map.set(unstable_hasComponent, result);
      value = result;
    } else {
      const _HermesInternal = HermesInternal;
      throw "unstable_hasComponent('" + unstable_hasComponent + "'): Global function is not registered";
    }
  }
  return value;
};
