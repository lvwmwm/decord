// Module ID: 9326
// Function ID: 72905
// Name: fetchTopEmojis
// Dependencies: []
// Exports: fetchTopEmojis, updateNewlyAddedEmojiSeenAcknowledged, updateNewlyAddedLastSeen

// Module 9326 (fetchTopEmojis)
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisActionCreators.tsx");

export const fetchTopEmojis = function fetchTopEmojis(guildId) {
  const require = guildId;
  let obj = require(dependencyMap[1]);
  if (!obj.isPseudoGuildId(guildId)) {
    obj = { type: "TOP_EMOJIS_FETCH", guildId };
    importDefault(dependencyMap[2]).dispatch(obj);
    const HTTP = require(dependencyMap[3]).HTTP;
    obj = { y: null, isArray: null, accessible: null, url: Endpoints.TOP_EMOJIS_FOR_GUILD(guildId) };
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = callback(closure_2[2]);
      obj = { type: "TOP_EMOJIS_FETCH_SUCCESS", guildId: body };
      const items = body.body.items;
      const mapped = items.map((emojiId) => ({ emojiId: emojiId.emoji_id, rank: emojiId.emoji_rank }));
      obj.topEmojisMetadata = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
      return obj.dispatch(obj);
    }, () => {
      let obj = callback(closure_2[2]);
      obj = { type: "TOP_EMOJIS_FETCH_FAILURE", guildId: arg0 };
      return obj.dispatch(obj);
    });
    const obj2 = importDefault(dependencyMap[2]);
  }
};
export const updateNewlyAddedLastSeen = function updateNewlyAddedLastSeen(guildId, id) {
  let obj = importDefault(dependencyMap[2]);
  obj.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED" });
  if (tmp2) {
    obj = { type: "NEWLY_ADDED_EMOJI_SEEN_PENDING", guildId, emojiId: id };
    importDefault(dependencyMap[2]).dispatch(obj);
    const obj2 = importDefault(dependencyMap[2]);
  }
};
export const updateNewlyAddedEmojiSeenAcknowledged = function updateNewlyAddedEmojiSeenAcknowledged(guildId, emojiId) {
  if (tmp) {
    let obj = importDefault(dependencyMap[2]);
    obj = { type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED", guildId, emojiId };
    obj.dispatch(obj);
  }
};
