// Module ID: 11494
// Function ID: 11495
// Name: TTIMeasurementNativeComponent
// Dependencies: [106, 65, 2]

// Module 11494 (TTIMeasurementNativeComponent)
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDTTIMeasurementView", directEventTypes: { topMeasurement: { registrationName: "onMeasurement" } }, validAttributes: obj2 };
obj2 = {};
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onMeasurement: true }));
const value = module_65.get("DCDTTIMeasurementView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/TTIMeasurementNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
