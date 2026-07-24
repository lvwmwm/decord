// Module ID: 12928
// Function ID: 100336
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 2]

// Module 12928 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "DCDQRScanner", directEventTypes: { topQRCodeFound: { registrationName: "onQRCodeFound" } } };
obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onQRCodeFound: true }));
obj.validAttributes = obj;
const value = get.get("DCDQRScanner", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/QRScannerNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
