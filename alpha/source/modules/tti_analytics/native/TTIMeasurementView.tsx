// Module ID: 12240
// Function ID: 12241
// Name: TTIMeasurementView
// Dependencies: [5264, 12241, 2]

// Module 12240 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 12241 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5264 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
