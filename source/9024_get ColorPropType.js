// Module ID: 9024
// Function ID: 9025
// Name: get ColorPropType
// Dependencies: [9025, 9027, 9028, 9038, 9039, 9040, 9029]

// Module 9024 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(9025) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(9027) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(9028), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(9038) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(9039), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(9040), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(9029), set: undefined });

export default obj;
