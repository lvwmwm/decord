// Module ID: 119
// Function ID: 1639
// Name: ReactFabric
// Dependencies: []

// Module 119 (ReactFabric)
const _module = require(dependencyMap[0]);
global.RN$stopSurface = _module.stopSurface;
if (true !== global.RN$Bridgeless) {
  const BatchedBridge = require(dependencyMap[1]).BatchedBridge;
  const result = BatchedBridge.registerCallableModule("ReactFabric", _module);
}

export default _module;
