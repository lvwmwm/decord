// Module ID: 7901
// Function ID: 7902
// Name: getHumanizedCallDuration
// Dependencies: [2]
// Exports: default

// Module 7901 (getHumanizedCallDuration)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/messages/getHumanizedCallDuration.tsx");

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
