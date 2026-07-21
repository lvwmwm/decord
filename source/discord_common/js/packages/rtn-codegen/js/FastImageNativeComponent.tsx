// Module ID: 5234
// Function ID: 44234
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 5234 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "DCDFastImageView", directEventTypes: { topLoadStart: { registrationName: "onLoadStart" }, topProgress: { registrationName: "onProgress" }, topError: { registrationName: "onError" }, topLoad: { registrationName: "onLoad" }, topLoadEnd: { registrationName: "onLoadEnd" } } };
obj = {};
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ "Null": "LIGHT", "Null": "<string:4227858432>", "Null": "<string:2731364671>", "Null": "M144.616 190.007V96.608l197.822 69.184-197.822 69.185v-44.97Z", "Null": "<string:24183040>" }));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
const value = _module1.get("DCDFastImageView", () => obj);
const _module2 = require(dependencyMap[2]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/FastImageNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
