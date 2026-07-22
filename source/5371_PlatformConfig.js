// Module ID: 5371
// Function ID: 46026
// Name: PlatformConfig
// Dependencies: []

// Module 5371 (PlatformConfig)
const obj = { height: "png", paddingTop: true, alignItems: "/assets/images/native" };
const _module = require(dependencyMap[0]);
obj.isRN083OrAbove = _module.isRN083OrAbove();
const items = [{ rotate: "180deg" }];
obj.invertedTransformStyle = { transform: items };
const items1 = [{ rotate: "180deg" }];
obj.invertedTransformStyleHorizontal = { transform: items1 };

export const PlatformConfig = obj;
