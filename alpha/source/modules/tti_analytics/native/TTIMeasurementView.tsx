// Module ID: 11362
// Function ID: 11363
// Name: TTIMeasurementView
// Dependencies: [5265, 11363, 2]

// Module 11362 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 11363 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5265 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
