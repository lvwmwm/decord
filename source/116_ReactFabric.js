// Module ID: 116
// Function ID: 117
// Name: ReactFabric
// Dependencies: [117, 272]

// Module 116 (ReactFabric)
import describeBuiltInComponentFrame from "describeBuiltInComponentFrame";

global.RN$stopSurface = describeBuiltInComponentFrame.stopSurface;
if (true !== global.RN$Bridgeless) {
  const BatchedBridge = require("get BatchedBridge").BatchedBridge;
  const result = BatchedBridge.registerCallableModule("ReactFabric", describeBuiltInComponentFrame);
}

export default describeBuiltInComponentFrame;
