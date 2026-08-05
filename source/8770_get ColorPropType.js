// Module ID: 8770
// Function ID: 8771
// Name: get ColorPropType
// Dependencies: [8771, 8773, 8774, 8784, 8785, 8786, 8775]

// Module 8770 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(8771) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(8773) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(8774), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(8784) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(8785), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(8786), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(8775), set: undefined });

export default obj;
