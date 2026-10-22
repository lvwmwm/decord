// Module ID: 8769
// Function ID: 8770
// Name: get ColorPropType
// Dependencies: [8770, 8772, 8773, 8783, 8784, 8785, 8774]

// Module 8769 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8772"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8773"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8783"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8784"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8785"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8774"), set: undefined });

export default obj;
