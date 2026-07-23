// Module ID: 119
// Function ID: 1639
// Name: ReactFabric
// Dependencies: [120, 261]

// Module 119 (ReactFabric)
import describeBuiltInComponentFrame from "describeBuiltInComponentFrame";

global.RN$stopSurface = describeBuiltInComponentFrame.stopSurface;
if (true !== global.RN$Bridgeless) {
  const BatchedBridge = require("get BatchedBridge").BatchedBridge;
  const result = BatchedBridge.registerCallableModule("ReactFabric", describeBuiltInComponentFrame);
}

export default describeBuiltInComponentFrame;
