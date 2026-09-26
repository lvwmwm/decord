// Module ID: 1740
// Function ID: 1741
// Name: ComponentRegistry
// Dependencies: []

// Module 1740 (ComponentRegistry)
const map = new Map();

export const ComponentRegistry = {
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
