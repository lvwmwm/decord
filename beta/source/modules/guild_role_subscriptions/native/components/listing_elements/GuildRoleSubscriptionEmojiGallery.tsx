// Module ID: 14784
// Function ID: 14785
// Name: GuildRoleSubscriptionEmojiGallery
// Dependencies: [19, 17, 21, 9805, 9807, 14785, 2]
// Exports: default

// Module 14784 (GuildRoleSubscriptionEmojiGallery)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import chunkDefault from "chunk" /* 9805 */;
import LayoutUtils from "LayoutUtils" /* 9807 */;
import EmojiIconDefault from "EmojiIcon" /* 14785 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx");

export default function EmojiGallery(emojiIds) {
  let arr;
  let maxPerRow;
  ({ guildId: require, maxPerRow } = emojiIds);
  emojiIds = emojiIds.emojiIds;
  if (maxPerRow === undefined) {
    maxPerRow = 9;
  }
  const obj2 = {
    gap: 8,
    children: arr.map((arr, index) => {
      let guildId;
      ({ gap: 16, children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)) });
      const GappedList = LayoutUtils.GappedList;
      return <View key={arg1} style={{ flexDirection: "row" }}>{null}</View>;
    })
  };
  arr = chunkDefault(emojiIds, maxPerRow);
  let GappedList = LayoutUtils.GappedList;
  return <View>{null}</View>;
};
