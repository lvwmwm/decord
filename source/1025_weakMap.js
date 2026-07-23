// Module ID: 1025
// Function ID: 11080
// Name: weakMap
// Dependencies: []

// Module 1025 (weakMap)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();
arg5.initUnique = function initUnique(metric, InteractionManager) {
  if (!weakMap.get(metric)) {
    const prototype = InteractionManager.prototype;
    const tmp6 = new InteractionManager();
    const result = weakMap.set(metric, tmp6);
  }
  return weakMap.get(metric);
};
