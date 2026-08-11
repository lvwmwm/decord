// Module ID: 8882
// Function ID: 8883
// Name: get ColorPropType
// Dependencies: [8883, 8885, 8886, 8896, 8897, 8898, 8887]

// Module 8882 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(8883) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(8885) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(8886), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(8896) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(8897), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(8898), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(8887), set: undefined });

export default obj;
