// Module ID: 10890
// Function ID: 10891
// Name: useChannelContentGate
// Dependencies: [19, 21, 558, 576, 6662, 6682, 9858, 10891, 10893, 10895, 2]
// Exports: renderChannelContentGate

// Module 10890 (useChannelContentGate)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import AgeGateUtils from "AgeGateUtils" /* 6662 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6682 */;
import NsfwGateChatDefault from "NsfwGateChat" /* 10891 */;
import GuildNSFWDefault from "GuildNSFW" /* 10893 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 10895 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const age_gate_AgeGateUtils = tmp(9858);
const jsx = Fragment.jsx;
const constants = { IOS_GUILD_NSFW: "NsfwGateChat", CHANNEL_NSFW: "GuildNSFW", CHANNEL_SPOILER: "ChannelSpoiler" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelContentGate(guildId, id) {
  const obj = react2;
  const cResult = obj.c(8);
  const obj2 = AgeGateUtils;
  const isChannelContentGated = obj2.useIsChannelContentGated(id);
  const obj3 = SpoilerChannelUtils;
  const getSpoilerGatingChannelId = obj3.useGetSpoilerGatingChannelId(id);
  let tmp6 = null;
  if (null != guildId) {
    let tmp7;
    const tmpResult = age_gate_AgeGateUtils;
    if (tmpResult.shouldNSFWGateGuild(guildId)) {
      let first;
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { kind: constants.IOS_GUILD_NSFW };
        cResult[0] = obj4;
        first = obj4;
      } else {
        first = cResult[0];
      }
      tmp7 = first;
    } else {
      tmp7 = null;
      if (null != id) {
        let tmp8;
        if (isChannelContentGated) {
          if (cResult[1] === id.id) {
            let tmp11;
            if (cResult[2] === guildId) {
              tmp11 = cResult[3];
            }
            tmp8 = tmp11;
          }
          const obj5 = { kind: constants.CHANNEL_NSFW, guildId, channelId: id.id };
          cResult[1] = id.id;
          cResult[2] = guildId;
          cResult[3] = obj5;
          tmp11 = obj5;
        } else {
          tmp8 = null;
          if (null != getSpoilerGatingChannelId) {
            if (cResult[4] === id.id) {
              if (cResult[5] === guildId) {
                let tmp9;
                if (cResult[6] === getSpoilerGatingChannelId) {
                  tmp9 = cResult[7];
                }
                tmp8 = tmp9;
              }
            }
            const obj6 = { kind: constants.CHANNEL_SPOILER, guildId, channelId: id.id, spoilerGatingChannelId: getSpoilerGatingChannelId };
            cResult[4] = id.id;
            cResult[5] = guildId;
            cResult[6] = getSpoilerGatingChannelId;
            cResult[7] = obj6;
            tmp9 = obj6;
          }
        }
        tmp7 = tmp8;
      }
    }
    tmp6 = tmp7;
  }
  return tmp6;
}) : (function useChannelContentGate(guildId, id) {
  const obj = AgeGateUtils;
  const isChannelContentGated = obj.useIsChannelContentGated(id);
  const obj2 = SpoilerChannelUtils;
  const getSpoilerGatingChannelId = obj2.useGetSpoilerGatingChannelId(id);
  let tmp5 = null;
  if (null != guildId) {
    let tmp6;
    const tmpResult = age_gate_AgeGateUtils;
    if (tmpResult.shouldNSFWGateGuild(guildId)) {
      tmp6 = { kind: constants.IOS_GUILD_NSFW };
      const obj3 = { kind: constants.IOS_GUILD_NSFW };
    } else {
      tmp6 = null;
      if (null != id) {
        let tmp7;
        if (isChannelContentGated) {
          tmp7 = { kind: constants.CHANNEL_NSFW, guildId, channelId: id.id };
          const obj4 = { kind: constants.CHANNEL_NSFW, guildId, channelId: id.id };
        } else {
          tmp7 = null;
          if (null != getSpoilerGatingChannelId) {
            tmp7 = { kind: constants.CHANNEL_SPOILER, guildId, channelId: id.id, spoilerGatingChannelId: getSpoilerGatingChannelId };
            const obj5 = { kind: constants.CHANNEL_SPOILER, guildId, channelId: id.id, spoilerGatingChannelId: getSpoilerGatingChannelId };
          }
        }
        tmp6 = tmp7;
      }
    }
    tmp5 = tmp6;
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/chat/native/useChannelContentGate.tsx");

export const useChannelContentGate = tmp3;
export const renderChannelContentGate = function renderChannelContentGate(channelContentGate) {
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
};
