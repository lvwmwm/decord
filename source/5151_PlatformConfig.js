// Module ID: 5151
// Function ID: 43649
// Name: PlatformConfig
// Dependencies: []

// Module 5151 (PlatformConfig)
const obj = {};
const _module = require(dependencyMap[0]);
obj.isRN083OrAbove = _module.isRN083OrAbove();
const items = [{ rotate: "180deg" }];
obj.invertedTransformStyle = { transform: items };
const items1 = [{ rotate: "180deg" }];
obj.invertedTransformStyleHorizontal = { transform: items1 };

export const PlatformConfig = obj;
