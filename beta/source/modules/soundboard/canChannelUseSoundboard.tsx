// Module ID: 7651
// Function ID: 7652
// Name: canChannelUseSoundboard
// Dependencies: [2045, 4431, 2099, 1078, 558, 568, 504, 2]
// Exports: canSelectedVoiceChannelUseSoundboard, default

// Module 7651 (canChannelUseSoundboard)
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4431 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(1078);
({ ChannelTypesSets: hasOwnProperty, Permissions: metroRequire } = Constants);
const ReactCompilerGating = fn(558);
function canChannelUseSoundboard(type) {
  if (null == type) {
    return false;
  } else {
    const CALLABLE = constants.CALLABLE;
    if (CALLABLE.has(type.type)) {
      return true;
    } else {
      const canResult = PermissionStore.can(constants2.USE_SOUNDBOARD, type);
      const canResult1 = PermissionStore.can(constants2.SPEAK, type);
      return type.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, type);
    }
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/canChannelUseSoundboard.tsx");

export default canChannelUseSoundboard;
export const canSelectedVoiceChannelUseSoundboard = function canSelectedVoiceChannelUseSoundboard() {
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  let flag = false;
  if (null != channel) {
    const CALLABLE = constants.CALLABLE;
    flag = true;
    if (!CALLABLE.has(channel.type)) {
      const canResult = PermissionStore.can(constants2.USE_SOUNDBOARD, channel);
      const canResult1 = PermissionStore.can(constants2.SPEAK, channel);
      flag = channel.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, channel);
      const tmp6 = channel.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, channel);
    }
  }
  return flag;
};
export const useCanChannelUseSoundboard = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let flag = false;
      if (null != closure_0) {
        const CALLABLE = constants.CALLABLE;
        flag = true;
        if (!CALLABLE.has(obj.type)) {
          const canResult = PermissionStore.can(constants2.USE_SOUNDBOARD, obj);
          const canResult1 = PermissionStore.can(constants2.SPEAK, obj);
          flag = obj.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, obj);
          const tmp6 = obj.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, obj);
        }
      }
      return flag;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let flag = false;
    if (null != closure_0) {
      const CALLABLE = constants.CALLABLE;
      flag = true;
      if (!CALLABLE.has(obj.type)) {
        const canResult = PermissionStore.can(constants2.USE_SOUNDBOARD, obj);
        const canResult1 = PermissionStore.can(constants2.SPEAK, obj);
        flag = obj.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, obj);
        const tmp6 = obj.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, obj);
      }
    }
    return flag;
  }, items1);
});
