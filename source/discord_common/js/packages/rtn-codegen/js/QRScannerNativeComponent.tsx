// Module ID: 12984
// Function ID: 100641
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 2]

// Module 12984 (__INTERNAL_VIEW_CONFIG)
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
