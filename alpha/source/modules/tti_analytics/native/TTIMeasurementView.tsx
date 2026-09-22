// Module ID: 12156
// Function ID: 12157
// Name: TTIMeasurementView
// Dependencies: [5178, 12157, 2]

// Module 12156 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 12157 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5178 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
