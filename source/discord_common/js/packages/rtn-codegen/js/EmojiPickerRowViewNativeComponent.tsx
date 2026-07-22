// Module ID: 9359
// Function ID: 73052
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 9359 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "EmojiPickerRowView", directEventTypes: { topPressEmoji: { registrationName: "onPressEmoji" }, topLongPressEmoji: { registrationName: "onLongPressEmoji" } } };
obj = { rowData: true };
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ fontSize: null, lineHeight: null }));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
const value = _module1.get("EmojiPickerRowView", () => obj);
const _module2 = require(dependencyMap[2]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/EmojiPickerRowViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
