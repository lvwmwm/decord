// Module ID: 9654
// Function ID: 75118
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 2]

// Module 9654 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "StickerPickerRowView", directEventTypes: { topPressSticker: { registrationName: "onPressSticker" }, topLongPressSticker: { registrationName: "onLongPressSticker" } } };
obj = { rowData: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onPressSticker: true, onLongPressSticker: true }));
obj.validAttributes = obj;
const value = get.get("StickerPickerRowView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/StickerPickerListRowNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
