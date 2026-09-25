// Module ID: 9219
// Function ID: 9220
// Name: handleNSFWGuildInvite
// Dependencies: [2066, 1074, 9220, 1364, 5032, 9221, 1980, 5730, 9224, 9225, 2]
// Exports: handleNSFWGuildInvite, isNSFWInvite

// Module 9219 (handleNSFWGuildInvite)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import GuildStore from "GuildStore" /* 2066 */;

const require = globalThis.__r;

require = fn;
const GuildNSFWContentLevel = fn(1074).GuildNSFWContentLevel;
let closure_5 = fn(9220).TINY_BRONCO_NSFW_SERVER_LOCATION;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
const set = new Set(items);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_gate/native/handleNSFWGuildInvite.tsx");

export const isNSFWInvite = function isNSFWInvite(guild) {
  let nsfw_level;
  if (guild != null) {
    guild = guild.guild;
    if (guild != null) {
      nsfw_level = guild.nsfw_level;
    }
  }
  if (nsfw_level == null) {
    nsfw_level = GuildNSFWContentLevel.DEFAULT;
  }
  return set.has(nsfw_level);
};
export const handleNSFWGuildInvite = function handleNSFWGuildInvite(invite, arg1) {
  ({ onConfirm: require, onCancel } = arg1);
  c2 = undefined;
  if (invite != null) {
    const guild = invite.guild;
    if (guild != null) {
      const id = guild.id;
    }
  }
  let nsfw_level;
  if (invite != null) {
    const guild2 = invite.guild;
    if (guild2 != null) {
      nsfw_level = guild2.nsfw_level;
    }
  }
  if (nsfw_level == null) {
    nsfw_level = GuildNSFWContentLevel.DEFAULT;
  }
  if (set.has(nsfw_level)) {
    if (null == GuildStore.getGuild(id)) {
      if (obj7.isIOS()) {
        const obj = { guildId: id };
        ModalActionCreatorsDefault.pushLazy(tmp10(1980)(9221, tmp11.paths), obj);
        if (onCancel != null) {
          onCancel();
        }
        return true;
      } else {
        if (tmp10Result.hasAgeGatedFeatures()) {
          if (tmp10Result3.isTinyBroncoEnabled(closure_5)) {
            c2 = false;
            const obj2 = {
              onConfirm() {
                          c2 = true;
                          require();
                        },
              onDismiss() {
                          if (!c2) {
                            if (onCancel != null) {
                              tmp();
                            }
                          }
                        }
            };
            const result = tmp10(9225).showNsfwServerInviteWarningAlert(obj2);
            return true;
          } else {
            return false;
          }
          tmp10Result3 = tmp10(9224);
        } else {
          return false;
        }
        tmp10Result = tmp10(5730);
      }
      obj7 = PlatformUtils;
      tmp11 = dependencyMap;
    }
  }
  return false;
};
