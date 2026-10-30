// Module ID: 10139
// Function ID: 10140
// Name: PushFeedbackActions
// Dependencies: [572, 2]
// Exports: handleSurveyCleanup, receivedNotification

// Module 10139 (PushFeedbackActions)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/push_feedback/PushFeedbackActions.tsx");

export function receivedNotification(messageId, channelId, tracking_type) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PUSH_FEEDBACK_RECEIVED_NOTIFICATION", messageId, channelId, notificationType: tracking_type };
  obj.dispatch(obj2);
}
export function handleSurveyCleanup() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "PUSH_FEEDBACK_CLEANUP" });
}
