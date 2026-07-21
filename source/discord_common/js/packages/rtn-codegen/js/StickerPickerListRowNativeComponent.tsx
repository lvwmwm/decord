// Module ID: 9610
// Function ID: 74842
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 9610 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "StickerPickerRowView", directEventTypes: { topPressSticker: { registrationName: "onPressSticker" }, topLongPressSticker: { registrationName: "onLongPressSticker" } } };
obj = { rowData: true };
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ 0: null, 9223372036854775807: null }));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
const value = _module1.get("StickerPickerRowView", () => obj);
const _module2 = require(dependencyMap[2]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/StickerPickerListRowNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
