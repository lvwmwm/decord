// Module ID: 7639
// Function ID: 7640
// Name: getHumanizedCallDuration
// Dependencies: [2]
// Exports: default

// Module 7639 (getHumanizedCallDuration)
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
