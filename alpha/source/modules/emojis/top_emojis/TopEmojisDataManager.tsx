// Module ID: 19524
// Function ID: 19525
// Name: TopEmojisDataManager
// Dependencies: [4950, 1389, 7349, 9402, 2]

// Module 19524 (TopEmojisDataManager)
import EmojiConstants from "EmojiConstants" /* 1389 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9402 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4950 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7349 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
class TopEmojisDataManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { EMOJI_INTERACTION_INITIATED: applyArgumentsResult.handleInteraction };
    return applyArgumentsResult;
  }
  handleInteraction(interaction) {
    const items = [EmojiInteractionPoint.EmojiButtonMouseEntered];
    if (items.includes(interaction.interaction)) {
      const guildId = SelectedGuildStore.getGuildId();
      const obj = TopEmojisUtils;
      const result = obj.maybeFetchTopEmojisByGuild(guildId);
    }
  }
}
const prototype = TopEmojisDataManager.prototype;
const topEmojisDataManager = new TopEmojisDataManager();
let result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisDataManager.tsx");

export default topEmojisDataManager;
