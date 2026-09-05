// Module ID: 17345
// Function ID: 17346
// Name: handleInteraction
// Dependencies: [4381, 1374, 7118, 10278, 2]

// Module 17345 (handleInteraction)
import initializeDefault from "initialize" /* 7118 */;
import maybeFetchTopEmojisByGuild from "maybeFetchTopEmojisByGuild" /* 10278 */;
import closure_2 from "handleConnectionOpen" /* 4381 */;
import { EmojiInteractionPoint } from "set" /* 1374 */;

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
