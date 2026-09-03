// Module ID: 8420
// Function ID: 8421
// Name: get ColorPropType
// Dependencies: [8421, 8423, 8424, 8434, 8435, 8436, 8425]

// Module 8420 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(8421) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(8423) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(8424), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(8434) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(8435), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(8436), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(8425), set: undefined });

export default obj;
