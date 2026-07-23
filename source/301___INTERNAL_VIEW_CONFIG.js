// Module ID: 301
// Function ID: 4555
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [31, 38, 110, 42, 117]

// Module 301 (__INTERNAL_VIEW_CONFIG)
import "result";
import weakSet from "weakSet";
import get from "get";

const require = arg1;
let obj = { uiViewClassName: "AndroidDrawerLayout", directEventTypes: { topDrawerSlide: { registrationName: "onDrawerSlide" }, topDrawerStateChanged: { registrationName: "onDrawerStateChanged" }, topDrawerOpen: { registrationName: "onDrawerOpen" }, topDrawerClose: { registrationName: "onDrawerClose" } } };
obj = { keyboardDismissMode: true, drawerBackgroundColor: null, drawerPosition: true, drawerWidth: true, drawerLockMode: true };
obj = { process: require("processColor").default };
obj.drawerBackgroundColor = obj;
obj.statusBarBackgroundColor = { process: require("processColor").default };
obj.validAttributes = Object.assign(obj, weakSet.ConditionallyIgnoredEventHandlers({ onDrawerSlide: true, onDrawerStateChanged: true, onDrawerOpen: true, onDrawerClose: true }));

export default get.get("AndroidDrawerLayout", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = {
  openDrawer(nodeFromPublicInstance) {
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "openDrawer", []);
  },
  closeDrawer(nodeFromPublicInstance) {
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "closeDrawer", []);
  }
};
