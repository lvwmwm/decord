// Module ID: 8124
// Function ID: 64521
// Name: get ColorPropType
// Dependencies: [8125, 8127, 8128, 8138, 8139, 8140, 8129]

// Module 8124 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(8125) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(8127) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(8128), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(8138) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(8139), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(8140), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(8129), set: undefined });

export default obj;
