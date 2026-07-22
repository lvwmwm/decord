// Module ID: 7661
// Function ID: 61256
// Name: getHumanizedCallDuration
// Dependencies: []
// Exports: default

// Module 7661 (getHumanizedCallDuration)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/messages/getHumanizedCallDuration.tsx");

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
