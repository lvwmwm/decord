// Module ID: 16303
// Function ID: 16304
// Name: handleInteraction
// Dependencies: [4101, 1906, 5244, 8566, 2]

// Module 16303 (handleInteraction)
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
    const result = require(8566) /* maybeFetchTopEmojisByGuild */.maybeFetchTopEmojisByGuild(guildId);
    const obj = require(8566) /* maybeFetchTopEmojisByGuild */;
  }
};
const topEmojisDataManager = new TopEmojisDataManager();
let result = require("initialize").fileFinishedImporting("modules/emojis/top_emojis/TopEmojisDataManager.tsx");

export default topEmojisDataManager;
