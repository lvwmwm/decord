// Module ID: 17765
// Function ID: 17766
// Name: AutomodRemovedContentManager
// Dependencies: [5428, 2115, 17766, 6797, 2]

// Module 17765 (AutomodRemovedContentManager)
import AutomodRemovedContentActionCreators from "AutomodRemovedContentActionCreators" /* 17766 */;
import MessageStore from "MessageStore" /* 5428 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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
