// Module ID: 12288
// Function ID: 12289
// Name: AutomodQuarantineUtils
// Dependencies: [19, 9305, 502, 4706, 4665, 4726, 4827, 1071, 4712, 1081, 563, 4732, 1112, 9306, 9307, 8074, 2]
// Exports: useCurrentUserHasAutomodQuarantinedProfile, useGuildAutomodProfileQuarantineErrors, useOpenFixQuarantinedProfileModal

// Module 12288 (AutomodQuarantineUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import intl4 from "intl" /* 1112 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4712 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4732 */;
import openUserSettings2 from "openUserSettings" /* 8074 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9307 */;
import react from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9305 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 4706 */;
import GuildStore from "GuildStore" /* 4665 */;
import PermissionStore from "PermissionStore" /* 4726 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4827 */;
import Constants from "Constants" /* 1071 */;
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
    const obj = { nick: "Array", bio: "analyticsLocations" };
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
              const intl2 = tmp8(1112).intl;
              const formatToPlainString = intl2.formatToPlainString;
              let str = guild.name;
              const WBUh3O = tmp8(1112).t.WBUh3O;
              if (str == null) {
                str = "";
              }
              const obj2 = { guildName: str };
              const items = [formatToPlainString(WBUh3O, obj2)];
              items1 = items;
            } else {
              const intl = tmp8(1112).intl;
              items1 = [intl.string(intl4.t.EPZCrM)];
            }
            obj.nick = items1;
          }
          if (automodQuarantinedProfileFlags.has(tmp11.AUTOMOD_QUARANTINED_BIO)) {
            const intl3 = tmp8(1112).intl;
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
