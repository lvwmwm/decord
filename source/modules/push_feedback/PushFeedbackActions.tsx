// Module ID: 11175
// Function ID: 11176
// Name: receivedNotification
// Dependencies: [709, 2]
// Exports: handleSurveyCleanup, receivedNotification

// Module 11175 (receivedNotification)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/push_feedback/PushFeedbackActions.tsx");

export const receivedNotification = function receivedNotification(messageId, channelId, tracking_type) {
  let obj = dispatcherDefault;
  obj = { type: "PUSH_FEEDBACK_RECEIVED_NOTIFICATION", messageId, channelId, notificationType: tracking_type };
  obj.dispatch(obj);
};
export const handleSurveyCleanup = function handleSurveyCleanup() {
  dispatcherDefault.dispatch({ type: "PUSH_FEEDBACK_CLEANUP" });
};
