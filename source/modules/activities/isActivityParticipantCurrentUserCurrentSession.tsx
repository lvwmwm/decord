// Module ID: 13044
// Function ID: 100853
// Name: isActivityParticipantCurrentUserCurrentSession
// Dependencies: [1194, 2]
// Exports: isActivityParticipantCurrentUserCurrentSession

// Module 13044 (isActivityParticipantCurrentUserCurrentSession)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/activities/isActivityParticipantCurrentUserCurrentSession.tsx");

export const isActivityParticipantCurrentUserCurrentSession = function isActivityParticipantCurrentUserCurrentSession(userId) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = _isNativeReflectConstruct;
  }
  const id = obj.getId();
  let tmp3 = userId.userId === id;
  if (tmp3) {
    tmp3 = null == userId.sessionId || undefined === userId.sessionId || userId.sessionId === tmp2;
    const tmp5 = null == userId.sessionId || undefined === userId.sessionId || userId.sessionId === tmp2;
  }
  return tmp3;
};
