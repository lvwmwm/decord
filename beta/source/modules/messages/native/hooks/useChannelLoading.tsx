// Module ID: 11034
// Function ID: 11035
// Name: useChannelLoading
// Dependencies: [32, 19, 11035, 10822, 5299, 2]
// Exports: default

// Module 11034 (useChannelLoading)
import reactDefault from "react" /* 5299 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 10822 */;
import ChannelLatestMessageLoadingStatsManagerDefault from "ChannelLatestMessageLoadingStatsManager" /* 11035 */;
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
