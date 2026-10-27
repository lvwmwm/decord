// Module ID: 10017
// Function ID: 10018
// Name: handleNSFWGuildInvite
// Dependencies: [4842, 4846, 1084, 6666, 1381, 10018, 5645, 6667, 10019, 2]
// Exports: handleNSFWGuildInvite, isNSFWInvite

// Module 10017 (handleNSFWGuildInvite)
import Constants from "Constants" /* 1084 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import GuildRecord from "GuildRecord" /* 4842 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5645 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 6666 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 6667 */;
import NsfwGateGuildAlert from "NsfwGateGuildAlert" /* 10018 */;
import NsfwServerInviteWarningAlert from "NsfwServerInviteWarningAlert" /* 10019 */;
import GuildStore from "GuildStore" /* 4846 */;
import size from "module_2" /* 2 */;

const isGuildLurker = GuildRecord.isGuildLurker;
const GuildNSFWContentLevel = Constants.GuildNSFWContentLevel;
let closure_5 = TinyBroncoConstants.TINY_BRONCO_NSFW_SERVER_LOCATION;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
const set = new Set(items);
let result = size.fileFinishedImporting("modules/age_gate/native/handleNSFWGuildInvite.tsx");

export const isNSFWInvite = function isNSFWInvite(guild) {
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
};
export const handleNSFWGuildInvite = function handleNSFWGuildInvite(invite, arg1) {
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
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      let flag6 = !(null != guild1 && !isGuildLurker(guild1));
      const tmp10 = null != guild1 && !isGuildLurker(guild1);
      if (flag6) {
        const tmp6Result = NsfwGateGuildAlert;
        const result = tmp6Result.showNsfwGateGuildAlert(id);
        flag6 = true;
        if (onCancel != null) {
          onCancel();
          flag6 = true;
        }
      }
      return flag6;
    } else if (null != guild1) {
      return false;
    } else {
      const tmp6Result4 = RegionalFeatureConfigUtils;
      if (tmp6Result4.hasAgeGatedFeatures()) {
        const tmp6Result5 = TinyBroncoExperiment;
        if (tmp6Result5.isTinyBroncoEnabled(closure_5)) {
          c2 = false;
          const obj2 = {
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
          const tmp6Result6 = NsfwServerInviteWarningAlert;
          const result1 = tmp6Result6.showNsfwServerInviteWarningAlert(obj2);
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
};
