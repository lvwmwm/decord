// Module ID: 8838
// Function ID: 8839
// Name: get ColorPropType
// Dependencies: [8839, 8841, 8842, 8852, 8853, 8854, 8843]

// Module 8838 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8841"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8842"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8852"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8853"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8854"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8843"), set: undefined });

export default obj;
