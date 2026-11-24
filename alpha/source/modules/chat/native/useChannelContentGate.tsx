// Module ID: 11627
// Function ID: 11628
// Name: useChannelContentGate
// Dependencies: [19, 21, 6707, 6723, 9444, 11628, 11630, 11632, 2]
// Exports: renderChannelContentGate, useChannelContentGate

// Module 11627 (useChannelContentGate)
import Fragment from "Fragment" /* 21 */;
import AgeGateUtils from "AgeGateUtils" /* 6707 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6723 */;
import NsfwGateChatDefault from "NsfwGateChat" /* 11628 */;
import GuildNSFWDefault from "GuildNSFW" /* 11630 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 11632 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const age_gate_AgeGateUtils = tmp(9444);
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
