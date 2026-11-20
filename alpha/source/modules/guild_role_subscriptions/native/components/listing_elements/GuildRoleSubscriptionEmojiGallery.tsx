// Module ID: 16520
// Function ID: 16521
// Name: GuildRoleSubscriptionEmojiGallery
// Dependencies: [19, 21, 11211, 5810, 16521, 2]
// Exports: default

// Module 16520 (GuildRoleSubscriptionEmojiGallery)
import Fragment from "Fragment" /* 21 */;
import Stack_Stack from "Stack/Stack" /* 5810 */;
import chunkDefault from "chunk" /* 11211 */;
import EmojiIconDefault from "EmojiIcon" /* 16521 */;
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
