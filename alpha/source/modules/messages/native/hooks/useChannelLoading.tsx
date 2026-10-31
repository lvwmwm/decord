// Module ID: 11567
// Function ID: 11568
// Name: useChannelLoading
// Dependencies: [32, 19, 11568, 9894, 5594, 2]
// Exports: default

// Module 11567 (useChannelLoading)
import reactDefault from "react" /* 5594 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9894 */;
import ChannelLatestMessageLoadingStatsManagerDefault from "ChannelLatestMessageLoadingStatsManager" /* 11568 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/messages/native/hooks/useChannelLoading.tsx");

export default function useChannelLoading(arg0) {
  let channelId;
  let first;
  let jumpTargetId;
  let oldestUnreadMessageId;
  ({ channelId: require, jumpTargetId: importDefault, oldestUnreadMessageId: dependencyMap, shouldJumpToOriginalPost: _slicedToArray } = arg0);
  let channelLatestMessageLoadingStatsManager;
  channelLatestMessageLoadingStatsManager = _slicedToArray(channelLatestMessageLoadingStatsManager.useState(() => {
    const tmp = new ChannelLatestMessageLoadingStatsManagerDefault("Messages");
    return tmp;
  }), 1)[0];
  reactDefault(() => {
    const obj = messages_MessagesUtils;
    const obj2 = { jumpTargetId: importDefault, oldestUnreadMessageId: dependencyMap, shouldJumpToOriginalPost: _slicedToArray(false), channelId: require, tracker };
    const result = obj.startOrCancelChannelLatestMessagesLoad(obj2);
    return () => {
      first.cancel();
    };
  });
  let obj = {
    channelLatestMessageLoadingStatsManager,
    startOrCancelLatestMessagesLoad(arg0) {
      const obj = messages_MessagesUtils;
      const obj2 = { jumpTargetId: importDefault, oldestUnreadMessageId: dependencyMap, shouldJumpToOriginalPost: _slicedToArray(arg0), channelId: require, tracker };
      const result = obj.startOrCancelChannelLatestMessagesLoad(obj2);
    }
  };
  return obj;
};
