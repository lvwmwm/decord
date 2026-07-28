// Module ID: 10028
// Function ID: 77412
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 2]

// Module 10028 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "DCDTTIMeasurementView", directEventTypes: { topMeasurement: { registrationName: "onMeasurement" } } };
obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onMeasurement: true }));
obj.validAttributes = obj;
const value = get.get("DCDTTIMeasurementView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/TTIMeasurementNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
