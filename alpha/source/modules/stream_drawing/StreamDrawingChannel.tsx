// Module ID: 15144
// Function ID: 15145
// Name: StreamDrawingChannel
// Dependencies: [4892, 4914, 6816, 504, 2]
// Exports: isStreamDrawingChannelSupported, supportsStreamDrawing, useIsStreamDrawingChannelSupported

// Module 15144 (StreamDrawingChannel)
import StreamKeyUtils from "StreamKeyUtils" /* 6816 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildStore from "GuildStore" /* 4914 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stream_drawing/StreamDrawingChannel.tsx");

export function supportsStreamDrawing(channel, guild) {
  let tmp = null != channel && !channel.isGuildStageVoice();
  if (tmp) {
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has("AV_INFRA_REARCH");
    }
    if (flag == null) {
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
}
export function isStreamDrawingChannelSupported(streamKey) {
  const obj = StreamKeyUtils;
  const guildId = obj.decodeStreamKey(streamKey).guildId;
  let tmp3 = null != guildId;
  obj.decodeStreamKey(streamKey);
  if (tmp3) {
    const channel = ChannelStore.getChannel(tmp2);
    const guild = GuildStore.getGuild(guildId);
    let tmp7 = null != channel && !channel.isGuildStageVoice();
    if (tmp7) {
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has("AV_INFRA_REARCH");
      }
      if (flag == null) {
        flag = false;
      }
      tmp7 = flag;
    }
    tmp3 = tmp7;
  }
  return tmp3;
}
export function useIsStreamDrawingChannelSupported(streamKey) {
  let channelId;
  let guildId;
  const obj = guildId(channelId[2]);
  const decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
  guildId = decodeStreamKeyResult.guildId;
  channelId = decodeStreamKeyResult.channelId;
  const items = [ChannelStore, GuildStore];
  const items1 = [channelId, guildId];
  const obj2 = guildId(channelId[3]);
  return obj2.useStateFromStores(items, () => {
    let guild;
    const channel = ChannelStore.getChannel(channelId);
    if (null != guildId) {
      guild = GuildStore.getGuild(tmp);
    }
    let tmp4 = null != channel && !channel.isGuildStageVoice();
    if (tmp4) {
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has("AV_INFRA_REARCH");
      }
      if (flag == null) {
        flag = false;
      }
      tmp4 = flag;
    }
    return tmp4;
  }, items1);
}
