// Module ID: 11545
// Function ID: 11546
// Name: TTIMeasurementView
// Dependencies: [5438, 11546, 2]

// Module 11545 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 11546 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5438 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
