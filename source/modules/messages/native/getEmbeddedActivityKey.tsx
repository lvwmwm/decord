// Module ID: 9311
// Function ID: 72752
// Name: getEmbeddedActivityKey
// Dependencies: [2]
// Exports: default, parseEmbeddedActivityKey

// Module 9311 (getEmbeddedActivityKey)
const result = require("set").fileFinishedImporting("modules/messages/native/getEmbeddedActivityKey.tsx");

export default function getEmbeddedActivityKey(location) {
  return "" + location.location.id + ":" + location.applicationId + ":" + location.launchId;
};
export const parseEmbeddedActivityKey = function parseEmbeddedActivityKey(str) {
  const parts = str.split(":");
  let tmp = null;
  if (parts.length >= 3) {
    const obj = { channelId: parts[0], applicationId: parts[1], instanceId: parts[2] };
    tmp = obj;
  }
  return tmp;
};
