// Module ID: 10417
// Function ID: 10418
// Name: useReactionPermissions
// Dependencies: [32, 4710, 2124, 5888, 4709, 1085, 558, 576, 504, 4715, 7976, 6965, 10418, 2]

// Module 10417 (useReactionPermissions)
import Constants from "Constants" /* 1085 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import LurkingStore from "LurkingStore" /* 4710 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5888 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useReactionPermissions(guild_id) {
  let first;
  let items7;
  let stateFromStores;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp7;
  let tmp8;
  _require = guild_id;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(30);
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildVerificationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function h() {
      const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(tmp);
      return canChatInGuildResult;
    };
    const items1 = [guild_id];
    cResult[1] = guild_id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(stateFromStores[8]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [LurkingStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== guild_id) {
    const fn2 = function v() {
      const isLurkingResult = null != guild_id && LurkingStore.isLurking(tmp);
      return isLurkingResult;
    };
    const items3 = [guild_id];
    cResult[5] = guild_id;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp13 = items3;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult7 = tmp(stateFromStores[8]);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [GuildMemberStore];
    cResult[8] = items4;
    tmp15 = items4;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] !== guild_id) {
    class P {
      constructor() {
        const isCurrentUserGuestResult = null != guild_id && GuildMemberStore.isCurrentUserGuest(tmp);
        return isCurrentUserGuestResult;
      }
    }
    const items5 = [guild_id];
    cResult[9] = guild_id;
    cResult[10] = P;
    cResult[11] = items5;
    tmp18 = items5;
    tmp17 = P;
  } else {
    class P {
      constructor() {
        const isCurrentUserGuestResult = null != guild_id && GuildMemberStore.isCurrentUserGuest(tmp);
        return isCurrentUserGuestResult;
      }
    }
    tmp18 = cResult[11];
  }
  const tmpResult8 = tmp(stateFromStores[8]);
  const stateFromStores2 = tmpResult8.useStateFromStores(tmp15, tmp17, tmp18);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        const isCurrentUserGuestResult = null != guild_id && GuildMemberStore.isCurrentUserGuest(tmp);
        return isCurrentUserGuestResult;
      }
    }
    const items6 = [PermissionStore];
    cResult[12] = items6;
    tmp20 = items6;
  } else {
    class P {
      constructor() {
        const isCurrentUserGuestResult = null != guild_id && GuildMemberStore.isCurrentUserGuest(tmp);
        return isCurrentUserGuestResult;
      }
    }
  }
  if (cResult[13] === stateFromStores) {
    class P {
      constructor() {
        const isCurrentUserGuestResult = null != guild_id && GuildMemberStore.isCurrentUserGuest(tmp);
        return isCurrentUserGuestResult;
      }
    }
    const tmpResult9 = tmp(stateFromStores[8]);
    const stateFromStores3 = tmpResult9.useStateFromStores(tmp20, G, items7);
    const tmpResult10 = tmp(stateFromStores[9]);
    const currentUserAutomodQuaratinedProfile = tmpResult10.useCurrentUserAutomodQuaratinedProfile(guild_id);
    const tmpResult11 = tmp(stateFromStores[10]);
    const tmp24 = _slicedToArray(tmpResult11.useCurrentUserCommunicationDisabled(guild_id), 2)[1];
    const tmpResult12 = tmp(stateFromStores[11]);
    const isActiveChannelOrUnarchivableThread = tmpResult12.useIsActiveChannelOrUnarchivableThread(guild_id);
    if (null == guild_id) {
      let tmp29;
      class P {
        constructor() {
          const isCurrentUserGuestResult = null != guild_id && GuildMemberStore.isCurrentUserGuest(tmp);
          return isCurrentUserGuestResult;
        }
      }
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            const isCurrentUserGuestResult = null != guild_id && GuildMemberStore.isCurrentUserGuest(tmp);
            return isCurrentUserGuestResult;
          }
        }
        cResult[17] = tmp30;
        tmp29 = tmp30;
      } else {
        class P {
          constructor() {
            const isCurrentUserGuestResult = null != guild_id && GuildMemberStore.isCurrentUserGuest(tmp);
            return isCurrentUserGuestResult;
          }
        }
      }
      return tmp29;
    } else {
      class P {
        constructor() {
          const isCurrentUserGuestResult = null != guild_id && GuildMemberStore.isCurrentUserGuest(tmp);
          return isCurrentUserGuestResult;
        }
      }
      const obj2 = { channel: guild_id, canChat: stateFromStores, renderReactions: true, canAddNewReactions: stateFromStores3, isLurking: stateFromStores1, communicationDisabled: tmp24, isActiveChannelOrUnarchivableThread, isAutomodQuarantined: currentUserAutomodQuaratinedProfile };
      cResult[18] = stateFromStores3;
      cResult[19] = stateFromStores;
      cResult[20] = guild_id;
      cResult[21] = tmp24;
      cResult[22] = isActiveChannelOrUnarchivableThread;
      cResult[23] = currentUserAutomodQuaratinedProfile;
      cResult[24] = stateFromStores1;
      cResult[25] = guild_id(stateFromStores[12])(obj2);
      const tmp28 = guild_id(stateFromStores[12])(obj2);
    }
  }
  class G {
    constructor() {
      const canResult = stateFromStores && PermissionStore.can(Permissions.ADD_REACTIONS, guild_id);
      return canResult;
    }
  }
  items7 = [stateFromStores, guild_id];
  cResult[13] = stateFromStores;
  cResult[14] = guild_id;
  cResult[15] = G;
  cResult[16] = items7;
}) : (function useReactionPermissions(guild_id) {
  let obj7;
  let stateFromStores;
  _require = guild_id;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  const items = [GuildVerificationStore];
  const items1 = [guild_id];
  const obj = require("get initialized");
  const tmp2 = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => {
    const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(tmp);
    return canChatInGuildResult;
  }, items1);
  const items2 = [LurkingStore];
  const items3 = [guild_id];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const isLurkingResult = null != guild_id && LurkingStore.isLurking(tmp);
    return isLurkingResult;
  }, items3);
  const items4 = [GuildMemberStore];
  const items5 = [guild_id];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items4, () => {
    const isCurrentUserGuestResult = null != guild_id && GuildMemberStore.isCurrentUserGuest(tmp);
    return isCurrentUserGuestResult;
  }, items5);
  const items6 = [PermissionStore];
  const items7 = [stateFromStores, guild_id];
  const obj4 = require("get initialized");
  const stateFromStores3 = obj4.useStateFromStores(items6, () => {
    const canResult = stateFromStores && PermissionStore.can(Permissions.ADD_REACTIONS, guild_id);
    return canResult;
  }, items7);
  const obj5 = require("AutomodPermissionUtils");
  const currentUserAutomodQuaratinedProfile = obj5.useCurrentUserAutomodQuaratinedProfile(guild_id);
  const obj6 = require("useUserCommunicationDisabled");
  const tmp8 = _slicedToArray(obj6.useCurrentUserCommunicationDisabled(guild_id), 2)[1];
  require("ThreadHooks");
  if (null == guild_id) {
    obj7 = { disableReactionReads: true, disableReactionCreates: true, disableReactionUpdates: true, isLurking: false, isGuest: false, isPendingMember: false };
  } else {
    obj7 = { isLurking: stateFromStores1, isGuest: stateFromStores2, isPendingMember: false };
    const obj8 = { channel: guild_id, canChat: stateFromStores, renderReactions: true, canAddNewReactions: stateFromStores3, isLurking: stateFromStores1, communicationDisabled: tmp8, isActiveChannelOrUnarchivableThread: tmp10, isAutomodQuarantined: currentUserAutomodQuaratinedProfile };
    const merged = Object.assign(guild_id(tmp2[12])(obj8));
  }
  return obj7;
});
const result = size.fileFinishedImporting("modules/messages/useReactionPermissions.tsx");

export default tmp2;
