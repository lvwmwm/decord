// Module ID: 8197
// Function ID: 64724
// Name: get ColorPropType
// Dependencies: [8198, 8200, 8201, 8211, 8212, 8213, 8202]

// Module 8197 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(8198) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(8200) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(8201), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(8211) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(8212), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(8213), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(8202), set: undefined });

export default obj;
