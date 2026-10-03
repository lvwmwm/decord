// Module ID: 17432
// Function ID: 17433
// Name: AutomodRemovedContentManager
// Dependencies: [5110, 2103, 17433, 6613, 2]

// Module 17432 (AutomodRemovedContentManager)
import AutomodRemovedContentActionCreators from "AutomodRemovedContentActionCreators" /* 17433 */;
import MessageStore from "MessageStore" /* 5110 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
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
