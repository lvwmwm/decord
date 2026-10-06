// Module ID: 10992
// Function ID: 10993
// Name: PushFeedbackActions
// Dependencies: [585, 2]
// Exports: handleSurveyCleanup, receivedNotification

// Module 10992 (PushFeedbackActions)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/push_feedback/PushFeedbackActions.tsx");

export const receivedNotification = function receivedNotification(messageId, channelId, tracking_type) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PUSH_FEEDBACK_RECEIVED_NOTIFICATION", messageId, channelId, notificationType: tracking_type };
  obj.dispatch(obj2);
};
export const handleSurveyCleanup = function handleSurveyCleanup() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "PUSH_FEEDBACK_CLEANUP" });
};
