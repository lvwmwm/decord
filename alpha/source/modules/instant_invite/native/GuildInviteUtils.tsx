// Module ID: 14771
// Function ID: 14772
// Name: GuildInviteUtils
// Dependencies: [5, 19, 4939, 5237, 4921, 4880, 4941, 6766, 1384, 14772, 7872, 1072, 1253, 5253, 14773, 1995, 6893, 504, 5018, 1114, 8937, 9101, 9181, 2]
// Exports: sendGuildInvite, showGuildInviteActionSheet, useServerInviteRows

// Module 14771 (GuildInviteUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import fuzzysearchDefault from "fuzzysearch" /* 6893 */;
import Constants2 from "Constants" /* 7872 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8937 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9101 */;
import GuildInviteSendStateStore from "GuildInviteSendStateStore" /* 14772 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4939 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5237 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import SortedGuildStore from "SortedGuildStore" /* 6766 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
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

export function showGuildInviteActionSheet(id2, newestAnalyticsLocation) {
  obj = AnalyticsUtilsDefault;
  const obj2 = { type: "Invite to Guilds", source: newestAnalyticsLocation };
  obj.track(constants2.OPEN_POPOUT, obj2);
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj3 = { recipientId: id2, source: newestAnalyticsLocation };
  const tmp3 = asyncRequire(14773, dependencyMap.paths);
  openLazy(tmp3, "invite-to-guilds-" + id2, obj3);
}
export function useServerInviteRows(id, query) {
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
}
export function sendGuildInvite() {
  return obj(...arguments);
}
