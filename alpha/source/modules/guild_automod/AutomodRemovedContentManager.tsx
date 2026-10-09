// Module ID: 17919
// Function ID: 17920
// Name: AutomodRemovedContentManager
// Dependencies: [5429, 2115, 17920, 6804, 2]

// Module 17919 (AutomodRemovedContentManager)
import AutomodRemovedContentActionCreators from "AutomodRemovedContentActionCreators" /* 17920 */;
import MessageStore from "MessageStore" /* 5429 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6804 */;
import size from "module_2" /* 2 */;

function handleAutomodContentDeleted(message) {
  message = message.message;
  if (null == message.thread) {
    if (null != message) {
      if (null != MessageStore.getAutomodRemovalNotice(message.id)) {
        if (message.channel_id !== SelectedChannelStore.getCurrentlySelectedChannelId()) {
          const obj = AutomodRemovedContentActionCreators;
          const result = obj.showRemovedMessageToast(tmp, message.channel_id);
        }
      }
    }
  }
  const obj2 = AutomodRemovedContentActionCreators;
  const result1 = obj2.openRemovedContentModal(message);
}
class AutomodRemovedContentManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { AUTO_MODERATION_CONTENT_DELETED: handleAutomodContentDeleted };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const automodRemovedContentManager = new AutomodRemovedContentManager();
let result = size.fileFinishedImporting("modules/guild_automod/AutomodRemovedContentManager.tsx");

export default automodRemovedContentManager;
