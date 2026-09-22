// Module ID: 17460
// Function ID: 17461
// Name: TopEmojisDataManager
// Dependencies: [4458, 1374, 7221, 10407, 2]

// Module 17460 (TopEmojisDataManager)
import TopEmojisUtils from "TopEmojisUtils" /* 10407 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4458 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7221 */;

require = fn;
const EmojiInteractionPoint = fn(1374).EmojiInteractionPoint;
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
    const guildId = SelectedGuildStore.getGuildId();
    const result = TopEmojisUtils.maybeFetchTopEmojisByGuild(guildId);
  }
};
const topEmojisDataManager = new TopEmojisDataManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisDataManager.tsx");

export default topEmojisDataManager;
