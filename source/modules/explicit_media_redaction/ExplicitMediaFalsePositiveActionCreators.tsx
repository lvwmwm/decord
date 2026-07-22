// Module ID: 8138
// Function ID: 64382
// Name: disableFalsePositiveButton
// Dependencies: []
// Exports: disableFalsePositiveButton

// Module 8138 (disableFalsePositiveButton)
function disableFalsePositiveButton(channelId, messageId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId };
  obj.dispatch(obj);
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx");

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };
