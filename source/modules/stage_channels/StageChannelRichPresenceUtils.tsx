// Module ID: 9120
// Function ID: 71422
// Name: unpackStageChannelParty
// Dependencies: [57, 1194, 1348, 1838, 4954, 4947, 653, 2]
// Exports: isStageActivity, packStageChannelPartyId, shouldShowActivity

// Module 9120 (unpackStageChannelParty)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_2 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_isNativeReflectConstruct";
import { STAGE_APPLICATION_ID } from "MAX_STAGE_TOPIC_LENGTH";
import { GuildFeatures } from "ME";

function unpackStageChannelParty(activity) {
  if (null != activity) {
    if (null != tmp.party) {
      if (null != activity.party.id) {
        if (str.startsWith(c7)) {
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
let c7 = "stage:";
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/StageChannelRichPresenceUtils.tsx");

export const packStageChannelPartyId = function packStageChannelPartyId(channel, stageInstanceByChannel) {
  let num = 0;
  if (speaker.isSpeaker(id.getId(), channel.id)) {
    num = 1;
  }
  guild = guild.getGuild(channel.getGuildId());
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
  return "" + c7 + channel.guild_id + ":" + channel.id + ":" + str.toString(16) + ":" + stageInstanceByChannel.id;
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
