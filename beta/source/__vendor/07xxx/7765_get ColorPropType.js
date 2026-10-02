// Module ID: 7765
// Function ID: 7766
// Name: get ColorPropType
// Dependencies: [7766, 7768, 7769, 7779, 7780, 7781, 7770]

// Module 7765 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_7768"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_7769"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_7779"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_7780"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_7781"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_7770"), set: undefined });

export default obj;
