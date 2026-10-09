// Module ID: 8415
// Function ID: 8416
// Name: get ColorPropType
// Dependencies: [8416, 8418, 8419, 8429, 8430, 8431, 8420]

// Module 8415 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8418"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8419"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8429"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8430"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8431"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8420"), set: undefined });

export default obj;
