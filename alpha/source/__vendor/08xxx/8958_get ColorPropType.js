// Module ID: 8958
// Function ID: 8959
// Name: get ColorPropType
// Dependencies: [8959, 8961, 8962, 8972, 8973, 8974, 8963]

// Module 8958 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8961"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8962"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8972"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8973"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8974"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8963"), set: undefined });

export default obj;
