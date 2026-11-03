// Module ID: 9008
// Function ID: 9009
// Name: get ColorPropType
// Dependencies: [9009, 9011, 9012, 9022, 9023, 9024, 9013]

// Module 9008 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_9011"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_9012"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_9022"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_9023"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_9024"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_9013"), set: undefined });

export default obj;
