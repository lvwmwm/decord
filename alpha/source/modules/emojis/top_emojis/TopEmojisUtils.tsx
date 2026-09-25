// Module ID: 9730
// Function ID: 9731
// Name: TopEmojisUtils
// Dependencies: [1372, 5766, 5769, 9731, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 9730 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9731 */;
import UserStore from "UserStore" /* 1372 */;
import EmojiStore from "EmojiStore" /* 5766 */;
import TopEmojiStore from "TopEmojiStore" /* 5769 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisUtils.tsx");

export const maybeFetchTopEmojisByGuild = function maybeFetchTopEmojisByGuild(guildId) {
  if (null != guildId) {
    if (null != UserStore.getCurrentUser()) {
      const topEmojisMetadata = EmojiStore.getTopEmojisMetadata(guildId);
      if (null != topEmojisMetadata) {
        const topEmojisTTL = topEmojisMetadata.topEmojisTTL;
        if (null != topEmojisTTL) {
          const _Date = Date;
        }
      }
      if (!TopEmojiStore.getIsFetching(guildId)) {
        const topEmojis = TopEmojisActionCreators.fetchTopEmojis(guildId);
      }
    }
  }
};
