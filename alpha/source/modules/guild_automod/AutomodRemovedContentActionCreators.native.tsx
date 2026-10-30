// Module ID: 19339
// Function ID: 19340
// Name: AutomodRemovedContentActionCreators
// Dependencies: [4858, 5707, 1114, 5253, 19340, 1995, 2]
// Exports: openRemovedContentModal, showRemovedMessageToast

// Module 19339 (AutomodRemovedContentActionCreators)
import intl2 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/AutomodRemovedContentActionCreators.native.tsx");

export function showRemovedMessageToast(arg0, channel_id) {
  let formatToPlainString;
  let obj2;
  let v9U3Wb3;
  const channel = ChannelStore.getChannel(channel_id);
  let name;
  if (channel != null) {
    name = channel.name;
  }
  if (null != name) {
    const _HermesInternal = HermesInternal;
    const open = ToastActionCreatorsDefault.open;
    const obj = { text: formatToPlainString(v9U3Wb3, obj2) };
    ToastActionCreatorsDefault;
    const combined = "AUTOMOD_REMOVED_" + channel_id;
    const intl = intl2.intl;
    formatToPlainString = intl.formatToPlainString;
    const _HermesInternal2 = HermesInternal;
    obj2 = { channel: "#" + name };
    v9U3Wb3 = intl2.t["9U3Wb3"];
    open(combined, obj);
  }
}
export function openRemovedContentModal(action) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { action };
  obj.openLazy(asyncRequire(19340, dependencyMap.paths), "AutomodRemovedContentSheet", obj2);
}
