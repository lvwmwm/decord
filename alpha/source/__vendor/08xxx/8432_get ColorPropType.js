// Module ID: 8432
// Function ID: 8433
// Name: get ColorPropType
// Dependencies: [8433, 8435, 8436, 8446, 8447, 8448, 8437]

// Module 8432 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8435"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8436"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8446"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8447"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8448"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8437"), set: undefined });

export default obj;
