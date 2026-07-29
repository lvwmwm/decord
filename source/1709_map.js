// Module ID: 1709
// Function ID: 1710
// Name: map
// Dependencies: []

// Module 1709 (map)
const map = new Map();
arg5.ComponentRegistry = {
  register(arg0, arg1) {
    const result = map.set(arg0, arg1);
  },
  unregister(arg0) {
    map.delete(arg0);
  },
  getComponent(arg0) {
    return map.get(arg0);
  }
};
