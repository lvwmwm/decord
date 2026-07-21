// Module ID: 1025
// Function ID: 11079
// Name: weakMap
// Dependencies: []

// Module 1025 (weakMap)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();
arg5.initUnique = function initUnique(closure_1, InteractionManager) {
  if (!weakMap.get(closure_1)) {
    const prototype = InteractionManager.prototype;
    const tmp6 = new InteractionManager();
    const result = weakMap.set(closure_1, tmp6);
  }
  return weakMap.get(closure_1);
};
