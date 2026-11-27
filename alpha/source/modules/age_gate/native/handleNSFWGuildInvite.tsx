// Module ID: 12160
// Function ID: 12161
// Name: handleNSFWGuildInvite
// Dependencies: [4910, 4914, 1387, 1071, 6836, 7570, 1379, 12161, 5705, 6837, 12162, 2]
// Exports: handleNSFWGuildInvite, isNSFWInvite

// Module 12160 (handleNSFWGuildInvite)
import Constants from "Constants" /* 1071 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import GuildRecord from "GuildRecord" /* 4910 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5705 */;
import AgeNoticeConstants from "AgeNoticeConstants" /* 6836 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6837 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 7570 */;
import NsfwGateGuildAlert from "NsfwGateGuildAlert" /* 12161 */;
import NsfwServerInviteWarningAlert from "NsfwServerInviteWarningAlert" /* 12162 */;
import GuildStore from "GuildStore" /* 4914 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

const isGuildLurker = GuildRecord.isGuildLurker;
const GuildNSFWContentLevel = Constants.GuildNSFWContentLevel;
let closure_6 = AgeNoticeConstants.AGE_NOTICE_NSFW_SERVER_LOCATION;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
const set = new Set(items);
let result = size.fileFinishedImporting("modules/age_gate/native/handleNSFWGuildInvite.tsx");

export function isNSFWInvite(guild) {
  let nsfw_level;
  const has = set.has;
  if (guild != null) {
    guild = guild.guild;
    if (guild != null) {
      nsfw_level = guild.nsfw_level;
    }
  }
  if (nsfw_level == null) {
    nsfw_level = GuildNSFWContentLevel.DEFAULT;
  }
  return has(nsfw_level);
}
export function handleNSFWGuildInvite(invite, arg1) {
  let closure_129_0;
  let id;
  let onCancel;
  ({ onConfirm: closure_129_0, onCancel } = arg1);
  let c2;
  if (invite != null) {
    const guild = invite.guild;
    if (guild != null) {
      id = guild.id;
    }
  }
  let nsfw_level;
  let tmp = set;
  const has = set.has;
  if (invite != null) {
    const guild2 = invite.guild;
    if (guild2 != null) {
      nsfw_level = guild2.nsfw_level;
    }
  }
  if (nsfw_level == null) {
    nsfw_level = GuildNSFWContentLevel.DEFAULT;
  }
  if (has(nsfw_level)) {
    const guild1 = GuildStore.getGuild(id);
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    let viewNsfwGuildsOrDefault = true === nsfwAllowed;
    if (viewNsfwGuildsOrDefault) {
      const obj = AgeRestrictedContentSettingsUtils;
      viewNsfwGuildsOrDefault = obj.getViewNsfwGuildsOrDefault();
    }
    const obj2 = PlatformUtils;
    if (obj2.isIOS()) {
      if (!viewNsfwGuildsOrDefault) {
        let flag3 = !(null != guild1 && !isGuildLurker(guild1));
        const tmp14 = null != guild1 && !isGuildLurker(guild1);
        if (flag3) {
          const tmp12Result = NsfwGateGuildAlert;
          const result = tmp12Result.showNsfwGateGuildAlert(id);
          flag3 = true;
          if (onCancel != null) {
            onCancel();
            flag3 = true;
          }
        }
        return flag3;
      }
    }
    if (null != guild1) {
      return false;
    } else {
      const tmp12Result4 = RegionalFeatureConfigUtils;
      if (tmp12Result4.hasAgeGatedFeatures()) {
        const tmp12Result5 = AgeNoticeExperiment;
        if (tmp12Result5.isAgeNoticeEnabled(closure_6)) {
          c2 = false;
          const obj3 = {
            onConfirm() {
                      c2 = true;
                      closure_1_0();
                    },
            onDismiss() {
                      const tmp = c2;
                      if (!tmp) {
                        if (onCancel != null) {
                          tmp2();
                        }
                      }
                    }
          };
          const tmp12Result6 = NsfwServerInviteWarningAlert;
          const result1 = tmp12Result6.showNsfwServerInviteWarningAlert(obj3);
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}
