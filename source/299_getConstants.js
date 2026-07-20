// Module ID: 299
// Function ID: 4546
// Name: getConstants
// Dependencies: []

// Module 299 (getConstants)
const enforcing = importAll(dependencyMap[0]).getEnforcing("StatusBarManager");
let closure_1 = null;

export default {
  getConstants() {
    if (null == constants) {
      const constants = uiStore.getConstants();
    }
    return constants;
  },
  getHeight(arg0) {
    const height = uiStore.getHeight(arg0);
  },
  setNetworkActivityIndicatorVisible(arg0) {
    const result = uiStore.setNetworkActivityIndicatorVisible(arg0);
  },
  addListener(arg0) {
    uiStore.addListener(arg0);
  },
  removeListeners(arg0) {
    uiStore.removeListeners(arg0);
  },
  setStyle(arg0, arg1) {
    uiStore.setStyle(arg0, arg1);
  },
  setHidden(arg0, arg1) {
    uiStore.setHidden(arg0, arg1);
  }
};
