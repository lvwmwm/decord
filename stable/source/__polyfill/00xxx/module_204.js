// Module ID: 204
// Function ID: 205
// Dependencies: []
// Exports: has, register, unregister

// Module 204
const map = new Map();

export const register = (arg0) => {
  const value = map.get(arg0);
  if (null != value) {
    const result = obj.set(arg0, value + 1);
  } else {
    const result1 = obj.set(arg0, 1);
  }
};
export const unregister = (arg0) => {
  const value = map.get(arg0);
  if (null != value) {
    if (value <= 1) {
      map.delete(arg0);
    } else {
      const result = obj.set(arg0, value - 1);
    }
  }
};
export const has = (arg0) => {
  const tmp = map.get(arg0) || false;
  return tmp;
};
