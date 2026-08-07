// Module ID: 8816
// Function ID: 8817
// Name: get ColorPropType
// Dependencies: [8817, 8819, 8820, 8830, 8831, 8832, 8821]

// Module 8816 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(8817) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(8819) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(8820), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(8830) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(8831), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(8832), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(8821), set: undefined });

export default obj;
