// Module ID: 16067
// Function ID: 16068
// Name: getPreviousSafeRouteForNsfwReturn
// Dependencies: [7049, 5155, 5236, 5177, 5209, 1072, 6838, 6858, 2]
// Exports: default

// Module 16067 (getPreviousSafeRouteForNsfwReturn)
import AgeGateUtils from "AgeGateUtils" /* 6838 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6858 */;
import NavigationHistoryStore_mod from "NavigationHistoryStore" /* 7049 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildChannelStore from "GuildChannelStore" /* 5236 */;
import GuildStore from "GuildStore" /* 5177 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c10;
let c2;
let c3;
let closure_4;
let unpackModuleId;
let NavigationHistoryStore = NavigationHistoryStore_mod;
({ CHANNEL_PREFIX: c2, GUILD_PREFIX: c3, getIdFromHistoryItem: closure_4 } = NavigationHistoryStore);
NavigationHistoryStore = NavigationHistoryStore_mod;
({ ME: c10, Routes: unpackModuleId } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/getPreviousSafeRouteForNsfwReturn.native.tsx");

export default function getPreviousSafeRouteForNsfwReturn() {
  const history = NavigationHistoryStore.getState().history;
  let diff = history.length - 2;
  if (0 <= diff) {
    while (true) {
      let obj = history[diff];
      let tmp3 = React3(obj);
      if (obj.startsWith(React2)) {
        let channel = ChannelStore.getChannel(tmp3);
        if (null != channel) {
          let tmp45 = require;
          let obj13 = AgeGateUtils;
          if (!obj13.isChannelContentGated(channel)) {
            let tmp45Result = tmp45(6858);
            if (!tmp45Result.isChannelSpoilerGated(channel)) {
              let guild_id = channel.guild_id;
              let CHANNEL = unpackModuleId.CHANNEL;
              if (guild_id == null) {
                guild_id = authStore;
              }
              let obj11 = { path: CHANNEL(guild_id, tmp3), opensChannel: true };
              return obj11;
            }
          }
        }
      } else if (obj.startsWith(_false)) {
        if (tmp3 === authStore) {
          break;
        } else if (null != GuildStore.getGuild(tmp3)) {
          let obj16 = AgeGateUtils;
          if (!obj16.shouldShowAgeGateForGuildContentLevel(tmp3)) {
            let tmp21;
            let substr = history.slice(0, diff);
            let diff1 = substr.length - 1;
            if (0 <= diff1) {
              while (true) {
                let obj2 = substr[diff1];
                if (obj2.startsWith(React2)) {
                  let tmp12 = React3(obj2);
                  let obj3 = ChannelStore;
                  let channel1 = ChannelStore.getChannel(tmp12);
                  let guild_id1;
                  if (channel1 != null) {
                    guild_id1 = channel1.guild_id;
                  }
                  if (guild_id1 === tmp3) {
                    let channel2 = obj3.getChannel(tmp12);
                    let tmp16 = null != channel2;
                    if (tmp16) {
                      let obj4 = AgeGateUtils;
                      tmp16 = !obj4.isChannelContentGated(channel2);
                    }
                    if (tmp16) {
                      let obj5 = SpoilerChannelUtils;
                      tmp16 = !obj5.isChannelSpoilerGated(channel2);
                    }
                    tmp21 = tmp12;
                    if (tmp16) {
                      break;
                    }
                  }
                  let obj12 = { path: unpackModuleId.CHANNEL(tmp3, tmp21), opensChannel: false };
                  return obj12;
                }
                diff1 = diff1 - 1;
                break;
              }
            }
            let flag = false;
            let channelId = SelectedChannelStore.getChannelId(tmp3, false);
            let obj6 = ChannelStore;
            let channel3 = ChannelStore.getChannel(channelId);
            let tmp25 = null != channel3;
            if (tmp25) {
              let obj7 = AgeGateUtils;
              tmp25 = !obj7.isChannelContentGated(channel3);
            }
            if (tmp25) {
              let obj8 = SpoilerChannelUtils;
              tmp25 = !obj8.isChannelSpoilerGated(channel3);
            }
            tmp21 = channelId;
            if (!tmp25) {
              let defaultChannel = GuildChannelStore.getDefaultChannel(tmp3);
              let id;
              if (defaultChannel != null) {
                id = defaultChannel.id;
              }
              let channel4 = obj6.getChannel(id);
              let tmp34 = null != channel4;
              if (tmp34) {
                let obj9 = AgeGateUtils;
                tmp34 = !obj9.isChannelContentGated(channel4);
              }
              if (tmp34) {
                let obj10 = SpoilerChannelUtils;
                tmp34 = !obj10.isChannelSpoilerGated(channel4);
              }
              let tmp40 = null;
              if (tmp34) {
                tmp40 = id;
              }
              tmp21 = tmp40;
            }
          }
        }
      }
      diff = diff - 1;
    }
    return { path: unpackModuleId.FRIENDS, opensChannel: true };
  }
  return null;
};
