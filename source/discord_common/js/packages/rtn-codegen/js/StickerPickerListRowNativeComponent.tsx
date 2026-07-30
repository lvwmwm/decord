// Module ID: 9635
// Function ID: 9636
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [106, 65, 2]

// Module 9635 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "StickerPickerRowView", directEventTypes: { topPressSticker: { registrationName: "onPressSticker" }, topLongPressSticker: { registrationName: "onLongPressSticker" } }, validAttributes: null };
obj = { rowData: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onPressSticker: true, onLongPressSticker: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("StickerPickerRowView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/StickerPickerListRowNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
