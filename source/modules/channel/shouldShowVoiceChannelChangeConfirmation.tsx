// Module ID: 12232
// Function ID: 93857
// Name: shouldShowVoiceChannelChangeConfirmation
// Dependencies: []
// Exports: shouldShowVoiceChannelChangeConfirmation

// Module 12232 (shouldShowVoiceChannelChangeConfirmation)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx");

export const shouldShowVoiceChannelChangeConfirmation = function shouldShowVoiceChannelChangeConfirmation(id) {
  if (obj.disableVoiceChannelChangeAlert) {
    return false;
  } else {
    const remoteSessionId = remoteSessionId.getRemoteSessionId();
    if (null != closure_4.getVoiceStateForSession(id.getId(), remoteSessionId)) {
      return false;
    } else if (closure_4.isCurrentClientInVoiceChannel()) {
      if (closure_4.isInChannel(id.id)) {
        return false;
      } else {
        const guild = guild.getGuild(id.getGuildId());
        let afkChannelId;
        if (null != guild) {
          afkChannelId = guild.afkChannelId;
        }
        let tmp10 = null == afkChannelId;
        if (!tmp10) {
          tmp10 = !closure_4.isInChannel(guild.afkChannelId);
        }
        return tmp10;
      }
    } else {
      return false;
    }
  }
};
