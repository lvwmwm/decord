// Module ID: 16836
// Function ID: 16837
// Name: handleInteraction
// Dependencies: [4267, 1925, 5438, 9025, 2]

// Module 16836 (handleInteraction)
import initializeDefault from "initialize" /* 5438 */;
import maybeFetchTopEmojisByGuild from "maybeFetchTopEmojisByGuild" /* 9025 */;
import closure_2 from "handleConnectionOpen" /* 4267 */;
import { EmojiInteractionPoint } from "set" /* 1925 */;

require = arg1;
initializeDefault;
class TopEmojisDataManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { EMOJI_INTERACTION_INITIATED: applyArgumentsResult.handleInteraction };
    return applyArgumentsResult;
  }
}
TopEmojisDataManager.prototype["handleInteraction"] = function handleInteraction(interaction) {
  const items = [EmojiInteractionPoint.EmojiButtonMouseEntered];
  if (items.includes(interaction.interaction)) {
    guildId = guildId.getGuildId();
    const result = maybeFetchTopEmojisByGuild.maybeFetchTopEmojisByGuild(guildId);
    const obj = maybeFetchTopEmojisByGuild;
  }
};
const topEmojisDataManager = new TopEmojisDataManager();
let result = require("set").fileFinishedImporting("modules/emojis/top_emojis/TopEmojisDataManager.tsx");

export default topEmojisDataManager;
