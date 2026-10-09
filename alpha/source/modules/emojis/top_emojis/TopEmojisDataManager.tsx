// Module ID: 17953
// Function ID: 17954
// Name: TopEmojisDataManager
// Dependencies: [4900, 1393, 6804, 9403, 2]

// Module 17953 (TopEmojisDataManager)
import EmojiConstants from "EmojiConstants" /* 1393 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9403 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6804 */;
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
