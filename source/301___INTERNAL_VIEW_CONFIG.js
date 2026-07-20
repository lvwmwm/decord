// Module ID: 301
// Function ID: 4555
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 301 (__INTERNAL_VIEW_CONFIG)
importAll(dependencyMap[0]);
let obj = { uiViewClassName: "AndroidDrawerLayout", directEventTypes: { topDrawerSlide: { registrationName: "onDrawerSlide" }, topDrawerStateChanged: { registrationName: "onDrawerStateChanged" }, topDrawerOpen: { registrationName: "onDrawerOpen" }, topDrawerClose: { registrationName: "onDrawerClose" } } };
obj = {};
obj = { process: arg1(dependencyMap[1]).default };
obj.drawerBackgroundColor = obj;
obj.statusBarBackgroundColor = { process: arg1(dependencyMap[1]).default };
const obj1 = { process: arg1(dependencyMap[1]).default };
obj.validAttributes = Object.assign(obj, arg1(dependencyMap[2]).ConditionallyIgnoredEventHandlers({}));
const obj5 = arg1(dependencyMap[2]);

export default arg1(dependencyMap[3]).get("AndroidDrawerLayout", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = {
  openDrawer(nodeFromPublicInstance) {
    arg1(dependencyMap[4]).dispatchCommand(nodeFromPublicInstance, "openDrawer", []);
  },
  closeDrawer(nodeFromPublicInstance) {
    arg1(dependencyMap[4]).dispatchCommand(nodeFromPublicInstance, "closeDrawer", []);
  }
};
