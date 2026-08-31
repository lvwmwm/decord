// Module ID: 16887
// Function ID: 16888
// Name: handleInteraction
// Dependencies: [4269, 1925, 5454, 9066, 2]

// Module 16887 (handleInteraction)
import initializeDefault from "initialize" /* 5454 */;
import maybeFetchTopEmojisByGuild from "maybeFetchTopEmojisByGuild" /* 9066 */;
import closure_2 from "handleConnectionOpen" /* 4269 */;
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
