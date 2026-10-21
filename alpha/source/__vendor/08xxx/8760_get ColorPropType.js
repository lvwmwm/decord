// Module ID: 8760
// Function ID: 8761
// Name: get ColorPropType
// Dependencies: [8761, 8763, 8764, 8774, 8775, 8776, 8765]

// Module 8760 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8763"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8764"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8774"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8775"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8776"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8765"), set: undefined });

export default obj;
