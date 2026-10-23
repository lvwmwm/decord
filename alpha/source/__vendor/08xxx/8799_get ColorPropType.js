// Module ID: 8799
// Function ID: 8800
// Name: get ColorPropType
// Dependencies: [8800, 8802, 8803, 8813, 8814, 8815, 8804]

// Module 8799 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8802"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8803"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8813"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8814"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8815"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8804"), set: undefined });

export default obj;
