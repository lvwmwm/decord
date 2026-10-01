// Module ID: 6793
// Function ID: 6794
// Name: canChannelUseSoundboard
// Dependencies: [2045, 4469, 2099, 1074, 504, 2]
// Exports: canSelectedVoiceChannelUseSoundboard, default, useCanChannelUseSoundboard

// Module 6793 (canChannelUseSoundboard)
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
({ ChannelTypesSets: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/soundboard/canChannelUseSoundboard.tsx");

export default function canChannelUseSoundboard(type) {
  if (null == type) {
    return false;
  } else {
    const CALLABLE = hasOwnProperty.CALLABLE;
    if (CALLABLE.has(type.type)) {
      return true;
    } else {
      const canResult = PermissionStore.can(metroRequire.USE_SOUNDBOARD, type);
      const canResult1 = PermissionStore.can(metroRequire.SPEAK, type);
      const tmp6 = type.isGuildVoiceOrThread() && canResult && canResult1;
      return tmp6;
    }
  }
};
export const canSelectedVoiceChannelUseSoundboard = function canSelectedVoiceChannelUseSoundboard() {
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  let flag = false;
  if (null != channel) {
    const CALLABLE = hasOwnProperty.CALLABLE;
    flag = true;
    if (!CALLABLE.has(channel.type)) {
      const canResult = PermissionStore.can(metroRequire.USE_SOUNDBOARD, channel);
      const canResult1 = PermissionStore.can(metroRequire.SPEAK, channel);
      flag = channel.isGuildVoiceOrThread() && canResult && canResult1;
      channel.isGuildVoiceOrThread() && canResult && canResult1;
    }
  }
  return flag;
};
export const useCanChannelUseSoundboard = function useCanChannelUseSoundboard(arg0) {
  let closure_0;
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let flag = false;
    if (null != closure_0) {
      const CALLABLE = hasOwnProperty.CALLABLE;
      flag = true;
      if (!CALLABLE.has(closure_0.type)) {
        const canResult = PermissionStore.can(metroRequire.USE_SOUNDBOARD, closure_0);
        const canResult1 = PermissionStore.can(metroRequire.SPEAK, closure_0);
        flag = closure_0.isGuildVoiceOrThread() && canResult && canResult1;
        closure_0.isGuildVoiceOrThread() && canResult && canResult1;
      }
    }
    return flag;
  }, items1);
};
