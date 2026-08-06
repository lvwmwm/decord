// Module ID: 8799
// Function ID: 8800
// Name: get ColorPropType
// Dependencies: [8800, 8802, 8803, 8813, 8814, 8815, 8804]

// Module 8799 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(8800) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(8802) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(8803), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(8813) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(8814), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(8815), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(8804), set: undefined });

export default obj;
