// Module ID: 9169
// Function ID: 9170
// Name: get ColorPropType
// Dependencies: [9170, 9172, 9173, 9183, 9184, 9185, 9174]

// Module 9169 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_9172"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_9173"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_9183"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_9184"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_9185"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_9174"), set: undefined });

export default obj;
