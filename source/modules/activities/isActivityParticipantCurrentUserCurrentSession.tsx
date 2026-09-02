// Module ID: 13947
// Function ID: 13948
// Name: isActivityParticipantCurrentUserCurrentSession
// Dependencies: [1215, 2]
// Exports: isActivityParticipantCurrentUserCurrentSession

// Module 13947 (isActivityParticipantCurrentUserCurrentSession)
import closure_0 from "fetchFingerprint" /* 1215 */;

const result = require("set").fileFinishedImporting("modules/activities/isActivityParticipantCurrentUserCurrentSession.tsx");

export const isActivityParticipantCurrentUserCurrentSession = function isActivityParticipantCurrentUserCurrentSession(userId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = closure_0;
  }
  const id = obj.getId();
  let tmp3 = userId.userId === id;
  if (tmp3) {
    tmp3 = null == userId.sessionId || undefined === userId.sessionId || userId.sessionId === tmp2;
    const tmp5 = null == userId.sessionId || undefined === userId.sessionId || userId.sessionId === tmp2;
  }
  return tmp3;
};
