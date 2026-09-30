// Module ID: 11581
// Function ID: 11582
// Name: TTIMeasurementView
// Dependencies: [5468, 11582, 2]

// Module 11581 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 11582 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5468 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
