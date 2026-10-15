// Module ID: 18363
// Function ID: 18364
// Name: TopEmojisDataManager
// Dependencies: [4995, 1393, 7028, 9653, 2]

// Module 18363 (TopEmojisDataManager)
import EmojiConstants from "EmojiConstants" /* 1393 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9653 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4995 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7028 */;
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
