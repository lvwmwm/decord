// Module ID: 18087
// Function ID: 18088
// Name: TopEmojisDataManager
// Dependencies: [4939, 1393, 6808, 9433, 2]

// Module 18087 (TopEmojisDataManager)
import EmojiConstants from "EmojiConstants" /* 1393 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9433 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6808 */;
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
