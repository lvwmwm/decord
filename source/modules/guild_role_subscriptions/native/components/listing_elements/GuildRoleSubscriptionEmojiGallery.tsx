// Module ID: 14178
// Function ID: 109069
// Name: EmojiGallery
// Dependencies: [31, 27, 33, 9439, 9441, 14179, 2]
// Exports: default

// Module 14178 (EmojiGallery)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx");

export default function EmojiGallery(emojiIds) {
  let maxPerRow;
  let require;
  ({ guildId: require, maxPerRow } = emojiIds);
  if (maxPerRow === undefined) {
    maxPerRow = 9;
  }
  let obj = {};
  obj = {
    gap: 8,
    children: importDefault(9439)(emojiIds.emojiIds, maxPerRow).map((arr) => {
      let obj = { style: { flexDirection: "row" } };
      obj = {
        gap: 16,
        children: arr.map((id) => {
          const obj = { size: 22, fontSize: 18, guildId: outer1_0, id };
          return outer2_4(outer2_1(outer2_2[5]), obj, id);
        })
      };
      obj.children = outer1_4(outer1_0(outer1_2[4]).GappedList, obj);
      return outer1_4(outer1_3, obj, arg1);
    })
  };
  obj.children = jsx(require(9441) /* GappedList */.GappedList, {
    gap: 8,
    children: importDefault(9439)(emojiIds.emojiIds, maxPerRow).map((arr) => {
      let obj = { style: { flexDirection: "row" } };
      obj = {
        gap: 16,
        children: arr.map((id) => {
          const obj = { size: 22, fontSize: 18, guildId: outer1_0, id };
          return outer2_4(outer2_1(outer2_2[5]), obj, id);
        })
      };
      obj.children = outer1_4(outer1_0(outer1_2[4]).GappedList, obj);
      return outer1_4(outer1_3, obj, arg1);
    })
  });
  return <View gap={8}>{importDefault(9439)(arg0.emojiIds, maxPerRow).map((arr) => {
    let obj = { style: { flexDirection: "row" } };
    obj = {
      gap: 16,
      children: arr.map((id) => {
        const obj = { size: 22, fontSize: 18, guildId: outer1_0, id };
        return outer2_4(outer2_1(outer2_2[5]), obj, id);
      })
    };
    obj.children = outer1_4(outer1_0(outer1_2[4]).GappedList, obj);
    return outer1_4(outer1_3, obj, arg1);
  })}</View>;
};
