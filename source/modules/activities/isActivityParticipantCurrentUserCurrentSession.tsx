// Module ID: 13332
// Function ID: 13333
// Name: isActivityParticipantCurrentUserCurrentSession
// Dependencies: [1218, 2]
// Exports: isActivityParticipantCurrentUserCurrentSession

// Module 13332 (isActivityParticipantCurrentUserCurrentSession)
import fetchFingerprint from "fetchFingerprint";

const result = require("set").fileFinishedImporting("modules/activities/isActivityParticipantCurrentUserCurrentSession.tsx");

export const isActivityParticipantCurrentUserCurrentSession = function isActivityParticipantCurrentUserCurrentSession(userId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = fetchFingerprint;
  }
  const id = obj.getId();
  let tmp3 = userId.userId === id;
  if (tmp3) {
    tmp3 = null == userId.sessionId || undefined === userId.sessionId || userId.sessionId === tmp2;
    const tmp5 = null == userId.sessionId || undefined === userId.sessionId || userId.sessionId === tmp2;
  }
  return tmp3;
};
