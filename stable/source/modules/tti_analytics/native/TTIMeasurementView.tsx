// Module ID: 12031
// Function ID: 12032
// Name: TTIMeasurementView
// Dependencies: [5049, 12032, 2]

// Module 12031 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 12032 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5049 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
