// Module ID: 11081
// Function ID: 85977
// Name: disableFalsePositiveButton
// Dependencies: [686, 2]
// Exports: disableFalsePositiveButton

// Module 11081 (disableFalsePositiveButton)
function disableFalsePositiveButton(channelId, messageId) {
  let obj = importDefault(686);
  obj = { type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId };
  obj.dispatch(obj);
}
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx");

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };
