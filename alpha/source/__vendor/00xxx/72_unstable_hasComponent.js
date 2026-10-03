// Module ID: 72
// Function ID: 73
// Name: unstable_hasComponent
// Dependencies: []
// Exports: unstable_hasComponent

// Module 72 (unstable_hasComponent)
const map = new Map();

export const unstable_hasComponent = function unstable_hasComponent(arg0) {
  let value = map.get(arg0);
  const obj = map;
  if (null == value) {
    const obj2 = global;
    if (global.__nativeComponentRegistry__hasComponent) {
      const result = obj2.__nativeComponentRegistry__hasComponent(arg0);
      const result1 = obj.set(arg0, result);
      value = result;
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("unstable_hasComponent('" + arg0 + "'): Global function is not registered");
      throw error;
    }
  }
  return value;
};
