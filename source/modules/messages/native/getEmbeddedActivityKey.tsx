// Module ID: 9303
// Function ID: 72687
// Name: getEmbeddedActivityKey
// Dependencies: [284214097]
// Exports: default, parseEmbeddedActivityKey

// Module 9303 (getEmbeddedActivityKey)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/messages/native/getEmbeddedActivityKey.tsx");

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
