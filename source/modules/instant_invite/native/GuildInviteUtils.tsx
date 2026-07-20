// Module ID: 12012
// Function ID: 92855
// Name: _sendGuildInvite
// Dependencies: []
// Exports: sendGuildInvite, showGuildInviteActionSheet, useServerInviteRows

// Module 12012 (_sendGuildInvite)
function _sendGuildInvite() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _sendGuildInvite = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const setSendState = arg1(dependencyMap[9]).setSendState;
const InviteSendStates = arg1(dependencyMap[10]).InviteSendStates;
({ Permissions: closure_14, AnalyticEvents: closure_15 } = arg1(dependencyMap[11]));
const tmp2 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/instant_invite/native/GuildInviteUtils.tsx");

export const showGuildInviteActionSheet = function showGuildInviteActionSheet(id, newestAnalyticsLocation) {
  let obj = importDefault(dependencyMap[12]);
  obj = { type: "Invite to Guilds", source: newestAnalyticsLocation };
  obj.track(constants.OPEN_POPOUT, obj);
  const obj3 = importDefault(dependencyMap[13]);
  obj = { recipientId: id, source: newestAnalyticsLocation };
  obj3.openLazy(newestAnalyticsLocation(dependencyMap[15])(dependencyMap[14], dependencyMap.paths), "invite-to-guilds-" + id, obj);
};
export const useServerInviteRows = function useServerInviteRows(id, query) {
  query = id;
  const importDefault = query;
  const items = [closure_10, closure_8];
  const stateFromStoresArray = query(dependencyMap[17]).useStateFromStoresArray(items, () => {
    const flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const items = [];
    const arg0 = items;
    const item = flattenedGuildIds.forEach((guildId) => {
      const guild = guild.getGuild(guildId);
      if (null != guild) {
        items.push(guild);
      }
    });
    return items;
  });
  const dependencyMap = stateFromStoresArray;
  const items1 = [stateFromStoresArray, query, id];
  return React.useMemo(() => {
    if (null == memberCounts2) {
      const items = [[], []];
      return items;
    } else {
      const memberCounts2 = memberCounts.getMemberCounts();
      const items1 = [];
      const arg1 = items1;
      const items2 = [];
      const stateFromStoresArray = items2;
      const item = stateFromStoresArray.forEach((vanityURLCode) => {
        let canResult = closure_9.can(constants.CREATE_INSTANT_INVITE, vanityURLCode);
        if (!canResult) {
          canResult = null != vanityURLCode.vanityURLCode;
        }
        if (canResult) {
          let tmp7Result = null == items1;
          if (!tmp7Result) {
            const formatted = str2.toLowerCase();
            tmp7Result = items1(items2[16])(formatted, str.toLowerCase());
            const tmp7 = items1(items2[16]);
          }
          if (tmp7Result) {
            if (!member.isMember(vanityURLCode.id, closure_0)) {
              const obj = { guild: vanityURLCode };
              let num2 = 0;
              if (null != closure_0[vanityURLCode.id]) {
                num2 = tmp12;
              }
              obj.memberCount = num2;
              const currentUser = currentUser.getCurrentUser();
              let id;
              if (null != currentUser) {
                id = currentUser.id;
              }
              if (vanityURLCode.ownerId === id) {
                items1.push(obj);
              } else {
                items2.push(obj);
              }
            }
          }
          const str = vanityURLCode.name;
          const str2 = items1;
        }
      });
      const items3 = [items1, items2];
      return items3;
    }
  }, items1);
};
export const sendGuildInvite = function sendGuildInvite(closure_0, id, closure_1) {
  return _sendGuildInvite(...arguments);
};
