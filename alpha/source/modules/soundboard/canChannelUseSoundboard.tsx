// Module ID: 12938
// Function ID: 12939
// Name: canChannelUseSoundboard
// Dependencies: [5092, 5175, 5146, 1072, 504, 2]
// Exports: canSelectedVoiceChannelUseSoundboard, default, useCanChannelUseSoundboard

// Module 12938 (canChannelUseSoundboard)
import ChannelStore from "ChannelStore" /* 5092 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import Constants from "Constants" /* 1072 */;
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
export function canSelectedVoiceChannelUseSoundboard() {
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
}
export function useCanChannelUseSoundboard(arg0) {
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
}
