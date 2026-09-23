// Module ID: 12233
// Function ID: 12234
// Name: TTIMeasurementView
// Dependencies: [5262, 12234, 2]

// Module 12233 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 12234 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5262 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
