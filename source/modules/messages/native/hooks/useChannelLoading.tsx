// Module ID: 10877
// Function ID: 84261
// Name: useChannelLoading
// Dependencies: [57, 31, 10878, 9285, 4595, 2]
// Exports: default

// Module 10877 (useChannelLoading)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
let result = require("ChannelLatestMessageLoadingStatsManager").fileFinishedImporting("modules/messages/native/hooks/useChannelLoading.tsx");

export default function useChannelLoading(arg0) {
  let _slicedToArray;
  let dependencyMap;
  let importDefault;
  let require;
  ({ channelId: require, jumpTargetId: importDefault, oldestUnreadMessageId: dependencyMap, shouldJumpToOriginalPost: _slicedToArray } = arg0);
  let channelLatestMessageLoadingStatsManager;
  function startOrCancelLatestMessagesLoad(arg0) {
    let obj = outer1_0(outer1_2[3]);
    obj = { jumpTargetId: closure_1, oldestUnreadMessageId: closure_2, shouldJumpToOriginalPost: callback(arg0), channelId: closure_0, tracker: channelLatestMessageLoadingStatsManager };
    const result = obj.startOrCancelChannelLatestMessagesLoad(obj);
  }
  channelLatestMessageLoadingStatsManager = callback(channelLatestMessageLoadingStatsManager.useState(() => {
    let tmp = outer1_1(outer1_2[2]);
    tmp = new tmp("Messages");
    return tmp;
  }), 1)[0];
  importDefault(4595)(() => {
    startOrCancelLatestMessagesLoad(false);
    return () => {
      outer1_4.cancel();
    };
  });
  return { channelLatestMessageLoadingStatsManager, startOrCancelLatestMessagesLoad };
};
