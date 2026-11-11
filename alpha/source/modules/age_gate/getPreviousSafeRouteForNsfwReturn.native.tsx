// Module ID: 15952
// Function ID: 15953
// Name: getPreviousSafeRouteForNsfwReturn
// Dependencies: [6986, 5092, 5173, 1072, 6775, 6795, 2]
// Exports: default

// Module 15952 (getPreviousSafeRouteForNsfwReturn)
import AgeGateUtils from "AgeGateUtils" /* 6775 */;
import NavigationHistoryStore_mod from "NavigationHistoryStore" /* 6986 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import GuildChannelStore from "GuildChannelStore" /* 5173 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let c9;
let closure_4;
let metroImportAll;
let NavigationHistoryStore = NavigationHistoryStore_mod;
({ CHANNEL_PREFIX: c2, GUILD_PREFIX: c3, getIdFromHistoryItem: closure_4 } = NavigationHistoryStore);
NavigationHistoryStore = NavigationHistoryStore_mod;
({ ME: metroImportAll, Routes: c9 } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/getPreviousSafeRouteForNsfwReturn.native.tsx");

export default function getPreviousSafeRouteForNsfwReturn() {
  let defaultChannel;
  let tmp3;
  const history = NavigationHistoryStore.getState().history;
  let diff = history.length - 2;
  if (0 <= diff) {
    while (true) {
      let obj = history[diff];
      tmp3 = React3(obj);
      if (obj.startsWith(React2)) {
        let channel = ChannelStore.getChannel(tmp3);
        if (null != channel) {
          let tmp12 = require;
          let obj3 = AgeGateUtils;
          if (!obj3.isChannelContentGated(channel)) {
            let tmp12Result = tmp12(6795);
            if (!tmp12Result.isChannelSpoilerGated(channel)) {
              let guild_id = channel.guild_id;
              let CHANNEL = React4.CHANNEL;
              if (guild_id == null) {
                guild_id = metroImportAll;
              }
              return CHANNEL(guild_id, tmp3);
            }
          }
        }
      } else if (obj.startsWith(_false)) {
        defaultChannel = GuildChannelStore.getDefaultChannel(tmp3);
        if (null != defaultChannel) {
          let tmp15 = require;
          let obj5 = AgeGateUtils;
          if (!obj5.isChannelContentGated(defaultChannel)) {
            let tmp15Result = tmp15(6795);
            if (!tmp15Result.isChannelSpoilerGated(defaultChannel)) {
              break;
            }
          }
        }
      }
      diff = diff - 1;
    }
    return React4.CHANNEL(tmp3, defaultChannel.id);
  }
  return null;
};
