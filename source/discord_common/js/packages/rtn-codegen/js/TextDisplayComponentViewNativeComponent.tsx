// Module ID: 14735
// Function ID: 112281
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 2]

// Module 14735 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "TextDisplayComponentView", directEventTypes: { topTapLink: { registrationName: "onTapLink" }, topLongPressLink: { registrationName: "onLongPressLink" }, topTapAttachmentLink: { registrationName: "onTapAttachmentLink" }, topLongPressAttachmentLink: { registrationName: "onLongPressAttachmentLink" }, topTapMention: { registrationName: "onTapMention" }, topTapTimestamp: { registrationName: "onTapTimestamp" }, topTapInlineCode: { registrationName: "onTapInlineCode" }, topTapEmoji: { registrationName: "onTapEmoji" } } };
obj = { model: true, markdownTextRenderOptions: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onTapLink: true, onLongPressLink: true, onTapAttachmentLink: true, onLongPressAttachmentLink: true, onTapMention: true, onTapTimestamp: true, onTapInlineCode: true, onTapEmoji: true }));
obj.validAttributes = obj;
const value = get.get("TextDisplayComponentView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/TextDisplayComponentViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
