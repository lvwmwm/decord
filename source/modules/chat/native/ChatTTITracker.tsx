// Module ID: 11127
// Function ID: 86479
// Name: ChatTTITracker
// Dependencies: [33, 10058, 14, 2]
// Exports: ChatTTITracker

// Module 11127 (ChatTTITracker)
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = jsxProd);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/chat/native/ChatTTITracker.tsx");

export const ChatTTITracker = function ChatTTITracker(messages) {
  messages = messages.messages;
  let obj = {};
  let tmp3 = null;
  if (messages.length > 0) {
    obj = {
      nativeID: "cached_messages_tti",
      onMeasurement(nativeEvent) {
          const displayMessagesWithCache = outer1_1(outer1_2[2]).displayMessagesWithCache;
          displayMessagesWithCache.record(nativeEvent.nativeEvent.timestamp);
        }
    };
    tmp3 = callback(require(10058) /* TTIMeasurementView */.TTIMeasurementView, obj, "cached_messages_tti");
  }
  const items = [tmp3, ];
  if (messages.hasFetched) {
    obj = {
      nativeID: "latest_messages_tti",
      onMeasurement(nativeEvent) {
          const displayLatestMessages = outer1_1(outer1_2[2]).displayLatestMessages;
          displayLatestMessages.record(nativeEvent.nativeEvent.timestamp);
        }
    };
    let tmp7 = callback(require(10058) /* TTIMeasurementView */.TTIMeasurementView, obj, "latest_messages_tti");
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
