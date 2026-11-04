// Module ID: 9025
// Function ID: 9026
// Name: get ColorPropType
// Dependencies: [9026, 9028, 9029, 9039, 9040, 9041, 9030]

// Module 9025 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_9028"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_9029"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_9039"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_9040"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_9041"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_9030"), set: undefined });

export default obj;
