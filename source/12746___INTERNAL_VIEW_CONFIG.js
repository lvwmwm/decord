// Module ID: 12746
// Function ID: 97779
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 12746 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "DCDQRScanner", directEventTypes: { topQRCodeFound: { registrationName: "onQRCodeFound" } } };
obj = {};
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ onQRCodeFound: true }));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
const value = _module1.get("DCDQRScanner", () => obj);
const _module2 = require(dependencyMap[2]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/QRScannerNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
