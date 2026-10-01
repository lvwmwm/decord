// Module ID: 11439
// Function ID: 11440
// Name: ChatTTITracker
// Dependencies: [21, 11376, 9, 2]
// Exports: ChatTTITracker

// Module 11439 (ChatTTITracker)
import TTITrackerDefault from "TTITracker" /* 9 */;
import TTIMeasurementView from "TTIMeasurementView" /* 11376 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/chat/native/ChatTTITracker.tsx");

export const ChatTTITracker = function ChatTTITracker(messages) {
  let tmp7;
  messages = messages.messages;
  let tmp3 = null;
  const tmp = hasOwnProperty;
  const tmp2 = React3;
  if (messages.length > 0) {
    const obj = {
      nativeID: "cached_messages_tti",
      onMeasurement(nativeEvent) {
          const displayMessagesWithCache = TTITrackerDefault.displayMessagesWithCache;
          displayMessagesWithCache.record(nativeEvent.nativeEvent.timestamp);
        }
    };
    tmp3 = _false(TTIMeasurementView.TTIMeasurementView, obj, "cached_messages_tti");
  }
  const children = [tmp3, ];
  if (messages.hasFetched) {
    const obj2 = {
      nativeID: "latest_messages_tti",
      onMeasurement(nativeEvent) {
          const displayLatestMessages = TTITrackerDefault.displayLatestMessages;
          displayLatestMessages.record(nativeEvent.nativeEvent.timestamp);
        }
    };
    tmp7 = _false(TTIMeasurementView.TTIMeasurementView, obj2, "latest_messages_tti");
  } else {
    tmp7 = null;
    if (messages.ready) {
      tmp7 = null;
    }
  }
  children[1] = tmp7;
  return tmp(tmp2, { children });
};
