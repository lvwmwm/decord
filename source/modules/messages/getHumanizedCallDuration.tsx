// Module ID: 7761
// Function ID: 7762
// Name: getHumanizedCallDuration
// Dependencies: [2]
// Exports: default

// Module 7761 (getHumanizedCallDuration)
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
