// Module ID: 5311
// Function ID: 45136
// Name: getThreadLastActivityTime
// Dependencies: []
// Exports: default

// Module 5311 (getThreadLastActivityTime)
function getThreadLastActivityTime(threadMetadata) {
  if (null == threadMetadata.threadMetadata) {
    return 0;
  } else {
    let id = closure_2.lastMessageId(threadMetadata.id);
    if (null == id) {
      id = threadMetadata.id;
    }
    let num2 = 0;
    const obj = importDefault(dependencyMap[2]);
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
    return Math.max(importDefault(dependencyMap[2]).extractTimestamp(id), num2, num3);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/threads/getThreadAutoArchiveTimeOnce.tsx");

export default function getThreadAutoArchiveTimeOnce(threadMetadata) {
  if (null == threadMetadata.threadMetadata) {
    return 0;
  } else {
    const result = threadMetadata.threadMetadata.autoArchiveDuration * importDefault(dependencyMap[1]).Millis.MINUTE;
    return getThreadLastActivityTime(threadMetadata) + result;
  }
};
export { getThreadLastActivityTime };
