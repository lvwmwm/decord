// Module ID: 9493
// Function ID: 73973
// Name: receivedNotification
// Dependencies: [646840323, 899088385]
// Exports: handleSurveyCleanup, receivedNotification

// Module 9493 (receivedNotification)
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
