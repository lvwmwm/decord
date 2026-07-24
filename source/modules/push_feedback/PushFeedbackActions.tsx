// Module ID: 9537
// Function ID: 74236
// Name: receivedNotification
// Dependencies: [686, 2]
// Exports: handleSurveyCleanup, receivedNotification

// Module 9537 (receivedNotification)
const result = require("set").fileFinishedImporting("modules/push_feedback/PushFeedbackActions.tsx");

export const receivedNotification = function receivedNotification(messageId, channelId, tracking_type) {
  let obj = importDefault(686);
  obj = { type: "PUSH_FEEDBACK_RECEIVED_NOTIFICATION", messageId, channelId, notificationType: tracking_type };
  obj.dispatch(obj);
};
export const handleSurveyCleanup = function handleSurveyCleanup() {
  importDefault(686).dispatch({ type: "PUSH_FEEDBACK_CLEANUP" });
};
