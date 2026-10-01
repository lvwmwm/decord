// Module ID: 12545
// Function ID: 12546
// Name: GuildInviteUtils
// Dependencies: [5, 19, 4467, 4754, 2108, 2067, 4469, 5750, 1372, 12546, 7155, 1074, 1241, 4800, 12547, 1981, 5829, 504, 4541, 1115, 7826, 9277, 9350, 2]
// Exports: sendGuildInvite, showGuildInviteActionSheet, useServerInviteRows

// Module 12545 (GuildInviteUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import fuzzysearchDefault from "fuzzysearch" /* 5829 */;
import Constants2 from "Constants" /* 7155 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 7826 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9277 */;
import GuildInviteSendStateStore from "GuildInviteSendStateStore" /* 12546 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4754 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c6, c7, defaultChannel, flattenedGuildIds, guild;

let closure_14;
let closure_15;
let obj = function _sendGuildInvite() {
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let closure_2;
    let obj7;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c5;
      try {
        let code;
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
            let closure_4 = tmp;
            code = undefined;
            c5 = 1;
            setSendState(closure_0, closure_1, constants.SENDING);
            const AccessibilityAnnouncer2 = require("AccessibilityAnnouncer").AccessibilityAnnouncer;
            const announce2 = AccessibilityAnnouncer2.announce;
            const intl2 = require("intl").intl;
            announce2(intl2.string(require("intl").t.kC3ZRG));
            defaultChannel = defaultChannel.getDefaultChannel(closure_1, true, constants2.CREATE_INSTANT_INVITE);
            const tmp41 = source;
            if (null == defaultChannel) {
              const _Error = Error;
              throw Error();
            } else {
              const obj4 = { max_uses: InstantInviteUtilsDefault.INVITE_OPTIONS_ONCE.value, max_age: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.value, unique: true };
              const createInvite = InstantInviteActionCreatorsDefault.createInvite;
              const id = defaultChannel.id;
              c6 = 2;
              c7 = 1;
              const obj5 = { value: createInvite(id, obj4, tmp41), done: false };
              return obj5;
            }
          }
        } else {
          if (1 === c6) {
            c5 = 0;
            closure_132_12(closure_0, closure_1, closure_132_13.ERROR);
            let AccessibilityAnnouncer = closure_132_0(closure_132_2[18]).AccessibilityAnnouncer;
            let announce = AccessibilityAnnouncer.announce;
            let intl = closure_132_0(closure_132_2[19]).intl;
            const announceResult = announce(intl.string(closure_132_0(closure_132_2[19]).t.fEptJP));
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            code = value;
            const obj6 = { inviteKey: code.code, type: closure_132_0(closure_132_2[22]).InvitePropertiesType.USER, user: closure_132_11.getUser(closure_0), location: source, inviteAnalyticsMetadata: obj7 };
            const enqueue = closure_132_1(closure_132_2[22]).enqueue;
            const tmp30 = closure_132_1(closure_132_2[22]);
            obj7 = { source };
            enqueue(obj6, () => {
              closure_2_12(closure_1_0, closure_1_1, constants.SENT);
              const AccessibilityAnnouncer = closure_0(closure_2[18]).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = closure_0(closure_2[19]).intl;
              announce(intl.string(closure_0(closure_2[19]).t.PuLLzP));
            });
            c5 = 0;
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp19) {
        if (0 === c5) {
          c7 = 3;
          throw tmp19;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const setSendState = GuildInviteSendStateStore.setSendState;
const InviteSendStates = Constants2.InviteSendStates;
({ Permissions: closure_14, AnalyticEvents: closure_15 } = Constants);
const result = size.fileFinishedImporting("modules/instant_invite/native/GuildInviteUtils.tsx");

export const showGuildInviteActionSheet = function showGuildInviteActionSheet(id2, newestAnalyticsLocation) {
  obj = AnalyticsUtilsDefault;
  const obj2 = { type: "Invite to Guilds", source: newestAnalyticsLocation };
  obj.track(constants2.OPEN_POPOUT, obj2);
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj3 = { recipientId: id2, source: newestAnalyticsLocation };
  const tmp3 = asyncRequire(12547, dependencyMap.paths);
  openLazy(tmp3, "invite-to-guilds-" + id2, obj3);
};
export const useServerInviteRows = function useServerInviteRows(id, query) {
  let memberCounts;
  let stateFromStoresArray;
  _require = id;
  let closure_1 = query;
  obj = require("get initialized");
  let items = [SortedGuildStore, GuildStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
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
  return react.useMemo(() => {
    let closure_0;
    let memberCounts2;
    if (null == memberCounts2) {
      const items = [[], []];
      return items;
    } else {
      memberCounts2 = memberCounts.getMemberCounts();
      const items1 = [];
      const items2 = [];
      const item = items2.forEach((vanityURLCode) => {
        let num;
        const canResult = PermissionStore.can(constants.CREATE_INSTANT_INVITE, vanityURLCode) || null != vanityURLCode.vanityURLCode;
        if (canResult) {
          let tmp7Result = null == query;
          const str = vanityURLCode.name;
          const str2 = query;
          if (!tmp7Result) {
            const tmp7 = fuzzysearchDefault;
            const formatted = str2.toLowerCase();
            tmp7Result = tmp7(formatted, str.toLowerCase());
          }
          if (tmp7Result) {
            if (!GuildMemberStore.isMember(vanityURLCode.id, closure_0)) {
              obj = { guild: vanityURLCode, memberCount: num };
              num = closure_0[vanityURLCode.id];
              if (num == null) {
                num = 0;
              }
              const ownerId = vanityURLCode.ownerId;
              const currentUser = UserStore.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              if (ownerId === id) {
                items1.push(obj);
              } else {
                items2.push(obj);
              }
            }
          }
        }
      });
      const items3 = [items1, items2];
      return items3;
    }
  }, items1);
};
export const sendGuildInvite = function sendGuildInvite() {
  return obj(...arguments);
};
