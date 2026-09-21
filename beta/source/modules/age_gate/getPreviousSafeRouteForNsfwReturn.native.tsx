// Module ID: 7571
// Function ID: 7572
// Name: getPreviousSafeRouteForNsfwReturn
// Dependencies: [7572, 2045, 2100, 1078, 4968, 7573, 2]
// Exports: default

// Module 7571 (getPreviousSafeRouteForNsfwReturn)
import Constants from "Constants" /* 1078 */;
import AgeGateUtils from "AgeGateUtils" /* 4968 */;
import NavigationHistoryStore_mod from "NavigationHistoryStore" /* 7572 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildChannelStore from "GuildChannelStore" /* 2100 */;
import size from "module_2" /* 2 */;

let NavigationHistoryStore = NavigationHistoryStore_mod;
({ CHANNEL_PREFIX: c2, GUILD_PREFIX: c3, getIdFromHistoryItem: closure_4 } = NavigationHistoryStore);
let NavigationHistoryStore = NavigationHistoryStore_mod;
const ME = Constants.ME;
const result = size.fileFinishedImporting("modules/age_gate/getPreviousSafeRouteForNsfwReturn.native.tsx");

export default function getPreviousSafeRouteForNsfwReturn() {
  let defaultChannel;
  let tmp3;
  const history = NavigationHistoryStore.getState().history;
  let diff = history.length - 2;
  if (0 <= diff) {
    while (true) {
      let obj = history[diff];
      tmp3 = React4(obj);
      if (obj.startsWith(React2)) {
        let channel = ChannelStore.getChannel(tmp3);
        if (null != channel) {
          let tmp11 = require;
          let obj4 = AgeGateUtils;
          if (!obj4.isChannelContentGated(channel)) {
            let tmp11Result = tmp11(7573);
            if (!tmp11Result.isChannelSpoilerGated(channel)) {
              let guild_id = channel.guild_id;
              if (guild_id == null) {
                guild_id = ME;
              }
              let obj2 = { guildId: guild_id, channelId: tmp3 };
              return obj2;
            }
          }
        }
      } else if (obj.startsWith(React3)) {
        defaultChannel = GuildChannelStore.getDefaultChannel(tmp3);
        if (null != defaultChannel) {
          let tmp13 = require;
          let obj7 = AgeGateUtils;
          if (!obj7.isChannelContentGated(defaultChannel)) {
            let tmp13Result = tmp13(7573);
            if (!tmp13Result.isChannelSpoilerGated(defaultChannel)) {
              break;
            }
          }
        }
      }
      diff = diff - 1;
    }
    const obj3 = { guildId: tmp3, channelId: defaultChannel.id };
    return obj3;
  }
  return null;
};
