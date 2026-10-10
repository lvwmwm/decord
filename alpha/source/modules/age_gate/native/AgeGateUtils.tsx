// Module ID: 9460
// Function ID: 9461
// Name: age_gate/AgeGateUtils
// Dependencies: [2087, 4750, 1390, 1085, 1382, 6916, 2]
// Exports: shouldNSFWGateGuild

// Module 9460 (age_gate/AgeGateUtils)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp;
const AgeRestrictedContentSettingsUtils = tmp(6916);
({ GuildNSFWContentLevel: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/native/AgeGateUtils.tsx");

export const shouldNSFWGateGuild = function shouldNSFWGateGuild(guildId) {
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const guild = GuildStore.getGuild(guildId);
    const currentUser = UserStore.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        let nsfwAllowed = currentUser.nsfwAllowed;
        const nsfwLevel = guild.nsfwLevel;
        const AGE_RESTRICTED = hasOwnProperty.AGE_RESTRICTED;
        const nsfwLevel2 = guild.nsfwLevel;
        const EXPLICIT = hasOwnProperty.EXPLICIT;
        const tmp9 = PermissionStore.can(metroRequire.ADMINISTRATOR, guild) || PermissionStore.can(metroRequire.MANAGE_GUILD, guild) || PermissionStore.can(metroRequire.KICK_MEMBERS, guild) || PermissionStore.can(metroRequire.BAN_MEMBERS, guild);
        if (nsfwAllowed) {
          const tmpResult = AgeRestrictedContentSettingsUtils;
          nsfwAllowed = tmpResult.getViewNsfwGuildsOrDefault();
        }
        let tmp11 = !tmp9;
        if (tmp11) {
          let tmp12 = nsfwLevel2 === EXPLICIT;
          if (!tmp12) {
            tmp12 = nsfwLevel === AGE_RESTRICTED && !nsfwAllowed;
          }
          tmp11 = tmp12;
        }
        return tmp11;
      }
    }
    return false;
  } else {
    return false;
  }
};
