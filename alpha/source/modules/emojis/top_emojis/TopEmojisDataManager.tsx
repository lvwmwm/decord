// Module ID: 20268
// Function ID: 20269
// Name: TopEmojisDataManager
// Dependencies: [5343, 1391, 7892, 9561, 2]

// Module 20268 (TopEmojisDataManager)
import EmojiConstants from "EmojiConstants" /* 1391 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9561 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5343 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7892 */;
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
