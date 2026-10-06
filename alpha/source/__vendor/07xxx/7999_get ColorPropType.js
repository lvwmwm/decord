// Module ID: 7999
// Function ID: 8000
// Name: get ColorPropType
// Dependencies: [8000, 8002, 8003, 8013, 8014, 8015, 8004]

// Module 7999 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8002"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8003"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8013"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8014"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8015"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8004"), set: undefined });

export default obj;
