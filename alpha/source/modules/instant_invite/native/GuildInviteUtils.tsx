// Module ID: 12672
// Function ID: 12673
// Name: GuildInviteUtils
// Dependencies: [5, 19, 4467, 4754, 2108, 2067, 4469, 5750, 1372, 12673, 7155, 1074, 1241, 4800, 12674, 1981, 5829, 504, 4541, 1115, 7826, 9277, 9350, 2]
// Exports: sendGuildInvite, showGuildInviteActionSheet, useServerInviteRows

// Module 12672 (GuildInviteUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import fuzzysearchDefault from "fuzzysearch" /* 5829 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 7826 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9277 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4754 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
let closure_16 = async function _sendGuildInvite(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = dependencyMap;
          closure_131_3 = undefined;
          c5 = 1;
          setSendState(closure_0, closure_1, constants.SENDING);
          const AccessibilityAnnouncer2 = require("AccessibilityAnnouncer").AccessibilityAnnouncer;
          const intl2 = require("util").intl;
          AccessibilityAnnouncer2.announce(intl2.string(require("util").t.kC3ZRG));
          defaultChannel = defaultChannel.getDefaultChannel(closure_1, true, constants2.CREATE_INSTANT_INVITE);
          if (null == defaultChannel) {
            const _Error = Error;
            throw Error();
          } else {
            const obj4 = { max_uses: InstantInviteUtilsDefault.INVITE_OPTIONS_ONCE.value, max_age: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.value, unique: true };
            c6 = 2;
            c7 = 1;
            const obj6 = { value: InstantInviteActionCreatorsDefault.createInvite(defaultChannel.id, obj4, tmp44), done: false };
            return obj6;
          }
          tmp44 = dependencyMap;
        }
      } else {
        if (1 === tmp7) {
          c5 = 0;
          closure_132_12(closure_131_0, closure_131_1, closure_132_13.ERROR);
          let AccessibilityAnnouncer = closure_132_0(closure_132_2[18]).AccessibilityAnnouncer;
          let intl = closure_132_0(closure_132_2[19]).intl;
          AccessibilityAnnouncer.announce(intl.string(closure_132_0(closure_132_2[19]).t.fEptJP));
          c7 = 3;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_131_3 = value;
          const obj7 = { inviteKey: closure_131_3.code, type: closure_132_0(closure_132_2[22]).InvitePropertiesType.USER, user: closure_132_11.getUser(closure_131_0), location: closure_131_2, inviteAnalyticsMetadata: null };
          const obj9 = { source: closure_131_2 };
          obj7.inviteAnalyticsMetadata = obj9;
          closure_132_1(closure_132_2[22]).enqueue(obj7, () => {
            closure_2_12(closure_1_0, closure_1_1, constants.SENT);
            const AccessibilityAnnouncer = closure_0(4541).AccessibilityAnnouncer;
            const intl = closure_0(1115).intl;
            AccessibilityAnnouncer.announce(intl.string(closure_0(1115).t.PuLLzP));
          });
          c5 = 0;
          const obj5 = closure_132_1(closure_132_2[22]);
        }
        c5 = 0;
        c7 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp22) {
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp22;
      } else {
        c6 = tmp;
      }
    }
  }
};
const setSendState = fn(12673).setSendState;
const InviteSendStates = fn(7155).InviteSendStates;
const Constants = fn(1074);
({ Permissions: closure_14, AnalyticEvents: closure_15 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/GuildInviteUtils.tsx");

export const showGuildInviteActionSheet = function showGuildInviteActionSheet(id, newestAnalyticsLocation) {
  AnalyticsUtilsDefault.track(constants2.OPEN_POPOUT, { type: "Invite to Guilds", source: newestAnalyticsLocation });
  const obj2 = { type: "Invite to Guilds", source: newestAnalyticsLocation };
  const obj3 = ActionSheetActionCreatorsDefault;
  obj3.openLazy(asyncRequireImpl(12674, dependencyMap.paths), "invite-to-guilds-" + id, { recipientId: id, source: newestAnalyticsLocation });
};
export const useServerInviteRows = function useServerInviteRows(id, query) {
  _require = id;
  closure_1 = query;
  let items = [SortedGuildStore, GuildStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const items = [];
    const item = flattenedGuildIds.forEach((item) => {
      guild = guild.getGuild(item);
      if (null != guild) {
        items.push(guild);
      }
    });
    return items;
  });
  let items1 = [stateFromStoresArray, query, id];
  return noop.useMemo(() => {
    if (null == memberCounts2) {
      const items = [[], []];
      return items;
    } else {
      memberCounts2 = memberCounts.getMemberCounts();
      const items1 = [];
      const items2 = [];
      const item = items2.forEach((vanityURLCode) => {
        let canResult = PermissionStore.can(constants.CREATE_INSTANT_INVITE, vanityURLCode);
        if (!canResult) {
          canResult = null != vanityURLCode.vanityURLCode;
        }
        if (canResult) {
          let tmp7Result = null == closure_1;
          if (!tmp7Result) {
            const formatted = str2.toLowerCase();
            tmp7Result = fuzzysearchDefault(formatted, str.toLowerCase());
          }
          if (tmp7Result) {
            if (!GuildMemberStore.isMember(vanityURLCode.id, closure_0)) {
              const obj = { guild: vanityURLCode, memberCount: null };
              let num = closure_0[vanityURLCode.id];
              if (num == null) {
                num = 0;
              }
              obj.memberCount = num;
              const currentUser = UserStore.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
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
          str2 = closure_1;
        }
      });
      const items3 = [items1, items2];
      return items3;
    }
  }, items1);
};
export const sendGuildInvite = function sendGuildInvite() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
