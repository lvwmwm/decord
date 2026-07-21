// Module ID: 4579
// Function ID: 40153
// Name: isSoundValid
// Dependencies: []
// Exports: default

// Module 4579 (isSoundValid)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const DEFAULT_SOUND_GUILD_ID = arg1(dependencyMap[3]).DEFAULT_SOUND_GUILD_ID;
const Permissions = arg1(dependencyMap[4]).Permissions;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/sounds/soundmoji/utils/isSoundValid.tsx");

export default function isSoundValid(guildId, arg1, channelId) {
  const channel = channel.getChannel(channelId);
  guildId = undefined;
  if (null != guildId) {
    guildId = guildId.guildId;
  }
  if (guildId === DEFAULT_SOUND_GUILD_ID) {
    return true;
  } else {
    let guildId1;
    if (null != guildId) {
      guildId1 = guildId.guildId;
    }
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    if (guildId1 !== guild_id) {
      let guildId2;
      if (null != guildId) {
        guildId2 = guildId.guildId;
      }
      if (guildId2 !== arg1) {
        let canResult = null == channel;
        const result = importDefault(dependencyMap[5]).canUseSoundboardEverywhere(currentUser.getCurrentUser());
        if (!canResult) {
          canResult = null == channel.guild_id;
        }
        if (!canResult) {
          canResult = closure_3.can(Permissions.USE_EXTERNAL_SOUNDS, channel);
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
