// Module ID: 17737
// Function ID: 17738
// Name: AutomodRemovedContentManager
// Dependencies: [4978, 2099, 17738, 7365, 2]

// Module 17737 (AutomodRemovedContentManager)
import AutomodRemovedContentActionCreators from "AutomodRemovedContentActionCreators" /* 17738 */;
import MessageStore from "MessageStore" /* 4978 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;

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
