// Module ID: 16703
// Function ID: 16704
// Name: GuildRoleSubscriptionEmojiGallery
// Dependencies: [19, 21, 11291, 5837, 16704, 2]
// Exports: default

// Module 16703 (GuildRoleSubscriptionEmojiGallery)
import Fragment from "Fragment" /* 21 */;
import Stack_Stack from "Stack/Stack" /* 5837 */;
import chunkDefault from "chunk" /* 11291 */;
import EmojiIconDefault from "EmojiIcon" /* 16704 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx");

export default function EmojiGallery(emojiIds) {
  let maxPerRow;
  ({ guildId: require, maxPerRow } = emojiIds);
  emojiIds = emojiIds.emojiIds;
  if (maxPerRow === undefined) {
    maxPerRow = 9;
  }
  const arr = chunkDefault(emojiIds, maxPerRow);
  let Stack = Stack_Stack.Stack;
  return <Stack spacing={8}>{arr.map((arr, index) => {
    let guildId;
    const Stack = Stack_Stack.Stack;
    return <Stack key={arg1} direction="horizontal" spacing={16}>{arg0.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id))}</Stack>;
  })}</Stack>;
};
