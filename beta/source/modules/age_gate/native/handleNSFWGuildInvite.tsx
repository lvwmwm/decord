// Module ID: 10037
// Function ID: 10038
// Name: handleNSFWGuildInvite
// Dependencies: [2067, 1078, 10038, 1368, 4993, 10039, 1984, 5674, 10042, 10043, 2]
// Exports: handleNSFWGuildInvite, isNSFWInvite

// Module 10037 (handleNSFWGuildInvite)
import PlatformUtils from "PlatformUtils" /* 1368 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import GuildStore from "GuildStore" /* 2067 */;

const require = globalThis.__r;

require = fn;
const GuildNSFWContentLevel = fn(1078).GuildNSFWContentLevel;
let closure_5 = fn(10038).TINY_BRONCO_NSFW_SERVER_LOCATION;
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
    guild = invite.guild;
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
        ModalActionCreatorsDefault.pushLazy(tmp10(1984)(10039, tmp11.paths), obj);
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
            const result = tmp10(10043).showNsfwServerInviteWarningAlert(obj2);
            return true;
          } else {
            return false;
          }
          tmp10Result3 = tmp10(10042);
        } else {
          return false;
        }
        tmp10Result = tmp10(5674);
      }
      obj7 = PlatformUtils;
      tmp11 = dependencyMap;
    }
  }
  return false;
};
