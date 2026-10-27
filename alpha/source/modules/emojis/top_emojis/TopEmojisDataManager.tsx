// Module ID: 18827
// Function ID: 18828
// Name: TopEmojisDataManager
// Dependencies: [5003, 1392, 7216, 9833, 2]

// Module 18827 (TopEmojisDataManager)
import EmojiConstants from "EmojiConstants" /* 1392 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9833 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5003 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7216 */;
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
