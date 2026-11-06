// Module ID: 8976
// Function ID: 8977
// Name: get ColorPropType
// Dependencies: [8977, 8979, 8980, 8990, 8991, 8992, 8981]

// Module 8976 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8979"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8980"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8990"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8991"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8992"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8981"), set: undefined });

export default obj;
