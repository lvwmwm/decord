// Module ID: 17747
// Function ID: 17748
// Name: AutomodRemovedContentManager
// Dependencies: [5010, 2099, 17748, 7397, 2]

// Module 17747 (AutomodRemovedContentManager)
import AutomodRemovedContentActionCreators from "AutomodRemovedContentActionCreators" /* 17748 */;
import MessageStore from "MessageStore" /* 5010 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7397 */;

require = fn;
function handleAutomodContentDeleted(message) {
  message = message.message;
  if (null == message.thread) {
    if (null != message) {
      if (null != MessageStore.getAutomodRemovalNotice(message.id)) {
        if (message.channel_id !== SelectedChannelStore.getCurrentlySelectedChannelId()) {
          const result = AutomodRemovedContentActionCreators.showRemovedMessageToast(tmp, message.channel_id);
        }
      }
    }
  }
  const result1 = AutomodRemovedContentActionCreators.openRemovedContentModal(message);
}
const prototype = function AutomodRemovedContentManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { AUTO_MODERATION_CONTENT_DELETED: handleAutomodContentDeleted };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/AutomodRemovedContentManager.tsx");

export default prototype1;
