// Module ID: 7409
// Function ID: 7410
// Name: DefaultChannelUtils
// Dependencies: [5047, 4992, 1072, 1084, 504, 5080, 2]
// Exports: canChannelBeDefault, useCanChannelBeDefault

// Module 7409 (DefaultChannelUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import PermissionUtilsAll from "PermissionUtils" /* 5080 */;
import GatedChannelStore from "GatedChannelStore" /* 5047 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
({ ChannelTypesSets: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/guild_onboarding/DefaultChannelUtils.tsx");

export function useCanChannelBeDefault(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [GatedChannelStore, ChannelStore];
  return obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_1);
    const tmp = closure_1;
    if (null != channel) {
      let VIEW_CHANNEL;
      const GUILD_VOCAL = hasOwnProperty.GUILD_VOCAL;
      if (GUILD_VOCAL.has(channel.type)) {
        const obj = BigFlagUtilsAll;
        VIEW_CHANNEL = obj.combine(metroRequire.VIEW_CHANNEL, metroRequire.CONNECT);
      }
      let isChannelGatedResult = GatedChannelStore.isChannelGated(closure_0, tmp);
      if (!isChannelGatedResult) {
        const obj2 = PermissionUtilsAll;
        isChannelGatedResult = obj2.canEveryoneRole(VIEW_CHANNEL, channel);
      }
      return isChannelGatedResult;
    }
    VIEW_CHANNEL = metroRequire.VIEW_CHANNEL;
  });
}
export function canChannelBeDefault(guild_id, id) {
  const channel = ChannelStore.getChannel(id);
  const obj = ChannelStore;
  if (null != channel) {
    let VIEW_CHANNEL;
    const GUILD_VOCAL = hasOwnProperty.GUILD_VOCAL;
    if (GUILD_VOCAL.has(channel.type)) {
      const obj2 = BigFlagUtilsAll;
      VIEW_CHANNEL = obj2.combine(metroRequire.VIEW_CHANNEL, metroRequire.CONNECT);
    }
    let isChannelGatedResult = GatedChannelStore.isChannelGated(guild_id, id);
    if (!isChannelGatedResult) {
      const obj3 = PermissionUtilsAll;
      isChannelGatedResult = obj3.canEveryoneRole(VIEW_CHANNEL, obj.getChannel(id));
    }
    return isChannelGatedResult;
  }
  VIEW_CHANNEL = metroRequire.VIEW_CHANNEL;
}
