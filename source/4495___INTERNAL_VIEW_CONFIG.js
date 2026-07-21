// Module ID: 4495
// Function ID: 39649
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 4495 (__INTERNAL_VIEW_CONFIG)
let codegenNativeCommands;
let codegenNativeComponent;
const _module = require(dependencyMap[0]);
({ codegenNativeCommands, codegenNativeComponent } = _module);
let obj = { uiViewClassName: "RNSSearchBar", directEventTypes: { topSearchFocus: { registrationName: "onSearchFocus" }, topSearchBlur: { registrationName: "onSearchBlur" }, topSearchButtonPress: { registrationName: "onSearchButtonPress" }, topCancelButtonPress: { registrationName: "onCancelButtonPress" }, topChangeText: { registrationName: "onChangeText" }, topClose: { registrationName: "onClose" }, topOpen: { registrationName: "onOpen" } } };
obj = { "Bool(true)": "true", "Bool(true)": 424, "Bool(true)": 424, "Bool(true)": 100, "Bool(true)": "2026-03-soundmoji-rendering", "Bool(true)": "user", "Bool(true)": "2025-12-proportional-vad-indicator", "Bool(true)": "text", "Bool(true)": "", "Bool(true)": 255, "Bool(true)": 0, "Bool(true)": 256, "Bool(true)": 0, "Bool(true)": 0 };
obj = { process: require(dependencyMap[1]).default };
obj.barTintColor = obj;
obj.tintColor = { process: require(dependencyMap[1]).default };
const obj1 = { process: require(dependencyMap[1]).default };
obj.textColor = { process: require(dependencyMap[1]).default };
const obj2 = { process: require(dependencyMap[1]).default };
obj.hintTextColor = { process: require(dependencyMap[1]).default };
const obj3 = { process: require(dependencyMap[1]).default };
obj.headerIconColor = { process: require(dependencyMap[1]).default };
obj.shouldShowHintSearchIcon = true;
const _module1 = require(dependencyMap[2]);
obj.validAttributes = Object.assign(obj, _module1.ConditionallyIgnoredEventHandlers({}));
const _module2 = require(dependencyMap[3]);

export default _module2.get("RNSSearchBar", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = {
  blur(nodeFromPublicInstance) {
    require(dependencyMap[4]).dispatchCommand(nodeFromPublicInstance, "blur", []);
  },
  focus(nodeFromPublicInstance) {
    require(dependencyMap[4]).dispatchCommand(nodeFromPublicInstance, "focus", []);
  },
  clearText(nodeFromPublicInstance) {
    require(dependencyMap[4]).dispatchCommand(nodeFromPublicInstance, "clearText", []);
  },
  toggleCancelButton(nodeFromPublicInstance) {
    const items = [arg1];
    require(dependencyMap[4]).dispatchCommand(nodeFromPublicInstance, "toggleCancelButton", items);
  },
  setText(nodeFromPublicInstance) {
    const items = [arg1];
    require(dependencyMap[4]).dispatchCommand(nodeFromPublicInstance, "setText", items);
  },
  cancelSearch(nodeFromPublicInstance) {
    require(dependencyMap[4]).dispatchCommand(nodeFromPublicInstance, "cancelSearch", []);
  }
};
