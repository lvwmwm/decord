// Module ID: 9333
// Function ID: 72946
// Name: fetchTopEmojis
// Dependencies: [653, 3965, 686, 507, 2]
// Exports: fetchTopEmojis, updateNewlyAddedEmojiSeenAcknowledged, updateNewlyAddedLastSeen

// Module 9333 (fetchTopEmojis)
import { Endpoints } from "ME";

const result = require("dispatcher").fileFinishedImporting("modules/emojis/top_emojis/TopEmojisActionCreators.tsx");

export const fetchTopEmojis = function fetchTopEmojis(guildId) {
  const _require = guildId;
  let obj = _require(3965);
  if (!obj.isPseudoGuildId(guildId)) {
    obj = { type: "TOP_EMOJIS_FETCH", guildId };
    importDefault(686).dispatch(obj);
    const HTTP = _require(507).HTTP;
    obj = { url: Endpoints.TOP_EMOJIS_FOR_GUILD(guildId), oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = outer1_1(outer1_2[2]);
      obj = { type: "TOP_EMOJIS_FETCH_SUCCESS", guildId: closure_0 };
      const items = body.body.items;
      const mapped = items.map((emojiId) => ({ emojiId: emojiId.emoji_id, rank: emojiId.emoji_rank }));
      obj.topEmojisMetadata = mapped.sort((rank, rank2) => rank.rank - rank2.rank);
      return obj.dispatch(obj);
    }, () => {
      let obj = outer1_1(outer1_2[2]);
      obj = { type: "TOP_EMOJIS_FETCH_FAILURE", guildId: closure_0 };
      return obj.dispatch(obj);
    });
    const obj2 = importDefault(686);
  }
};
export const updateNewlyAddedLastSeen = function updateNewlyAddedLastSeen(guildId, id) {
  let obj = importDefault(686);
  obj.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED" });
  if (tmp2) {
    obj = { type: "NEWLY_ADDED_EMOJI_SEEN_PENDING", guildId, emojiId: id };
    importDefault(686).dispatch(obj);
    const obj2 = importDefault(686);
  }
};
export const updateNewlyAddedEmojiSeenAcknowledged = function updateNewlyAddedEmojiSeenAcknowledged(guildId, emojiId) {
  if (tmp) {
    let obj = importDefault(686);
    obj = { type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED", guildId, emojiId };
    obj.dispatch(obj);
  }
};
