// Module ID: 8875
// Function ID: 8876
// Name: get ColorPropType
// Dependencies: [8876, 8878, 8879, 8889, 8890, 8891, 8880]

// Module 8875 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8878"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8879"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8889"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8890"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8891"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8880"), set: undefined });

export default obj;
