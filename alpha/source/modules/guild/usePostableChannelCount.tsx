// Module ID: 19009
// Function ID: 19010
// Name: usePostableChannelCount
// Dependencies: [4942, 4944, 1071, 504, 1083, 2]
// Exports: default

// Module 19009 (usePostableChannelCount)
import Constants from "Constants" /* 1071 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1083 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4942 */;
import PermissionStore from "PermissionStore" /* 4944 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, can, channel;

let closure_4 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild/usePostableChannelCount.tsx");

export default function useSendMessageChannelCount(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  let items = [GuildChannelStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let items = GuildChannelStore.getChannels(closure_0)[closure_4];
    if (items == null) {
      items = [];
    }
    return items;
  }, items1);
  let num = 0;
  if (0 !== stateFromStores.length) {
    num = stateFromStores.filter((channel) => {
      channel = channel.channel;
      can = can.can;
      const obj = BigFlagUtilsAll;
      return can(obj.combine(constants.SEND_MESSAGES, constants.VIEW_CHANNEL), channel);
    }).length;
  }
  return num;
};
