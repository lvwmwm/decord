// Module ID: 19401
// Function ID: 19402
// Name: usePostableChannelCount
// Dependencies: [5173, 5175, 1072, 504, 1084, 2]
// Exports: default

// Module 19401 (usePostableChannelCount)
import Constants from "Constants" /* 1072 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import GuildChannelStore2 from "GuildChannelStore" /* 5173 */;
import PermissionStore from "PermissionStore" /* 5175 */;
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
