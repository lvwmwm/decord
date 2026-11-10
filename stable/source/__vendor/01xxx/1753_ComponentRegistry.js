// Module ID: 1753
// Function ID: 1754
// Name: ComponentRegistry
// Dependencies: []

// Module 1753 (ComponentRegistry)
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
