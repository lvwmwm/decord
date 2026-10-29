// Module ID: 8841
// Function ID: 8842
// Name: get ColorPropType
// Dependencies: [8842, 8844, 8845, 8855, 8856, 8857, 8846]

// Module 8841 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8844"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8845"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8855"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8856"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8857"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8846"), set: undefined });

export default obj;
