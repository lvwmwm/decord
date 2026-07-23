// Module ID: 11495
// Function ID: 89463
// Name: useCommunicationDisabledCountdownCleanup
// Dependencies: [31, 6678, 11496, 2]
// Exports: useCommunicationDisabledCountdownCleanup

// Module 11495 (useCommunicationDisabledCountdownCleanup)
import result from "result";

let closure_2;
let closure_3;
({ useEffect: closure_2, useRef: closure_3 } = result);
result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx");

export const useCommunicationDisabledCountdownCleanup = function useCommunicationDisabledCountdownCleanup(guildMember) {
  let communicationDisabledUntil;
  let userId;
  const importDefault = guildMember;
  let obj = guildMember;
  if (null == guildMember) {
    obj = {};
  }
  ({ communicationDisabledUntil, userId } = obj);
  const guildId = obj.guildId;
  if (null != communicationDisabledUntil) {
    const _Date2 = Date;
    let parsed = Date.parse(communicationDisabledUntil);
  } else {
    const _Date = Date;
    parsed = Date.now();
  }
  const tmpResult = importDefault(userId[1])(parsed);
  const seconds = tmpResult.seconds;
  let closure_4 = seconds(null);
  const items = [guildId, userId, seconds, communicationDisabledUntil, guildMember];
  guildId(() => {
    if (null != closure_0) {
      if (null != guildId) {
        if (null != userId) {
          let tmp5 = seconds <= 0;
          if (tmp5) {
            tmp5 = null == ref.current;
          }
          if (tmp5) {
            const _setTimeout = setTimeout;
            ref.current = setTimeout(() => {
              const result = callback(userId[2]).clearGuildMemberTimeout(outer1_2, outer1_1);
            }, 1000);
          }
          return () => {
            if (null != outer1_4.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(outer1_4.current);
              outer1_4.current = null;
            }
          };
        }
      }
    }
    clearTimeout(ref.current);
  }, items);
  return tmpResult;
};
