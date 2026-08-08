// Module ID: 7194
// Function ID: 7195
// Name: getOrCreateQuestHomeSearchSession
// Dependencies: [514, 6931, 2]
// Exports: clearQuestHomeSearchSession, getCurrentQuestHomeSearchSession, getOrCreateQuestHomeSearchSession

// Module 7194 (getOrCreateQuestHomeSearchSession)
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
    obj[3] = require(6931) /* result */.CLIENT_SESSION_STORAGE_VERSION;
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
