// Module ID: 8964
// Function ID: 8965
// Name: get ColorPropType
// Dependencies: [8965, 8967, 8968, 8978, 8979, 8980, 8969]

// Module 8964 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8967"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8968"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8978"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8979"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8980"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8969"), set: undefined });

export default obj;
