// Module ID: 14562
// Function ID: 109721
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 14562 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "TextDisplayComponentView", directEventTypes: { topTapLink: { registrationName: "onTapLink" }, topLongPressLink: { registrationName: "onLongPressLink" }, topTapAttachmentLink: { registrationName: "onTapAttachmentLink" }, topLongPressAttachmentLink: { registrationName: "onLongPressAttachmentLink" }, topTapMention: { registrationName: "onTapMention" }, topTapTimestamp: { registrationName: "onTapTimestamp" }, topTapInlineCode: { registrationName: "onTapInlineCode" }, topTapEmoji: { registrationName: "onTapEmoji" } } };
obj = { -866014589: null, -845062830: null };
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({}));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
const value = _module1.get("TextDisplayComponentView", () => obj);
const _module2 = require(dependencyMap[2]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/TextDisplayComponentViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
