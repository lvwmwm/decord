// Module ID: 8416
// Function ID: 8417
// Name: get ColorPropType
// Dependencies: [8417, 8419, 8420, 8430, 8431, 8432, 8421]

// Module 8416 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(8417) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(8419) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(8420), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(8430) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(8431), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(8432), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(8421), set: undefined });

export default obj;
