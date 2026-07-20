// Module ID: 9488
// Function ID: 73946
// Name: receivedNotification
// Dependencies: []
// Exports: handleSurveyCleanup, receivedNotification

// Module 9488 (receivedNotification)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/push_feedback/PushFeedbackActions.tsx");

export const receivedNotification = function receivedNotification(messageId, channelId, tracking_type) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "PUSH_FEEDBACK_RECEIVED_NOTIFICATION", messageId, channelId, notificationType: tracking_type };
  obj.dispatch(obj);
};
export const handleSurveyCleanup = function handleSurveyCleanup() {
  importDefault(dependencyMap[0]).dispatch({ type: "PUSH_FEEDBACK_CLEANUP" });
};
