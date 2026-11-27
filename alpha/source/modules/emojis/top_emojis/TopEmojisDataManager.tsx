// Module ID: 19714
// Function ID: 19715
// Name: TopEmojisDataManager
// Dependencies: [5076, 1390, 7475, 9544, 2]

// Module 19714 (TopEmojisDataManager)
import EmojiConstants from "EmojiConstants" /* 1390 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9544 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5076 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7475 */;
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
