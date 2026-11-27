// Module ID: 9586
// Function ID: 9587
// Name: age_gate/AgeGateUtils
// Dependencies: [4914, 4975, 1387, 1071, 1379, 7570, 2]
// Exports: shouldNSFWGateGuild

// Module 9586 (age_gate/AgeGateUtils)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import UserStore from "UserStore" /* 1387 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp;
const AgeRestrictedContentSettingsUtils = tmp(7570);
({ GuildNSFWContentLevel: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/native/AgeGateUtils.tsx");

export function shouldNSFWGateGuild(guildId) {
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const guild = GuildStore.getGuild(guildId);
    const currentUser = UserStore.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        let tmp11 = guild.nsfwLevel === hasOwnProperty.AGE_RESTRICTED || guild.nsfwLevel === tmp10.EXPLICIT;
        let nsfwAllowed = currentUser.nsfwAllowed;
        const tmp9 = PermissionStore.can(metroRequire.ADMINISTRATOR, guild) || PermissionStore.can(metroRequire.MANAGE_GUILD, guild) || PermissionStore.can(metroRequire.KICK_MEMBERS, guild) || PermissionStore.can(metroRequire.BAN_MEMBERS, guild);
        if (nsfwAllowed) {
          const tmpResult = AgeRestrictedContentSettingsUtils;
          nsfwAllowed = tmpResult.getViewNsfwGuildsOrDefault();
        }
        let tmp12 = !tmp9;
        if (tmp12) {
          if (tmp11) {
            tmp11 = !nsfwAllowed;
          }
          tmp12 = tmp11;
        }
        return tmp12;
      }
    }
    return false;
  } else {
    return false;
  }
}
