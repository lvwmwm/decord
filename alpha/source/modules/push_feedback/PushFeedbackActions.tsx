// Module ID: 10112
// Function ID: 10113
// Name: PushFeedbackActions
// Dependencies: [584, 2]
// Exports: handleSurveyCleanup, receivedNotification

// Module 10112 (PushFeedbackActions)
import DispatcherDefault from "Dispatcher" /* 584 */;
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
