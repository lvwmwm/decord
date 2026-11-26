// Module ID: 8891
// Function ID: 8892
// Name: get ColorPropType
// Dependencies: [8892, 8894, 8895, 8905, 8906, 8907, 8896]

// Module 8891 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8894"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8895"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8905"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8906"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8907"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8896"), set: undefined });

export default obj;
