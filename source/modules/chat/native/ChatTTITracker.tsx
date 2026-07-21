// Module ID: 11089
// Function ID: 86216
// Name: ChatTTITracker
// Dependencies: []
// Exports: ChatTTITracker

// Module 11089 (ChatTTITracker)
const _module = require(dependencyMap[0]);
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/chat/native/ChatTTITracker.tsx");

export const ChatTTITracker = function ChatTTITracker(messages) {
  messages = messages.messages;
  let obj = {};
  let tmp3 = null;
  if (messages.length > 0) {
    obj = {
      nativeID: "cached_messages_tti",
      onMeasurement(nativeEvent) {
          const displayMessagesWithCache = callback(closure_2[2]).displayMessagesWithCache;
          displayMessagesWithCache.record(nativeEvent.nativeEvent.timestamp);
        }
    };
    tmp3 = callback(require(dependencyMap[1]).TTIMeasurementView, obj, "cached_messages_tti");
  }
  const items = [tmp3, ];
  if (messages.hasFetched) {
    obj = {
      nativeID: "latest_messages_tti",
      onMeasurement(nativeEvent) {
          const displayLatestMessages = callback(closure_2[2]).displayLatestMessages;
          displayLatestMessages.record(nativeEvent.nativeEvent.timestamp);
        }
    };
    let tmp7 = callback(require(dependencyMap[1]).TTIMeasurementView, obj, "latest_messages_tti");
  } else {
    tmp7 = null;
    if (messages.ready) {
      tmp7 = null;
    }
  }
  items[1] = tmp7;
  obj.children = items;
  return closure_5(closure_4, obj);
};
