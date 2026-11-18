// Module ID: 19539
// Function ID: 19540
// Name: TopEmojisDataManager
// Dependencies: [4856, 1391, 7395, 8975, 2]

// Module 19539 (TopEmojisDataManager)
import EmojiConstants from "EmojiConstants" /* 1391 */;
import TopEmojisUtils from "TopEmojisUtils" /* 8975 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4856 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7395 */;
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
