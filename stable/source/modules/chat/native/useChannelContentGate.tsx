// Module ID: 11215
// Function ID: 11216
// Name: useChannelContentGate
// Dependencies: [19, 21, 6734, 6753, 9972, 11216, 11218, 11220, 2]
// Exports: renderChannelContentGate, useChannelContentGate

// Module 11215 (useChannelContentGate)
import Fragment from "Fragment" /* 21 */;
import AgeGateUtils from "AgeGateUtils" /* 6734 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6753 */;
import NsfwGateChatDefault from "NsfwGateChat" /* 11216 */;
import GuildNSFWDefault from "GuildNSFW" /* 11218 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 11220 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const age_gate_AgeGateUtils = tmp(9972);
const jsx = Fragment.jsx;
const constants = { IOS_GUILD_NSFW: "NsfwGateChat", CHANNEL_NSFW: "GuildNSFW", CHANNEL_SPOILER: "ChannelSpoiler" };
const result = size.fileFinishedImporting("modules/chat/native/useChannelContentGate.tsx");

export function useChannelContentGate(guildId, channel) {
  const obj = AgeGateUtils;
  const isChannelContentGated = obj.useIsChannelContentGated(channel);
  const obj2 = SpoilerChannelUtils;
  const getSpoilerGatingChannelId = obj2.useGetSpoilerGatingChannelId(channel);
  let tmp5 = null;
  if (null != guildId) {
    let tmp6;
    const tmpResult = age_gate_AgeGateUtils;
    if (tmpResult.shouldNSFWGateGuild(guildId)) {
      tmp6 = { kind: constants.IOS_GUILD_NSFW };
      const obj3 = { kind: constants.IOS_GUILD_NSFW };
    } else {
      tmp6 = null;
      if (null != channel) {
        let tmp7;
        if (isChannelContentGated) {
          tmp7 = { kind: constants.CHANNEL_NSFW, guildId, channelId: channel.id };
          const obj4 = { kind: constants.CHANNEL_NSFW, guildId, channelId: channel.id };
        } else {
          tmp7 = null;
          if (null != getSpoilerGatingChannelId) {
            tmp7 = { kind: constants.CHANNEL_SPOILER, guildId, channelId: channel.id, spoilerGatingChannelId: getSpoilerGatingChannelId };
            const obj5 = { kind: constants.CHANNEL_SPOILER, guildId, channelId: channel.id, spoilerGatingChannelId: getSpoilerGatingChannelId };
          }
        }
        tmp6 = tmp7;
      }
    }
    tmp5 = tmp6;
  }
  return tmp5;
}
export function renderChannelContentGate(channelContentGate) {
  const kind = channelContentGate.kind;
  if (constants.IOS_GUILD_NSFW === kind) {
    return jsx(NsfwGateChatDefault, {});
  } else if (constants.CHANNEL_NSFW === kind) {
    ({ guildId: obj2.guildId, channelId: obj2.channelId } = channelContentGate);
    return jsx(GuildNSFWDefault, { guildId: null, channelId: null });
  } else if (constants.CHANNEL_SPOILER === kind) {
    const obj = { guildId: null, channelId: null };
    ({ guildId: obj.guildId, spoilerGatingChannelId: obj.channelId } = channelContentGate);
    return jsx(ChannelSpoilerDefault, { guildId: null, channelId: null }, channelContentGate.channelId);
  }
}
