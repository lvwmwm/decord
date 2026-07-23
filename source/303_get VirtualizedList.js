// Module ID: 303
// Function ID: 4596
// Name: get VirtualizedList
// Dependencies: [304, 305, 317, 313, 310, 309]

// Module 303 (get VirtualizedList)
const require = arg1;
const dependencyMap = arg6;
const obj = { keyExtractor: require("elementsThatOverlapOffsets").keyExtractor };
Object.defineProperty(obj, "VirtualizedList", { get: () => require(305) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "VirtualizedSectionList", { get: () => require(317) /* _isNativeReflectConstruct */.default, set: undefined });
Object.defineProperty(obj, "VirtualizedListContextResetter", { get: () => require(313) /* context */.VirtualizedListContextResetter, set: undefined });
Object.defineProperty(obj, "ViewabilityHelper", { get: () => require(310) /* _isViewable */.default, set: undefined });
Object.defineProperty(obj, "FillRateHelper", { get: () => require(309) /* Info */.default, set: undefined });
arg5.default = obj;
