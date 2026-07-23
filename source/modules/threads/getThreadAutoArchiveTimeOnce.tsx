// Module ID: 5041
// Function ID: 43564
// Name: getThreadLastActivityTime
// Dependencies: [4142, 664, 21, 2]
// Exports: default

// Module 5041 (getThreadLastActivityTime)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function getThreadLastActivityTime(threadMetadata) {
  if (null == threadMetadata.threadMetadata) {
    return 0;
  } else {
    let id = _isNativeReflectConstruct.lastMessageId(threadMetadata.id);
    if (null == id) {
      id = threadMetadata.id;
    }
    let num2 = 0;
    const obj = importDefault(21);
    if (null != threadMetadata.lastNonMessageActivityTimestamp) {
      const _Date = Date;
      const date = new Date(threadMetadata.lastNonMessageActivityTimestamp);
      num2 = date.getTime();
    }
    let num3 = 0;
    if (null != threadMetadata.threadMetadata.archiveTimestamp) {
      const _Date2 = Date;
      const date1 = new Date(threadMetadata.threadMetadata.archiveTimestamp);
      num3 = date1.getTime();
    }
    const _Math = Math;
    return Math.max(importDefault(21).extractTimestamp(id), num2, num3);
  }
}
let result = require("DISCORD_EPOCH").fileFinishedImporting("modules/threads/getThreadAutoArchiveTimeOnce.tsx");

export default function getThreadAutoArchiveTimeOnce(threadMetadata) {
  if (null == threadMetadata.threadMetadata) {
    return 0;
  } else {
    const result = threadMetadata.threadMetadata.autoArchiveDuration * importDefault(664).Millis.MINUTE;
    return getThreadLastActivityTime(threadMetadata) + result;
  }
};
export { getThreadLastActivityTime };
