// Module ID: 8884
// Function ID: 8885
// Name: get ColorPropType
// Dependencies: [8885, 8887, 8888, 8898, 8899, 8900, 8889]

// Module 8884 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8887"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8888"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8898"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8899"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8900"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8889"), set: undefined });

export default obj;
