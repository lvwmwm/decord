// Module ID: 11820
// Function ID: 11821
// Name: useChannelLoading
// Dependencies: [32, 19, 11821, 11547, 5236, 2]
// Exports: default

// Module 11820 (useChannelLoading)
import hooks_useMountEffectDefault from "hooks/useMountEffect" /* 5236 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 11547 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/hooks/useChannelLoading.tsx");

export default function useChannelLoading(arg0) {
  ({ channelId: require, jumpTargetId: importDefault, oldestUnreadMessageId: dependencyMap, shouldJumpToOriginalPost: _slicedToArray } = arg0);
  let channelLatestMessageLoadingStatsManager;
  channelLatestMessageLoadingStatsManager = _slicedToArray(channelLatestMessageLoadingStatsManager.useState(() => new jumpTargetId(oldestUnreadMessageId[2])("Messages")), 1)[0];
  hooks_useMountEffectDefault(() => {
    const obj = messages_MessagesUtils;
    const result = obj.startOrCancelChannelLatestMessagesLoad({ jumpTargetId, oldestUnreadMessageId, shouldJumpToOriginalPost: _slicedToArray(false), channelId, tracker });
    return () => {
      first.cancel();
    };
  });
  return {
    channelLatestMessageLoadingStatsManager,
    startOrCancelLatestMessagesLoad(arg0) {
      const obj = messages_MessagesUtils;
      const result = obj.startOrCancelChannelLatestMessagesLoad({ jumpTargetId, oldestUnreadMessageId, shouldJumpToOriginalPost: _slicedToArray(arg0), channelId, tracker });
    }
  };
};
