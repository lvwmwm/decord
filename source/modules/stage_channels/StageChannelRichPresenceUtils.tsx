// Module ID: 9075
// Function ID: 71169
// Name: unpackStageChannelParty
// Dependencies: []
// Exports: isStageActivity, packStageChannelPartyId, shouldShowActivity

// Module 9075 (unpackStageChannelParty)
function unpackStageChannelParty(activity) {
  if (null != activity) {
    if (null != tmp.party) {
      if (null != activity.party.id) {
        if (str.startsWith(closure_7)) {
          const tmp7 = callback(str.split(":"), 5);
          const _parseInt = parseInt;
          const parsed = parseInt(tmp7[3], 16);
          const obj = { guildId: tmp7[1], channelId: tmp7[2], size: tmp3, userIsSpeaker: 1 & parsed, guildIsPartnered: 2 & parsed, guildIsVerified: 4 & parsed, stageInstanceId: tmp7[4] };
          return obj;
        }
      }
    }
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const STAGE_APPLICATION_ID = arg1(dependencyMap[5]).STAGE_APPLICATION_ID;
const GuildFeatures = arg1(dependencyMap[6]).GuildFeatures;
let closure_7 = "stage:";
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/stage_channels/StageChannelRichPresenceUtils.tsx");

export const packStageChannelPartyId = function packStageChannelPartyId(channel, stageInstanceByChannel) {
  let num = 0;
  if (speaker.isSpeaker(id.getId(), channel.id)) {
    num = 1;
  }
  const guild = guild.getGuild(channel.getGuildId());
  let str = num;
  if (null != guild) {
    const features = guild.features;
    let tmp3 = num;
    if (features.has(GuildFeatures.PARTNERED)) {
      tmp3 = num | 2;
    }
    const features2 = guild.features;
    let tmp5 = tmp3;
    if (features2.has(GuildFeatures.VERIFIED)) {
      tmp5 = tmp3 | 4;
    }
    str = tmp5;
  }
  return "" + closure_7 + channel.guild_id + ":" + channel.id + ":" + str.toString(16) + ":" + stageInstanceByChannel.id;
};
export { unpackStageChannelParty };
export const isStageActivity = function isStageActivity(activity) {
  let application_id;
  if (null != activity) {
    application_id = activity.application_id;
  }
  return application_id === STAGE_APPLICATION_ID;
};
export const shouldShowActivity = function shouldShowActivity(activity) {
  const tmp = unpackStageChannelParty(activity);
  if (null == tmp) {
    return false;
  } else {
    return null != channel.getChannel(tmp.channelId);
  }
};
