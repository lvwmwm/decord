// Module ID: 7865
// Function ID: 62642
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 7865 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "APNGDecorationView", directEventTypes: { topLoad: { registrationName: "onLoad" } } };
obj = { borderRadius: null, name: null };
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ onLoad: true }));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
obj = {
  play(nodeFromPublicInstance) {
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "play", []);
  },
  pause(nodeFromPublicInstance) {
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "pause", []);
  },
  seek(nodeFromPublicInstance) {
    const items = [arg1];
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "seek", items);
  }
};
const value = _module1.get("APNGDecorationView", () => obj);
const _module2 = require(dependencyMap[3]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/APNGDecorationNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
