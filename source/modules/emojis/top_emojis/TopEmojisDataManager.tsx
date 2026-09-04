// Module ID: 17265
// Function ID: 17266
// Name: handleInteraction
// Dependencies: [4302, 1924, 7058, 10207, 2]

// Module 17265 (handleInteraction)
import initializeDefault from "initialize" /* 7058 */;
import maybeFetchTopEmojisByGuild from "maybeFetchTopEmojisByGuild" /* 10207 */;
import closure_2 from "handleConnectionOpen" /* 4302 */;
import { EmojiInteractionPoint } from "set" /* 1924 */;

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
