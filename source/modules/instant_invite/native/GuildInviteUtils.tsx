// Module ID: 12137
// Function ID: 95067
// Name: _sendGuildInvite
// Dependencies: [5, 31, 1907, 4051, 1917, 1838, 3758, 4970, 1849, 12138, 6979, 653, 675, 4098, 12139, 1934, 5045, 566, 3843, 1212, 7460, 8483, 11745, 2]
// Exports: sendGuildInvite, showGuildInviteActionSheet, useServerInviteRows

// Module 12137 (_sendGuildInvite)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { setSendState } from "setSendState";
import { InviteSendStates } from "InviteSendStates";
import ME from "ME";

let closure_14;
let closure_15;
const require = arg1;
function _sendGuildInvite() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ Permissions: closure_14, AnalyticEvents: closure_15 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/instant_invite/native/GuildInviteUtils.tsx");

export const showGuildInviteActionSheet = function showGuildInviteActionSheet(id, newestAnalyticsLocation) {
  let obj = importDefault(675);
  obj = { type: "Invite to Guilds", source: newestAnalyticsLocation };
  obj.track(constants.OPEN_POPOUT, obj);
  const obj3 = importDefault(4098);
  obj = { recipientId: id, source: newestAnalyticsLocation };
  obj3.openLazy(require(1934) /* maybeLoadBundle */(12139, dependencyMap.paths), "invite-to-guilds-" + id, obj);
};
export const useServerInviteRows = function useServerInviteRows(id, query) {
  const _require = id;
  let closure_1 = query;
  let items = [closure_10, closure_8];
  stateFromStoresArray = _require(stateFromStoresArray[17]).useStateFromStoresArray(items, () => {
    const flattenedGuildIds = outer1_10.getFlattenedGuildIds();
    const items = [];
    const item = flattenedGuildIds.forEach((guildId) => {
      const guild = outer2_8.getGuild(guildId);
      if (null != guild) {
        items.push(guild);
      }
    });
    return items;
  });
  let items1 = [stateFromStoresArray, query, id];
  return React.useMemo(() => {
    if (null == memberCounts) {
      const items = [[], []];
      return items;
    } else {
      memberCounts = outer1_6.getMemberCounts();
      const items1 = [];
      const items2 = [];
      const item = items2.forEach((vanityURLCode) => {
        let canResult = outer2_9.can(outer2_14.CREATE_INSTANT_INVITE, vanityURLCode);
        if (!canResult) {
          canResult = null != vanityURLCode.vanityURLCode;
        }
        if (canResult) {
          let tmp7Result = null == items1;
          if (!tmp7Result) {
            const formatted = str2.toLowerCase();
            tmp7Result = items1(stateFromStoresArray[16])(formatted, str.toLowerCase());
            const tmp7 = items1(stateFromStoresArray[16]);
          }
          if (tmp7Result) {
            if (!outer2_7.isMember(vanityURLCode.id, table)) {
              const obj = { guild: vanityURLCode };
              let num2 = 0;
              if (null != table[vanityURLCode.id]) {
                num2 = tmp12;
              }
              obj.memberCount = num2;
              const currentUser = outer2_11.getCurrentUser();
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
          str = vanityURLCode.name;
          str2 = items1;
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
