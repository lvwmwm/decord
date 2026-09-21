// Module ID: 12027
// Function ID: 12028
// Name: TTIMeasurementView
// Dependencies: [5179, 12028, 2]

// Module 12027 (TTIMeasurementView)
import TTIMeasurementNativeComponentDefault from "TTIMeasurementNativeComponent" /* 12028 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5179 */;

const obj = { componentName: "DCDTTIMeasurementView", componentFoundInstance: null };
obj.componentFoundInstance = TTIMeasurementNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIMeasurementView.tsx");

export const TTIMeasurementView = requireNativeComponentOrDefault(obj);
