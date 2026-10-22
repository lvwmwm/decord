// Module ID: 18665
// Function ID: 18666
// Name: AutomodRemovedContentManager
// Dependencies: [5996, 4872, 18666, 7199, 2]

// Module 18665 (AutomodRemovedContentManager)
import AutomodRemovedContentActionCreators from "AutomodRemovedContentActionCreators" /* 18666 */;
import MessageStore from "MessageStore" /* 5996 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7199 */;
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
