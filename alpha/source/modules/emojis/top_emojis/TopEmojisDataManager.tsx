// Module ID: 17799
// Function ID: 17800
// Name: TopEmojisDataManager
// Dependencies: [4899, 1392, 6797, 9365, 2]

// Module 17799 (TopEmojisDataManager)
import EmojiConstants from "EmojiConstants" /* 1392 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9365 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4899 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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
