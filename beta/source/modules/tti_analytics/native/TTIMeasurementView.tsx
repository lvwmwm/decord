// Module ID: 12063
// Function ID: 12064
// Name: TTIMeasurementView
// Dependencies: [5211, 12064, 2]

// Module 12063 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 12064 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5211 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
