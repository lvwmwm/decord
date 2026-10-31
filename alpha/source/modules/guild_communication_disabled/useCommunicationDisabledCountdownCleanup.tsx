// Module ID: 14020
// Function ID: 14021
// Name: useCommunicationDisabledCountdownCleanup
// Dependencies: [19, 7624, 14021, 2]
// Exports: useCommunicationDisabledCountdownCleanup

// Module 14020 (useCommunicationDisabledCountdownCleanup)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);
let result = size.fileFinishedImporting("modules/guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx");

export function useCommunicationDisabledCountdownCleanup(guildMember) {
  let communicationDisabledUntil;
  let parsed;
  let userId;
  importDefault = guildMember;
  let obj = guildMember;
  if (guildMember == null) {
    obj = {};
  }
  ({ communicationDisabledUntil, userId } = obj);
  const guildId = obj.guildId;
  const tmp = require("useCountdown");
  if (null != communicationDisabledUntil) {
    const _Date2 = Date;
    parsed = Date.parse(communicationDisabledUntil);
  } else {
    const tmp2 = globalThis;
    const _Date = Date;
    parsed = Date.now();
  }
  const tmpResult = tmp(parsed);
  const seconds = tmpResult.seconds;
  const ref = seconds(null);
  const items = [guildId, userId, seconds, communicationDisabledUntil, guildMember];
  guildId(() => {
    if (null != guildMember) {
      if (null != guildId) {
        if (null != userId) {
          const tmp5 = seconds <= 0 && null == ref.current;
          if (tmp5) {
            const _setTimeout = setTimeout;
            ref.current = setTimeout(() => {
              const obj = guildMember(userId[2]);
              const result = obj.clearGuildMemberTimeout(guildId, closure_1_1);
            }, 1000);
          }
          return () => {
            if (null != ref.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(ref.current);
              ref.current = null;
            }
          };
        }
      }
    }
    clearTimeout(ref.current);
  }, items);
  return tmpResult;
}
