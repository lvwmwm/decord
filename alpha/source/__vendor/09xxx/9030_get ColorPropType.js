// Module ID: 9030
// Function ID: 9031
// Name: get ColorPropType
// Dependencies: [9031, 9033, 9034, 9044, 9045, 9046, 9035]

// Module 9030 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_9033"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_9034"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_9044"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_9045"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_9046"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_9035"), set: undefined });

export default obj;
