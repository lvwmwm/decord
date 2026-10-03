// Module ID: 17466
// Function ID: 17467
// Name: TopEmojisDataManager
// Dependencies: [4699, 1380, 6613, 9872, 2]

// Module 17466 (TopEmojisDataManager)
import EmojiConstants from "EmojiConstants" /* 1380 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9872 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
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
