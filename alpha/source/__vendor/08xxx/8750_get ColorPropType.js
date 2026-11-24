// Module ID: 8750
// Function ID: 8751
// Name: get ColorPropType
// Dependencies: [8751, 8753, 8754, 8764, 8765, 8766, 8755]

// Module 8750 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8753"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8754"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8764"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8765"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8766"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8755"), set: undefined });

export default obj;
