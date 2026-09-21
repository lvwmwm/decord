// Module ID: 15509
// Function ID: 15510
// Name: GuildRoleSubscriptionEmojiGallery
// Dependencies: [19, 17, 21, 10603, 10605, 15510, 2]
// Exports: default

// Module 15509 (GuildRoleSubscriptionEmojiGallery)
import chunkDefault from "chunk" /* 10603 */;
import LayoutUtils from "LayoutUtils" /* 10605 */;
import EmojiIconDefault from "EmojiIcon" /* 15510 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx");

export default function EmojiGallery(emojiIds) {
  ({ guildId: require, maxPerRow } = emojiIds);
  if (maxPerRow === undefined) {
    maxPerRow = 9;
  }
  let obj = { children: null };
  const arr = chunkDefault(emojiIds.emojiIds, maxPerRow);
  obj.children = jsx(LayoutUtils.GappedList, {
    gap: 8,
    children: chunkDefault(emojiIds.emojiIds, maxPerRow).map((arr, index) => {
      const obj = { style: { flexDirection: "row" }, children: jsx(LayoutUtils.GappedList, { gap: 16, children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)) }) };
      return <View key={arg1} style={{ flexDirection: "row" }}>{jsx(LayoutUtils.GappedList, { gap: 16, children: arg0.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)) })}</View>;
    })
  });
  return <View>{null}</View>;
};
