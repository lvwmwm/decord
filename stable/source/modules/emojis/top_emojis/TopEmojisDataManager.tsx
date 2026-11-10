// Module ID: 19436
// Function ID: 19437
// Name: TopEmojisDataManager
// Dependencies: [5045, 1386, 7287, 9945, 2]

// Module 19436 (TopEmojisDataManager)
import EmojiConstants from "EmojiConstants" /* 1386 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9945 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7287 */;
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
