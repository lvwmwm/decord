// Module ID: 8010
// Function ID: 8011
// Name: getHumanizedCallDuration
// Dependencies: [2]
// Exports: default

// Module 8010 (getHumanizedCallDuration)
const result = require("set").fileFinishedImporting("modules/messages/getHumanizedCallDuration.tsx");

export default function getHumanizedCallDuration(call) {
  let duration = null;
  if (null != call.call) {
    duration = call.call.duration;
  }
  let humanizeResult = null;
  if (null != duration) {
    humanizeResult = duration.humanize();
  }
  return humanizeResult;
};
