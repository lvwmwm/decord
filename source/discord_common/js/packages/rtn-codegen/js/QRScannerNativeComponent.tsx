// Module ID: 13002
// Function ID: 13003
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [106, 65, 2]

// Module 13002 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "DCDQRScanner", directEventTypes: { topQRCodeFound: { registrationName: "onQRCodeFound" } }, validAttributes: null };
obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onQRCodeFound: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("DCDQRScanner", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/QRScannerNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
