// Module ID: 6971
// Function ID: 55723
// Name: getOrCreateQuestHomeSearchSession
// Dependencies: []
// Exports: clearQuestHomeSearchSession, getCurrentQuestHomeSearchSession, getOrCreateQuestHomeSearchSession

// Module 6971 (getOrCreateQuestHomeSearchSession)
let closure_2 = null;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/quests/lib/analytics/QuestHomeSearchSession.tsx");

export const getOrCreateQuestHomeSearchSession = function getOrCreateQuestHomeSearchSession() {
  const timestamp = Date.now();
  if (null == closure_2) {
    let obj = {};
    obj = { uuid: require(dependencyMap[0]).v4(), createdAtTimestamp: timestamp, lastUsedTimestamp: timestamp, version: require(dependencyMap[1]).CLIENT_SESSION_STORAGE_VERSION };
    closure_2 = obj;
    obj.searchSession = obj;
    obj.isNew = true;
    const obj4 = require(dependencyMap[0]);
  } else {
    closure_2.lastUsedTimestamp = timestamp;
    obj = { searchSession: closure_2, isNew: false };
  }
  return obj;
};
export function clearQuestHomeSearchSession() {
  let closure_2 = null;
}
export function getCurrentQuestHomeSearchSession() {
  return closure_2;
}
