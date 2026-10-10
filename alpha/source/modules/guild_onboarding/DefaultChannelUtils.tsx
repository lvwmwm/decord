// Module ID: 6790
// Function ID: 6791
// Name: DefaultChannelUtils
// Dependencies: [2117, 2065, 1085, 1097, 558, 576, 4755, 504, 2]
// Exports: canChannelBeDefault

// Module 6790 (DefaultChannelUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import PermissionUtilsAll from "PermissionUtils" /* 4755 */;
import GatedChannelStore from "GatedChannelStore" /* 2117 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
({ ChannelTypesSets: hasOwnProperty, Permissions: metroRequire } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanChannelBeDefault(arg0, arg1) {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GatedChannelStore, ];
    items[1] = ChannelStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp7;
    if (cResult[2] === arg0) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp7);
  }
  const fn = function u() {
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
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp7 = fn;
}) : (function useCanChannelBeDefault(arg0, arg1) {
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
});
const result = size.fileFinishedImporting("modules/guild_onboarding/DefaultChannelUtils.tsx");

export const useCanChannelBeDefault = tmp3;
export const canChannelBeDefault = function canChannelBeDefault(guild_id, id) {
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
};
