// Module ID: 5717
// Function ID: 49134
// Name: getPreviousSafeRouteForNsfwReturn
// Dependencies: []
// Exports: default

// Module 5717 (getPreviousSafeRouteForNsfwReturn)
const _module = require(dependencyMap[0]);
({ CHANNEL_PREFIX: closure_2, GUILD_PREFIX: closure_3, getIdFromHistoryItem: closure_4 } = _module);
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
let closure_7 = importDefault(dependencyMap[2]);
const ME = require(dependencyMap[3]).ME;
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/age_gate/getPreviousSafeRouteForNsfwReturn.native.tsx");

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
        let channel = channel.getChannel(tmp7);
        let tmp10 = tmp7;
        let tmp11 = channel;
        let tmp12 = tmp4;
        let tmp13 = tmp5;
        if (null != channel) {
          let tmp20 = require;
          let tmp21 = dependencyMap;
          let obj4 = require(dependencyMap[4]);
          tmp10 = tmp7;
          tmp11 = channel;
          tmp12 = tmp4;
          tmp13 = tmp5;
          if (!obj4.isChannelContentGated(channel)) {
            let tmp22 = require;
            let tmp23 = dependencyMap;
            let obj5 = require(dependencyMap[5]);
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
            let obj7 = require(dependencyMap[4]);
            tmp10 = tmp2;
            tmp11 = tmp3;
            tmp12 = tmp7;
            tmp13 = defaultChannel;
            if (!obj7.isChannelContentGated(defaultChannel)) {
              let tmp16 = require;
              let tmp17 = dependencyMap;
              let obj2 = require(dependencyMap[5]);
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
      let tmp2 = tmp10;
      let tmp3 = tmp11;
      let tmp4 = tmp12;
      let tmp5 = tmp13;
    }
    obj = { guildId: tmp7, channelId: defaultChannel.id };
    return obj;
  }
  return null;
};
