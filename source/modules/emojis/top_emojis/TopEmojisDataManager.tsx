// Module ID: 16431
// Function ID: 16432
// Name: handleInteraction
// Dependencies: [4126, 1925, 5261, 8649, 2]

// Module 16431 (handleInteraction)
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
    const result = require(8649) /* maybeFetchTopEmojisByGuild */.maybeFetchTopEmojisByGuild(guildId);
    const obj = require(8649) /* maybeFetchTopEmojisByGuild */;
  }
};
const topEmojisDataManager = new TopEmojisDataManager();
let result = require("initialize").fileFinishedImporting("modules/emojis/top_emojis/TopEmojisDataManager.tsx");

export default topEmojisDataManager;
