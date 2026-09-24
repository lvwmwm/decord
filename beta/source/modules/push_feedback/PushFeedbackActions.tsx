// Module ID: 11785
// Function ID: 11786
// Name: PushFeedbackActions
// Dependencies: [577, 2]
// Exports: handleSurveyCleanup, receivedNotification

// Module 11785 (PushFeedbackActions)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/push_feedback/PushFeedbackActions.tsx");

export const receivedNotification = function receivedNotification(messageId, channelId, tracking_type) {
  DispatcherDefault.dispatch({ type: "PUSH_FEEDBACK_RECEIVED_NOTIFICATION", messageId, channelId, notificationType: tracking_type });
};
export const handleSurveyCleanup = function handleSurveyCleanup() {
  DispatcherDefault.dispatch({ type: "PUSH_FEEDBACK_CLEANUP" });
};
