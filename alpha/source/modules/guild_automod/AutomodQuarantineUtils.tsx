// Module ID: 13251
// Function ID: 13252
// Name: AutomodQuarantineUtils
// Dependencies: [19, 11422, 502, 4921, 4880, 4941, 5040, 1072, 4927, 1082, 563, 4947, 1114, 11484, 11485, 7557, 2]
// Exports: useCurrentUserHasAutomodQuarantinedProfile, useGuildAutomodProfileQuarantineErrors, useOpenFixQuarantinedProfileModal

// Module 13251 (AutomodQuarantineUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import intl4 from "intl" /* 1114 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4927 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4947 */;
import openUserSettings2 from "openUserSettings" /* 7557 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11485 */;
import react from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11422 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
({ Permissions: c9, UserSettingsSections: c10 } = Constants);
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let closure_12 = UserSettingsConstants.ProfileCustomizationSubsection;
const result = size.fileFinishedImporting("modules/guild_automod/AutomodQuarantineUtils.tsx");

export function useCurrentUserHasAutomodQuarantinedProfile(arg0) {
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
}
export function useGuildAutomodProfileQuarantineErrors(id) {
  _require = id;
  let obj = require("useStateFromStores");
  let items = [AuthenticationStore, GuildMemberStore, SelectedGuildStore, GuildStore];
  let items1 = [id];
  return obj.useStateFromStoresObject(items, () => {
    let guildId = id;
    const tmp = id;
    if (id == null) {
      guildId = SelectedGuildStore.getGuildId();
    }
    const obj = { nick: "color", bio: "Error" };
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
              const intl2 = tmp8(1114).intl;
              const formatToPlainString = intl2.formatToPlainString;
              let str = guild.name;
              const WBUh3O = tmp8(1114).t.WBUh3O;
              if (str == null) {
                str = "";
              }
              const obj2 = { guildName: str };
              const items = [formatToPlainString(WBUh3O, obj2)];
              items1 = items;
            } else {
              const intl = tmp8(1114).intl;
              items1 = [intl.string(intl4.t.EPZCrM)];
            }
            obj.nick = items1;
          }
          if (automodQuarantinedProfileFlags.has(tmp11.AUTOMOD_QUARANTINED_BIO)) {
            const intl3 = tmp8(1114).intl;
            const items2 = [intl3.string(intl4.t.dZh1vz)];
            obj.bio = items2;
          }
        }
        return obj;
      }
    }
    return obj;
  }, items1);
}
export function useOpenFixQuarantinedProfileModal(guildId) {
  guildId = guildId.guildId;
  const scrollPosition = guildId.scrollPosition;
  const analyticsLocations = guildId.analyticsLocations;
  let obj = guildId(scrollPosition[10]);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let obj2 = guildId(scrollPosition[10]);
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const canResult = null != stateFromStores && PermissionStore.can(constants.CHANGE_NICKNAME, tmp);
    return canResult;
  }, items3);
  let obj3 = guildId(scrollPosition[13]);
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
}
