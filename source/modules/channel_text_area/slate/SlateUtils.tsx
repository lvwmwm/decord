// Module ID: 6926
// Function ID: 55271
// Name: toRichValue
// Dependencies: [2]
// Exports: createEmptyState, createState, voidToOptionValue

// Module 6926 (toRichValue)
function toRichValue(content) {
  if ("" !== content) {
    const parts = content.split("\n");
    let mapped = parts.map((text) => {
      const children = [{ text }];
      return { type: "line", children };
    });
  } else {
    mapped = closure_0;
  }
  return mapped;
}
let obj = { type: "line" };
let items = [Object.freeze({ text: "" })];
obj.children = Object.freeze(items);
const items1 = [Object.freeze(obj)];
let closure_0 = Object.freeze(items1);
const result = require("set").fileFinishedImporting("modules/channel_text_area/slate/SlateUtils.tsx");

export const createEmptyState = function createEmptyState() {
  const items = [{ text: "" }];
  const richValue = [{ type: "line", children: items }];
  return { textValue: "", richValue };
};
export const createState = function createState(textValue) {
  return { textValue, richValue: toRichValue(textValue) };
};
export { toRichValue };
export const voidToOptionValue = function voidToOptionValue(type) {
  type = type.type;
  if ("userMention" === type) {
    let obj = { type: "userMention", userId: type.userId };
    return obj;
  } else if ("channelMention" === type) {
    obj = { type: "channelMention", channelId: type.channelId };
    return obj;
  } else if ("soundboard" === type) {
    const obj1 = { type: "soundboard" };
    ({ guildId: obj5.guildId, soundId: obj5.soundId } = type);
    return obj1;
  } else if ("roleMention" === type) {
    const obj2 = { type: "roleMention", roleId: type.roleId };
    return obj2;
  } else if ("textMention" === type) {
    const obj3 = { type: "textMention", text: type.name };
    return obj3;
  } else if ("emoji" === type) {
    const obj4 = { type: "emoji", name: type.emoji.name, surrogate: type.emoji.surrogate };
    return obj4;
  } else if ("customEmoji" === type) {
    obj = { type: "customEmoji", emojiId: type.emoji.emojiId, name: type.emoji.name, animated: type.emoji.animated };
    return obj;
  } else if ("testInlineVoid" === type) {
    const _Error = Error;
    const error = new Error("Unable to convert test types");
    throw error;
  } else {
    return null;
  }
};
