// Module ID: 4499
// Function ID: 39689
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [27, 38, 110, 42, 117]

// Module 4499 (__INTERNAL_VIEW_CONFIG)
import get_ActivityIndicator from "get ActivityIndicator";
import weakSet from "weakSet";
import get from "get";

let codegenNativeCommands;
let codegenNativeComponent;
({ codegenNativeCommands, codegenNativeComponent } = get_ActivityIndicator);
let obj = { uiViewClassName: "RNSSearchBar", directEventTypes: { topSearchFocus: { registrationName: "onSearchFocus" }, topSearchBlur: { registrationName: "onSearchBlur" }, topSearchButtonPress: { registrationName: "onSearchButtonPress" }, topCancelButtonPress: { registrationName: "onCancelButtonPress" }, topChangeText: { registrationName: "onChangeText" }, topClose: { registrationName: "onClose" }, topOpen: { registrationName: "onOpen" } } };
obj = { hideWhenScrolling: true, autoCapitalize: true, placeholder: true, placement: true, allowToolbarIntegration: true, obscureBackground: true, hideNavigationBar: true, cancelButtonText: true, barTintColor: null, tintColor: null, textColor: null, autoFocus: true, disableBackButtonOverride: true, inputType: true };
obj = { process: require("processColor").default };
obj.barTintColor = obj;
obj.tintColor = { process: require("processColor").default };
const obj1 = { process: require("processColor").default };
obj.textColor = { process: require("processColor").default };
const obj2 = { process: require("processColor").default };
obj.hintTextColor = { process: require("processColor").default };
const obj3 = { process: require("processColor").default };
obj.headerIconColor = { process: require("processColor").default };
obj.shouldShowHintSearchIcon = true;
obj.validAttributes = Object.assign(obj, weakSet.ConditionallyIgnoredEventHandlers({ onSearchFocus: true, onSearchBlur: true, onSearchButtonPress: true, onCancelButtonPress: true, onChangeText: true, onClose: true, onOpen: true }));

export default get.get("RNSSearchBar", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = {
  blur(nodeFromPublicInstance) {
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "blur", []);
  },
  focus(nodeFromPublicInstance) {
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "focus", []);
  },
  clearText(nodeFromPublicInstance) {
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "clearText", []);
  },
  toggleCancelButton(nodeFromPublicInstance) {
    const items = [arg1];
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "toggleCancelButton", items);
  },
  setText(nodeFromPublicInstance) {
    const items = [arg1];
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "setText", items);
  },
  cancelSearch(nodeFromPublicInstance) {
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "cancelSearch", []);
  }
};
