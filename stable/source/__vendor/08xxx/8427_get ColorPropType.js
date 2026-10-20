// Module ID: 8427
// Function ID: 8428
// Name: get ColorPropType
// Dependencies: [8428, 8430, 8431, 8441, 8442, 8443, 8432]

// Module 8427 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8430"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8431"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8441"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8442"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8443"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8432"), set: undefined });

export default obj;
