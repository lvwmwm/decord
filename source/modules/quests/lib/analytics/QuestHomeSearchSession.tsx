// Module ID: 6019
// Function ID: 6020
// Name: getOrCreateQuestHomeSearchSession
// Dependencies: [514, 5729, 2]
// Exports: clearQuestHomeSearchSession, getCurrentQuestHomeSearchSession, getOrCreateQuestHomeSearchSession

// Module 6019 (getOrCreateQuestHomeSearchSession)
let c2 = null;
const result = require("set").fileFinishedImporting("modules/quests/lib/analytics/QuestHomeSearchSession.tsx");

export const getOrCreateQuestHomeSearchSession = function getOrCreateQuestHomeSearchSession() {
  const timestamp = Date.now();
  if (null == obj) {
    obj = { searchSession: null, isNew: true };
    obj = { uuid: null, createdAtTimestamp: null, lastUsedTimestamp: null, version: null };
    obj[0] = require(514) /* v1 */.v4();
    obj[1] = timestamp;
    obj[2] = timestamp;
    obj[3] = require(5729) /* result */.CLIENT_SESSION_STORAGE_VERSION;
    obj[0] = obj;
    const obj4 = require(514) /* v1 */;
  } else {
    obj.lastUsedTimestamp = timestamp;
    obj = { searchSession: null, isNew: false };
    obj[0] = obj;
  }
  return obj;
};
export function clearQuestHomeSearchSession() {
  let c2 = null;
}
export function getCurrentQuestHomeSearchSession() {
  return c2;
}
