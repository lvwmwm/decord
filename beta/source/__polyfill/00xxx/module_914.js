// Module ID: 914
// Function ID: 915
// Dependencies: []
// Exports: initUnique

// Module 914
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const weakMap = new WeakMap();

export const initUnique = function initUnique(visibilityWatcher, InteractionManager) {
  try {
    if (!weakMap.get(visibilityWatcher)) {
      const tmp5 = new InteractionManager();
      const result = obj.set(visibilityWatcher, tmp5);
    }
    return weakMap.get(visibilityWatcher);
  } catch (err) {
    const tmp7 = new tmp();
    return tmp7;
  }
};
