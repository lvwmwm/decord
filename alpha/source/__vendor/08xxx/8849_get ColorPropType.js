// Module ID: 8849
// Function ID: 8850
// Name: get ColorPropType
// Dependencies: [8850, 8852, 8853, 8863, 8864, 8865, 8854]

// Module 8849 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8852"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8853"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8863"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8864"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8865"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8854"), set: undefined });

export default obj;
