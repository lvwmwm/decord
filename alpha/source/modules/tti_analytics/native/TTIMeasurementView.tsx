// Module ID: 11589
// Function ID: 11590
// Name: TTIMeasurementView
// Dependencies: [5456, 11590, 2]

// Module 11589 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 11590 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5456 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
