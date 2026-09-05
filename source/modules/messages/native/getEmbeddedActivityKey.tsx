// Module ID: 11539
// Function ID: 11540
// Name: getEmbeddedActivityKey
// Dependencies: [2]
// Exports: default, parseEmbeddedActivityKey

// Module 11539 (getEmbeddedActivityKey)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/messages/native/getEmbeddedActivityKey.tsx");

export default function getEmbeddedActivityKey(location) {
  return "" + location.location.id + ":" + location.applicationId + ":" + location.launchId;
};
export const parseEmbeddedActivityKey = function parseEmbeddedActivityKey(str) {
  const parts = str.split(":");
  let tmp = null;
  if (parts.length >= 3) {
    const obj = { channelId: null, applicationId: null, instanceId: null };
    [obj[0], obj[1], obj[2]] = parts;
    tmp = obj;
  }
  return tmp;
};
