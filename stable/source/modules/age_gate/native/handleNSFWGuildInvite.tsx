// Module ID: 9196
// Function ID: 9197
// Name: handleNSFWGuildInvite
// Dependencies: [2073, 1086, 9197, 1370, 5040, 9198, 1987, 5736, 9201, 9202, 2]
// Exports: handleNSFWGuildInvite, isNSFWInvite

// Module 9196 (handleNSFWGuildInvite)
import Constants from "Constants" /* 1086 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5736 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 9197 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 9201 */;
import NsfwServerInviteWarningAlert from "NsfwServerInviteWarningAlert" /* 9202 */;
import GuildStore from "GuildStore" /* 2073 */;
import size from "module_2" /* 2 */;

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
    if (null == GuildStore.getGuild(id)) {
      const obj7 = PlatformUtils;
      const tmp11 = dependencyMap;
      if (obj7.isIOS()) {
        const obj = { guildId: id };
        const obj5 = ModalActionCreatorsDefault;
        obj5.pushLazy(asyncRequire(9198, tmp11.paths), obj);
        if (onCancel != null) {
          onCancel();
        }
        return true;
      } else {
        const tmp10Result = RegionalFeatureConfigUtils;
        if (tmp10Result.hasAgeGatedFeatures()) {
          const tmp10Result3 = TinyBroncoExperiment;
          if (tmp10Result3.isTinyBroncoEnabled(closure_5)) {
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
            const tmp10Result4 = NsfwServerInviteWarningAlert;
            const result = tmp10Result4.showNsfwServerInviteWarningAlert(obj2);
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  }
  return false;
};
