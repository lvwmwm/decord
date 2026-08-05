// Module ID: 10898
// Function ID: 10899
// Name: useChannelLoading
// Dependencies: [32, 19, 10899, 8392, 4682, 2]
// Exports: default

// Module 10898 (useChannelLoading)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
let result = require("start").fileFinishedImporting("modules/messages/native/hooks/useChannelLoading.tsx");

export default function useChannelLoading(arg0) {
  let _slicedToArray;
  let dependencyMap;
  let importDefault;
  let require;
  ({ channelId: require, jumpTargetId: importDefault, oldestUnreadMessageId: dependencyMap, shouldJumpToOriginalPost: _slicedToArray } = arg0);
  let first;
  first = callback(first.useState(() => new callback(table[2])("Messages")), 1)[0];
  importDefault(4682)(() => {
    let obj = outer1_0(outer1_2[3]);
    obj = { jumpTargetId: closure_1, oldestUnreadMessageId: closure_2, shouldJumpToOriginalPost: callback2(false), channelId: closure_0, tracker: first };
    const result = obj.startOrCancelChannelLatestMessagesLoad(obj);
    return () => {
      noop.cancel();
    };
  });
  return {
    channelLatestMessageLoadingStatsManager: first,
    startOrCancelLatestMessagesLoad(arg0) {
      let obj = outer1_0(outer1_2[3]);
      obj = { jumpTargetId: closure_1, oldestUnreadMessageId: closure_2, shouldJumpToOriginalPost: callback2(arg0), channelId: closure_0, tracker: first };
      const result = obj.startOrCancelChannelLatestMessagesLoad(obj);
    }
  };
};
