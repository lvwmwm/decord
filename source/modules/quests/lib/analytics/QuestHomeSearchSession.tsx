// Module ID: 5966
// Function ID: 53083
// Name: getOrCreateQuestHomeSearchSession
// Dependencies: [491, 5701, 2]
// Exports: clearQuestHomeSearchSession, getCurrentQuestHomeSearchSession, getOrCreateQuestHomeSearchSession

// Module 5966 (getOrCreateQuestHomeSearchSession)
let c2 = null;
const result = require("set").fileFinishedImporting("modules/quests/lib/analytics/QuestHomeSearchSession.tsx");

export const getOrCreateQuestHomeSearchSession = function getOrCreateQuestHomeSearchSession() {
  const timestamp = Date.now();
  if (null == obj) {
    obj = {};
    obj = { uuid: require(491) /* v1 */.v4(), createdAtTimestamp: timestamp, lastUsedTimestamp: timestamp, version: require(5701) /* result */.CLIENT_SESSION_STORAGE_VERSION };
    obj.searchSession = obj;
    obj.isNew = true;
    const obj4 = require(491) /* v1 */;
  } else {
    obj.lastUsedTimestamp = timestamp;
    obj = {};
    obj.searchSession = obj;
    obj.isNew = false;
  }
  return obj;
};
export function clearQuestHomeSearchSession() {
  let c2 = null;
}
export function getCurrentQuestHomeSearchSession() {
  return c2;
}
