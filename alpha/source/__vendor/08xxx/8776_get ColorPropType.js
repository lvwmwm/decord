// Module ID: 8776
// Function ID: 8777
// Name: get ColorPropType
// Dependencies: [8777, 8779, 8780, 8790, 8791, 8792, 8781]

// Module 8776 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8779"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8780"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8790"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8791"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8792"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8781"), set: undefined });

export default obj;
