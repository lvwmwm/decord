// Module ID: 10850
// Function ID: 84283
// Name: useChannelLoading
// Dependencies: []
// Exports: default

// Module 10850 (useChannelLoading)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/messages/native/hooks/useChannelLoading.tsx");

export default function useChannelLoading(arg0) {
  ({ channelId: closure_0, jumpTargetId: closure_1, oldestUnreadMessageId: closure_2, shouldJumpToOriginalPost: closure_3 } = arg0);
  let React;
  function startOrCancelLatestMessagesLoad(arg0) {
    let obj = callback(closure_2[3]);
    obj = { jumpTargetId: closure_1, oldestUnreadMessageId: closure_2, shouldJumpToOriginalPost: callback3(arg0), channelId: callback, tracker: channelLatestMessageLoadingStatsManager };
    const result = obj.startOrCancelChannelLatestMessagesLoad(obj);
  }
  const channelLatestMessageLoadingStatsManager = callback(React.useState(() => {
    let tmp = callback2(closure_2[2]);
    tmp = new tmp("Messages");
    return tmp;
  }), 1)[0];
  React = channelLatestMessageLoadingStatsManager;
  importDefault(dependencyMap[4])(() => {
    startOrCancelLatestMessagesLoad(false);
    return () => {
      closure_4.cancel();
    };
  });
  return { channelLatestMessageLoadingStatsManager, startOrCancelLatestMessagesLoad };
};
