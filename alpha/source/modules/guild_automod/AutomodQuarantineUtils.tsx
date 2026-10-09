// Module ID: 11412
// Function ID: 11413
// Name: AutomodQuarantineUtils
// Dependencies: [19, 10543, 502, 2124, 2086, 4709, 4900, 1085, 4695, 1095, 558, 576, 4715, 573, 1126, 10607, 10608, 7087, 2]

// Module 11412 (AutomodQuarantineUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import intl4 from "intl" /* 1126 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4695 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4715 */;
import openUserSettings2 from "openUserSettings" /* 7087 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 10608 */;
import react from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 10543 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
({ Permissions: c9, UserSettingsSections: c10 } = Constants);
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let closure_12 = UserSettingsConstants.ProfileCustomizationSubsection;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentUserHasAutomodQuarantinedProfile(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore, ];
    items[1] = GuildMemberStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      if (null == closure_0) {
        return false;
      } else {
        const id = AuthenticationStore.getId();
        const obj = AutomodPermissionUtils;
        return obj.hasAutomodQuarantinedProfile(GuildMemberStore.getMember(tmp, id));
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(573);
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : (function useCurrentUserHasAutomodQuarantinedProfile(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("useStateFromStores");
  const items = [AuthenticationStore, GuildMemberStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const id = AuthenticationStore.getId();
      const obj = AutomodPermissionUtils;
      return obj.hasAutomodQuarantinedProfile(GuildMemberStore.getMember(tmp, id));
    }
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildAutomodProfileQuarantineErrors(arg0) {
  let closure_0;
  let first;
  let tmp10;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthenticationStore, , , ];
    items[1] = GuildMemberStore;
    items[2] = SelectedGuildStore;
    const tmp8 = GuildStore;
    items[3] = GuildStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let guildId = closure_0;
      const tmp = closure_0;
      if (closure_0 == null) {
        guildId = SelectedGuildStore.getGuildId();
      }
      const obj = { nick: "Array", bio: "Set" };
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        if (null != guildId) {
          const member = GuildMemberStore.getMember(guildId, AuthenticationStore.getId());
          let flags;
          const getAutomodQuarantinedProfileFlags = AutomodPermissionUtils.getAutomodQuarantinedProfileFlags;
          AutomodPermissionUtils;
          if (member != null) {
            flags = member.flags;
          }
          const automodQuarantinedProfileFlags = getAutomodQuarantinedProfileFlags(flags);
          if (0 !== automodQuarantinedProfileFlags.size) {
            const tmp11 = GuildMemberFlags;
            if (automodQuarantinedProfileFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
              let items1;
              if (null == tmp) {
                const intl2 = tmp8(1126).intl;
                const formatToPlainString = intl2.formatToPlainString;
                let str = guild.name;
                const WBUh3O = tmp8(1126).t.WBUh3O;
                if (str == null) {
                  str = "";
                }
                const obj2 = { guildName: str };
                const items = [formatToPlainString(WBUh3O, obj2)];
                items1 = items;
              } else {
                const intl = tmp8(1126).intl;
                items1 = [intl.string(intl4.t.EPZCrM)];
              }
              obj.nick = items1;
            }
            if (automodQuarantinedProfileFlags.has(tmp11.AUTOMOD_QUARANTINED_BIO)) {
              const intl3 = tmp8(1126).intl;
              const items2 = [intl3.string(intl4.t.dZh1vz)];
              obj.bio = items2;
            }
          }
          return obj;
        }
      }
      return obj;
    };
    let items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(573);
  return tmpResult.useStateFromStoresObject(first, tmp9, tmp10);
}) : (function useGuildAutomodProfileQuarantineErrors(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("useStateFromStores");
  let items = [AuthenticationStore, GuildMemberStore, SelectedGuildStore, GuildStore];
  let items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    let guildId = closure_0;
    const tmp = closure_0;
    if (closure_0 == null) {
      guildId = SelectedGuildStore.getGuildId();
    }
    const obj = { nick: "Array", bio: "Set" };
    const guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      if (null != guildId) {
        const member = GuildMemberStore.getMember(guildId, AuthenticationStore.getId());
        let flags;
        const getAutomodQuarantinedProfileFlags = AutomodPermissionUtils.getAutomodQuarantinedProfileFlags;
        AutomodPermissionUtils;
        if (member != null) {
          flags = member.flags;
        }
        const automodQuarantinedProfileFlags = getAutomodQuarantinedProfileFlags(flags);
        if (0 !== automodQuarantinedProfileFlags.size) {
          const tmp11 = GuildMemberFlags;
          if (automodQuarantinedProfileFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
            let items1;
            if (null == tmp) {
              const intl2 = tmp8(1126).intl;
              const formatToPlainString = intl2.formatToPlainString;
              let str = guild.name;
              const WBUh3O = tmp8(1126).t.WBUh3O;
              if (str == null) {
                str = "";
              }
              const obj2 = { guildName: str };
              const items = [formatToPlainString(WBUh3O, obj2)];
              items1 = items;
            } else {
              const intl = tmp8(1126).intl;
              items1 = [intl.string(intl4.t.EPZCrM)];
            }
            obj.nick = items1;
          }
          if (automodQuarantinedProfileFlags.has(tmp11.AUTOMOD_QUARANTINED_BIO)) {
            const intl3 = tmp8(1126).intl;
            const items2 = [intl3.string(intl4.t.dZh1vz)];
            obj.bio = items2;
          }
        }
        return obj;
      }
    }
    return obj;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOpenFixQuarantinedProfileModal(guildId) {
  let first;
  let scrollPosition;
  let tmp11;
  let tmp12;
  let tmp6;
  let tmp7;
  let tmp9;
  const tmp = guildId;
  let obj = guildId(scrollPosition[11]);
  const cResult = obj.c(17);
  guildId = guildId.guildId;
  scrollPosition = guildId.scrollPosition;
  const analyticsLocations = guildId.analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function u() {
      return GuildStore.getGuild(guildId);
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(scrollPosition[13]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    class O {
      constructor() {
        const canResult = null != stateFromStores && PermissionStore.can(constants.CHANGE_NICKNAME, tmp);
        return canResult;
      }
    }
    const items3 = [stateFromStores];
    cResult[5] = stateFromStores;
    cResult[6] = O;
    cResult[7] = items3;
    tmp12 = items3;
    tmp11 = O;
  } else {
    class O {
      constructor() {
        const canResult = null != stateFromStores && PermissionStore.can(constants.CHANGE_NICKNAME, tmp);
        return canResult;
      }
    }
    tmp12 = cResult[7];
  }
  const tmpResult3 = tmp(scrollPosition[13]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp11, tmp12);
  const tmpResult4 = tmp(scrollPosition[15]);
  const isEligibleForUserProfileWYSIWYGEditing = tmpResult4.useIsEligibleForUserProfileWYSIWYGEditing("AutomodQuarantineUtils");
  if (cResult[8] === analyticsLocations) {
    class O {
      constructor() {
        const canResult = null != stateFromStores && PermissionStore.can(constants.CHANGE_NICKNAME, tmp);
        return canResult;
      }
    }
  }
  class N {
    constructor() {
      if (null != stateFromStores) {
        let USER_PROFILE;
        const PROFILE_CUSTOMIZATION = constants2.PROFILE_CUSTOMIZATION;
        if (stateFromStores1) {
          const obj = GuildIdentityActionCreators;
          const guildIdentitySettings = obj.initGuildIdentitySettings(tmp.id);
          USER_PROFILE = tmp13;
        } else {
          USER_PROFILE = tmp12.USER_PROFILE;
        }
        const obj2 = { subsection: USER_PROFILE, scrollPosition };
        const openUserSettings = openUserSettings2.openUserSettings;
        ProfileCustomizationNavigationStore.setState(obj2);
        const obj3 = { screen: PROFILE_CUSTOMIZATION };
        openUserSettings(obj3);
      }
    }
  }
  cResult[8] = analyticsLocations;
  cResult[9] = stateFromStores1;
  cResult[10] = stateFromStores;
  cResult[11] = isEligibleForUserProfileWYSIWYGEditing;
  cResult[12] = scrollPosition;
  cResult[13] = N;
}) : (function useOpenFixQuarantinedProfileModal(guildId) {
  guildId = guildId.guildId;
  const scrollPosition = guildId.scrollPosition;
  const analyticsLocations = guildId.analyticsLocations;
  let obj = guildId(scrollPosition[13]);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let obj2 = guildId(scrollPosition[13]);
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const canResult = null != stateFromStores && PermissionStore.can(constants.CHANGE_NICKNAME, tmp);
    return canResult;
  }, items3);
  let obj3 = guildId(scrollPosition[15]);
  const items4 = [stateFromStores1, scrollPosition, analyticsLocations, stateFromStores, obj3.useIsEligibleForUserProfileWYSIWYGEditing("AutomodQuarantineUtils")];
  const items5 = [
    stateFromStores.useCallback(() => {
      if (null != stateFromStores) {
        let USER_PROFILE;
        const PROFILE_CUSTOMIZATION = constants2.PROFILE_CUSTOMIZATION;
        if (stateFromStores1) {
          const obj = GuildIdentityActionCreators;
          const guildIdentitySettings = obj.initGuildIdentitySettings(tmp.id);
          USER_PROFILE = tmp13;
        } else {
          USER_PROFILE = tmp12.USER_PROFILE;
        }
        const obj2 = { subsection: USER_PROFILE, scrollPosition };
        const openUserSettings = openUserSettings2.openUserSettings;
        ProfileCustomizationNavigationStore.setState(obj2);
        const obj3 = { screen: PROFILE_CUSTOMIZATION };
        openUserSettings(obj3);
      }
    }, items4),
    stateFromStores1
  ];
  return items5;
});
const result = size.fileFinishedImporting("modules/guild_automod/AutomodQuarantineUtils.tsx");

export const useCurrentUserHasAutomodQuarantinedProfile = tmp3;
export const useGuildAutomodProfileQuarantineErrors = tmp4;
export const useOpenFixQuarantinedProfileModal = tmp5;
