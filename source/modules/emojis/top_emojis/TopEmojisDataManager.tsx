// Module ID: 16164
// Function ID: 16165
// Name: handleInteraction
// Dependencies: [4006, 1877, 5134, 9342, 2]

// Module 16164 (handleInteraction)
import handleConnectionOpen from "handleConnectionOpen";
import { EmojiInteractionPoint } from "set";
import "initialize";

const require = arg1;
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
    const result = require(9342) /* maybeFetchTopEmojisByGuild */.maybeFetchTopEmojisByGuild(guildId);
    const obj = require(9342) /* maybeFetchTopEmojisByGuild */;
  }
};
const topEmojisDataManager = new TopEmojisDataManager();
let result = require("initialize").fileFinishedImporting("modules/emojis/top_emojis/TopEmojisDataManager.tsx");

export default topEmojisDataManager;
