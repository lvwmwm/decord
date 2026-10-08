// Module ID: 8407
// Function ID: 8408
// Name: get ColorPropType
// Dependencies: [8408, 8410, 8411, 8421, 8422, 8423, 8412]

// Module 8407 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8410"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8411"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8421"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8422"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8423"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8412"), set: undefined });

export default obj;
