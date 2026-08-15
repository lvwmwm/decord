// Module ID: 10812
// Function ID: 10813
// Name: receivedNotification
// Dependencies: [709, 2]
// Exports: handleSurveyCleanup, receivedNotification

// Module 10812 (receivedNotification)
const result = require("set").fileFinishedImporting("modules/push_feedback/PushFeedbackActions.tsx");

export const receivedNotification = function receivedNotification(messageId, channelId, tracking_type) {
  let obj = importDefault(709);
  obj = { type: "PUSH_FEEDBACK_RECEIVED_NOTIFICATION", messageId, channelId, notificationType: tracking_type };
  obj.dispatch(obj);
};
export const handleSurveyCleanup = function handleSurveyCleanup() {
  importDefault(709).dispatch({ type: "PUSH_FEEDBACK_CLEANUP" });
};
