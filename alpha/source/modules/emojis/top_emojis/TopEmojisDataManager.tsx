// Module ID: 18415
// Function ID: 18416
// Name: TopEmojisDataManager
// Dependencies: [4998, 1395, 7032, 9668, 2]

// Module 18415 (TopEmojisDataManager)
import EmojiConstants from "EmojiConstants" /* 1395 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9668 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4998 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7032 */;
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
