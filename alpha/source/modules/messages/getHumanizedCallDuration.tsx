// Module ID: 8370
// Function ID: 8371
// Name: getHumanizedCallDuration
// Dependencies: [2]
// Exports: default

// Module 8370 (getHumanizedCallDuration)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/getHumanizedCallDuration.tsx");

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
