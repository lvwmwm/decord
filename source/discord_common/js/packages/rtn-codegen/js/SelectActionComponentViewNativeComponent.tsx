// Module ID: 14732
// Function ID: 112271
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 2]

// Module 14732 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "SelectActionComponentView", directEventTypes: { topTap: { registrationName: "onTap" } } };
obj = { model: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onTap: true }));
obj.validAttributes = obj;
const value = get.get("SelectActionComponentView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/SelectActionComponentViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
