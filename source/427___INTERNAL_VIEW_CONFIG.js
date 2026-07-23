// Module ID: 427
// Function ID: 5953
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42]

// Module 427 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

const obj = { uiViewClassName: "VirtualView", directEventTypes: { topModeChange: { registrationName: "onModeChange" } } };
obj.validAttributes = Object.assign({ initialHidden: true, renderState: true }, weakSet.ConditionallyIgnoredEventHandlers({ onModeChange: true }));

export default get.get("VirtualView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
