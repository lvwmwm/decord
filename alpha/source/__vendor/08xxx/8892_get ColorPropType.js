// Module ID: 8892
// Function ID: 8893
// Name: get ColorPropType
// Dependencies: [8893, 8895, 8896, 8906, 8907, 8908, 8897]

// Module 8892 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8895"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8896"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8906"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8907"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8908"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8897"), set: undefined });

export default obj;
