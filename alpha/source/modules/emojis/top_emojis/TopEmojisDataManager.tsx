// Module ID: 20062
// Function ID: 20063
// Name: TopEmojisDataManager
// Dependencies: [5286, 1388, 7816, 9483, 2]

// Module 20062 (TopEmojisDataManager)
import EmojiConstants from "EmojiConstants" /* 1388 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9483 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7816 */;
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
