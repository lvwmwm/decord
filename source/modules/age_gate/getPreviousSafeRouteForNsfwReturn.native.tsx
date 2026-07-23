// Module ID: 5721
// Function ID: 49169
// Name: getPreviousSafeRouteForNsfwReturn
// Dependencies: [5722, 1348, 1907, 653, 4345, 5723, 2]
// Exports: default

// Module 5721 (getPreviousSafeRouteForNsfwReturn)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { ME } from "ME";

let closure_2;
let closure_3;
let closure_4;
({ CHANNEL_PREFIX: closure_2, GUILD_PREFIX: closure_3, getIdFromHistoryItem: closure_4 } = _createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/age_gate/getPreviousSafeRouteForNsfwReturn.native.tsx");

export default function getPreviousSafeRouteForNsfwReturn() {
  let defaultChannel;
  let tmp7;
  const history = state.getState().history;
  let diff = history.length - 2;
  if (diff >= 0) {
    while (true) {
      let obj = history[diff];
      let tmp6 = callback;
      tmp7 = callback(obj);
      let tmp8 = closure_2;
      if (obj.startsWith(closure_2)) {
        let tmp18 = channel;
        channel = channel.getChannel(tmp7);
        let tmp10 = tmp7;
        let tmp11 = channel;
        let tmp12 = tmp4;
        let tmp13 = tmp5;
        if (null != channel) {
          let tmp20 = require;
          let tmp21 = dependencyMap;
          let obj4 = require(4345) /* shouldAgeVerifyForAgeGate */;
          tmp10 = tmp7;
          tmp11 = channel;
          tmp12 = tmp4;
          tmp13 = tmp5;
          if (!obj4.isChannelContentGated(channel)) {
            let tmp22 = require;
            let tmp23 = dependencyMap;
            let obj5 = require(5723) /* getSpoilerGatingChannelId */;
            tmp10 = tmp7;
            tmp11 = channel;
            tmp12 = tmp4;
            tmp13 = tmp5;
            if (!obj5.isChannelSpoilerGated(channel)) {
              obj = {};
              let guild_id = channel.guild_id;
              if (null == guild_id) {
                guild_id = ME;
              }
              obj.guildId = guild_id;
              obj.channelId = tmp7;
              return obj;
            }
          }
        }
      } else {
        let tmp9 = closure_3;
        tmp10 = tmp2;
        tmp11 = tmp3;
        tmp12 = tmp4;
        tmp13 = tmp5;
        if (obj.startsWith(closure_3)) {
          let tmp14 = defaultChannel;
          defaultChannel = defaultChannel.getDefaultChannel(tmp7);
          tmp10 = tmp2;
          tmp11 = tmp3;
          tmp12 = tmp7;
          tmp13 = defaultChannel;
          if (null != defaultChannel) {
            let tmp24 = require;
            let tmp25 = dependencyMap;
            let obj7 = require(4345) /* shouldAgeVerifyForAgeGate */;
            tmp10 = tmp2;
            tmp11 = tmp3;
            tmp12 = tmp7;
            tmp13 = defaultChannel;
            if (!obj7.isChannelContentGated(defaultChannel)) {
              let tmp16 = require;
              let tmp17 = dependencyMap;
              let obj2 = require(5723) /* getSpoilerGatingChannelId */;
              tmp10 = tmp2;
              tmp11 = tmp3;
              tmp12 = tmp7;
              tmp13 = defaultChannel;
              if (!obj2.isChannelSpoilerGated(defaultChannel)) {
                break;
              }
            }
          }
        }
      }
      diff = diff - 1;
      tmp2 = tmp10;
      tmp3 = tmp11;
      tmp4 = tmp12;
      tmp5 = tmp13;
    }
    obj = { guildId: tmp7, channelId: defaultChannel.id };
    return obj;
  }
  return null;
};
