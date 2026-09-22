// Module ID: 12032
// Function ID: 12033
// Name: TTIMeasurementNativeComponent
// Dependencies: [106, 65, 2]

// Module 12032 (TTIMeasurementNativeComponent)
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDTTIMeasurementView", directEventTypes: { topMeasurement: { registrationName: "onMeasurement" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onMeasurement: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = {};
const value = module_65.get("DCDTTIMeasurementView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/TTIMeasurementNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
