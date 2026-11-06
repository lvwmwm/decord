// Module ID: 10110
// Function ID: 10111
// Name: age_gate/AgeGateUtils
// Dependencies: [5041, 5102, 1385, 1072, 1377, 7472, 2]
// Exports: shouldNSFWGateGuild

// Module 10110 (age_gate/AgeGateUtils)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import GuildStore from "GuildStore" /* 5041 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp;
const AgeRestrictedContentSettingsUtils = tmp(7472);
({ GuildNSFWContentLevel: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/native/AgeGateUtils.tsx");

export function shouldNSFWGateGuild(guildId) {
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
}
