// Module ID: 13483
// Function ID: 13484
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [106, 65, 2]

// Module 13483 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "PassthroughTouchView", directEventTypes: { topTouchDown: { registrationName: "onTouchDown" } }, validAttributes: null };
obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onTouchDown: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("PassthroughTouchView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/PassthroughTouchNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
