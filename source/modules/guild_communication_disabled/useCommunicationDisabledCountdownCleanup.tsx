// Module ID: 11484
// Function ID: 89388
// Name: useCommunicationDisabledCountdownCleanup
// Dependencies: []
// Exports: useCommunicationDisabledCountdownCleanup

// Module 11484 (useCommunicationDisabledCountdownCleanup)
const _module = require(dependencyMap[0]);
({ useEffect: closure_2, useRef: closure_3 } = _module);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx");

export const useCommunicationDisabledCountdownCleanup = function useCommunicationDisabledCountdownCleanup(guildMember) {
  let communicationDisabledUntil;
  let userId;
  const importDefault = guildMember;
  let obj = guildMember;
  if (null == guildMember) {
    obj = {};
  }
  ({ communicationDisabledUntil, userId } = obj);
  const dependencyMap = userId;
  const guildId = obj.guildId;
  if (null != communicationDisabledUntil) {
    const _Date2 = Date;
    let parsed = Date.parse(communicationDisabledUntil);
  } else {
    const _Date = Date;
    parsed = Date.now();
  }
  const tmpResult = importDefault(dependencyMap[1])(parsed);
  const seconds = tmpResult.seconds;
  let closure_4 = seconds(null);
  const items = [guildId, userId, seconds, communicationDisabledUntil, guildMember];
  guildId(() => {
    if (null != arg0) {
      if (null != guildId) {
        if (null != userId) {
          let tmp5 = seconds <= 0;
          if (tmp5) {
            tmp5 = null == ref.current;
          }
          if (tmp5) {
            const _setTimeout = setTimeout;
            ref.current = setTimeout(() => {
              const result = callback(closure_1[2]).clearGuildMemberTimeout(closure_2, closure_1);
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
};
