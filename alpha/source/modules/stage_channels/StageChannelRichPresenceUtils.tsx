// Module ID: 10763
// Function ID: 10764
// Name: StageChannelRichPresenceUtils
// Dependencies: [32, 502, 4863, 4885, 6757, 6709, 1072, 2]
// Exports: isStageActivity, packStageChannelPartyId, shouldShowActivity

// Module 10763 (StageChannelRichPresenceUtils)
import Constants from "Constants" /* 1072 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6709 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildStore from "GuildStore" /* 4885 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6757 */;
import size from "module_2" /* 2 */;

function unpackStageChannelParty(party) {
  if (null != party) {
    if (null != party.party) {
      try {
        if (null != party.party.id) {
          if (party.party.id.startsWith(c7)) {
            const tmp3 = _slicedToArray(party.party.id.split(":"), 5);
            const _parseInt = parseInt;
            const tmp4 = tmp3[1];
            const tmp5 = tmp3[2];
            const tmp6 = tmp3[4];
            const parsed = parseInt(tmp3[3], 16);
            return { guildId: tmp4, channelId: tmp5, size: tmp, userIsSpeaker: 1 & parsed, guildIsPartnered: 2 & parsed, guildIsVerified: 4 & parsed, stageInstanceId: tmp6 };
          }
        }
      } catch (err) {
        return null;
      }
    }
  }
}
const STAGE_APPLICATION_ID = StageChannelsConstants.STAGE_APPLICATION_ID;
const GuildFeatures = Constants.GuildFeatures;
let c7 = "stage:";
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelRichPresenceUtils.tsx");

export function packStageChannelPartyId(channel, stageInstanceByChannel) {
  let num = 0;
  if (StageChannelRoleStore.isSpeaker(AuthenticationStore.getId(), channel.id)) {
    num = 1;
  }
  const guild = GuildStore.getGuild(channel.getGuildId());
  let str = num;
  if (null != guild) {
    const features = guild.features;
    let tmp3 = num;
    const tmp2 = GuildFeatures;
    if (features.has(GuildFeatures.PARTNERED)) {
      tmp3 = num | 2;
    }
    const features2 = guild.features;
    let tmp4 = tmp3;
    if (features2.has(tmp2.VERIFIED)) {
      tmp4 = tmp3 | 4;
    }
    str = tmp4;
  }
  return "" + c7 + channel.guild_id + ":" + channel.id + ":" + str.toString(16) + ":" + stageInstanceByChannel.id;
}
export { unpackStageChannelParty };
export function isStageActivity(application_id) {
  application_id = undefined;
  if (application_id != null) {
    application_id = application_id.application_id;
  }
  return application_id === STAGE_APPLICATION_ID;
}
export function shouldShowActivity(party) {
  const tmp = unpackStageChannelParty(party);
  if (null == tmp) {
    return false;
  } else {
    return null != ChannelStore.getChannel(tmp.channelId);
  }
}
