// Module ID: 9324
// Function ID: 72879
// Name: maybeFetchTopEmojisByGuild
// Dependencies: []
// Exports: maybeFetchTopEmojisByGuild

// Module 9324 (maybeFetchTopEmojisByGuild)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/emojis/top_emojis/TopEmojisUtils.tsx");

export const maybeFetchTopEmojisByGuild = function maybeFetchTopEmojisByGuild(guildId) {
  if (null != guildId) {
    if (null != currentUser.getCurrentUser()) {
      const topEmojisMetadata = topEmojisMetadata.getTopEmojisMetadata(guildId);
      if (null != topEmojisMetadata) {
        const topEmojisTTL = topEmojisMetadata.topEmojisTTL;
        if (null != topEmojisTTL) {
          const _Date = Date;
        }
      }
      if (!isFetching.getIsFetching(guildId)) {
        const topEmojis = arg1(dependencyMap[3]).fetchTopEmojis(guildId);
        const obj = arg1(dependencyMap[3]);
      }
    }
  }
};
