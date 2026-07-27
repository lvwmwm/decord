// Module ID: 8086
// Function ID: 64411
// Name: get ColorPropType
// Dependencies: [8087, 8089, 8090, 8100, 8101, 8102, 8091]

// Module 8086 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(8087) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(8089) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(8090), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(8100) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(8101), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(8102), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(8091), set: undefined });

export default obj;
