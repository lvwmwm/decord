// Module ID: 7517
// Function ID: 7518
// Name: isSoundValid
// Dependencies: [4858, 4941, 1384, 6055, 1083, 2048, 2]
// Exports: default

// Module 7517 (isSoundValid)
import Constants from "Constants" /* 1083 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2048 */;
import SoundboardConstants from "SoundboardConstants" /* 6055 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const DEFAULT_SOUND_GUILD_ID = SoundboardConstants.DEFAULT_SOUND_GUILD_ID;
const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/utils/isSoundValid.tsx");

export default function isSoundValid(guildId, arg1, arg2) {
  const channel = ChannelStore.getChannel(arg2);
  guildId = undefined;
  if (guildId != null) {
    guildId = guildId.guildId;
  }
  if (guildId === DEFAULT_SOUND_GUILD_ID) {
    return true;
  } else {
    let guildId1;
    if (guildId != null) {
      guildId1 = guildId.guildId;
    }
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guildId1 !== guild_id) {
      let guildId2;
      if (guildId != null) {
        guildId2 = guildId.guildId;
      }
      if (guildId2 !== arg1) {
        let canResult = null == channel;
        const obj = PremiumUtilsDefault;
        const result = obj.canUseSoundboardEverywhere(UserStore.getCurrentUser());
        if (!canResult) {
          canResult = null == channel.guild_id;
        }
        if (!canResult) {
          canResult = PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, channel);
        }
        if (canResult) {
          canResult = result;
        }
        return canResult;
      }
    }
    return true;
  }
};
