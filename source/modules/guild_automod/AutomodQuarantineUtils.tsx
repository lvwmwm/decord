// Module ID: 11043
// Function ID: 85887
// Name: useCurrentUserHasAutomodQuarantinedProfile
// Dependencies: [31, 9815, 1194, 1917, 1838, 3758, 3947, 653, 3746, 662, 624, 3764, 1212, 9816, 9817, 5796, 2]
// Exports: useCurrentUserHasAutomodQuarantinedProfile, useGuildAutomodProfileQuarantineErrors, useOpenFixQuarantinedProfileModal

// Module 11043 (useCurrentUserHasAutomodQuarantinedProfile)
import result from "result";
import zustandStore from "zustandStore";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";
import { ProfileCustomizationSubsection as closure_12 } from "MAX_FAVORITES";

let closure_10;
let closure_9;
const require = arg1;
({ Permissions: closure_9, UserSettingsSections: closure_10 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_automod/AutomodQuarantineUtils.tsx");

export const useCurrentUserHasAutomodQuarantinedProfile = function useCurrentUserHasAutomodQuarantinedProfile(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, closure_5];
  const items1 = [arg0];
  return _require(624).useStateFromStores(items, () => {
    if (null == callback) {
      return false;
    } else {
      const id = outer1_4.getId();
      return callback(outer1_1[11]).hasAutomodQuarantinedProfile(outer1_5.getMember(callback, id));
    }
  }, items1);
};
export const useGuildAutomodProfileQuarantineErrors = function useGuildAutomodProfileQuarantineErrors(id) {
  const _require = id;
  let items = [_isNativeReflectConstruct, closure_5, closure_8, _createForOfIteratorHelperLoose];
  let items1 = [id];
  return _require(624).useStateFromStoresObject(items, () => {
    let obj = { nick: undefined, bio: undefined };
    let guildId = outer1_8.getGuildId();
    let str = null;
    if (null != id) {
      guildId = id;
    }
    let name = outer1_6.getGuild(guildId);
    if (str != name) {
      if (str != guildId) {
        const member = outer1_5.getMember(guildId, outer1_4.getId());
        let flags;
        if (str != member) {
          flags = member.flags;
        }
        const automodQuarantinedProfileFlags = id(outer1_1[11]).getAutomodQuarantinedProfileFlags(flags);
        if (0 === automodQuarantinedProfileFlags.size) {
          return obj;
        } else if (!automodQuarantinedProfileFlags.has(outer1_11.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
          if (automodQuarantinedProfileFlags.has(outer1_11.AUTOMOD_QUARANTINED_BIO)) {
            const intl3 = id(outer1_1[12]).intl;
            const items = [intl3.string(id(outer1_1[12]).t.dZh1vz)];
            obj.bio = items;
          }
          return obj;
        } else {
          if (str == id) {
            const intl2 = id(outer1_1[12]).intl;
            obj = {};
            name = name.name;
            str = "";
            if (tmp8) {
              str = name;
            }
            obj.guildName = str;
            const items1 = [intl2.formatToPlainString(id(outer1_1[12]).t.WBUh3O, obj)];
            let items2 = items1;
            tmp8 = str != name;
          } else {
            const intl = id(outer1_1[12]).intl;
            items2 = [intl.string(id(outer1_1[12]).t.EPZCrM)];
          }
          obj.nick = items2;
        }
        const obj4 = id(outer1_1[11]);
      }
    }
    return obj;
  }, items1);
};
export const useOpenFixQuarantinedProfileModal = function useOpenFixQuarantinedProfileModal(guildId) {
  guildId = guildId.guildId;
  const scrollPosition = guildId.scrollPosition;
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [guildId];
  const stateFromStores = guildId(scrollPosition[10]).useStateFromStores(items, () => outer1_6.getGuild(guildId), items1);
  let obj = guildId(scrollPosition[10]);
  const items2 = [closure_7];
  const items3 = [stateFromStores];
  const stateFromStores1 = guildId(scrollPosition[10]).useStateFromStores(items2, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = outer1_7.can(outer1_9.CHANGE_NICKNAME, stateFromStores);
    }
    return canResult;
  }, items3);
  const obj2 = guildId(scrollPosition[10]);
  const items4 = [stateFromStores1, scrollPosition, guildId.analyticsLocations, stateFromStores, guildId(scrollPosition[13]).useIsEligibleForUserProfileWYSIWYGEditing("AutomodQuarantineUtils")];
  const items5 = [
    stateFromStores.useCallback(() => {
      if (null != stateFromStores) {
        let openUserSettings = outer1_12.GUILD;
        if (stateFromStores1) {
          let obj = guildId(scrollPosition[14]);
          const guildIdentitySettings = obj.initGuildIdentitySettings(stateFromStores.id);
          let USER_PROFILE = openUserSettings;
        } else {
          USER_PROFILE = outer1_12.USER_PROFILE;
        }
        openUserSettings = guildId(scrollPosition[15]).openUserSettings;
        obj = { subsection: USER_PROFILE, scrollPosition };
        stateFromStores1.setState(obj);
        obj = { screen: outer1_10.PROFILE_CUSTOMIZATION };
        openUserSettings(obj);
      }
    }, items4),
    stateFromStores1
  ];
  return items5;
};
