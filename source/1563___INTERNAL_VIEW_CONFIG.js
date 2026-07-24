// Module ID: 1563
// Function ID: 17623
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42]

// Module 1563 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

const obj = { uiViewClassName: "RNCSafeAreaProvider", directEventTypes: { topInsetsChange: { registrationName: "onInsetsChange" } } };
obj.validAttributes = Object.assign({}, weakSet.ConditionallyIgnoredEventHandlers({ onInsetsChange: true }));

export default get.get("RNCSafeAreaProvider", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
