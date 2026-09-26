// Module ID: 12181
// Function ID: 12182
// Name: TTIMeasurementView
// Dependencies: [5209, 12182, 2]

// Module 12181 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 12182 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5209 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
