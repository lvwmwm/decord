// Module ID: 8991
// Function ID: 8992
// Name: get ColorPropType
// Dependencies: [8992, 8994, 8995, 9005, 9006, 9007, 8996]

// Module 8991 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8994"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8995"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_9005"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_9006"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_9007"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8996"), set: undefined });

export default obj;
