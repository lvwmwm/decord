// Module ID: 17992
// Function ID: 17993
// Name: AutomodRemovedContentActionCreators
// Dependencies: [2065, 4809, 1126, 5056, 17993, 2000, 2]
// Exports: openRemovedContentModal, showRemovedMessageToast

// Module 17992 (AutomodRemovedContentActionCreators)
import intl2 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/AutomodRemovedContentActionCreators.native.tsx");

export const showRemovedMessageToast = function showRemovedMessageToast(arg0, channel_id) {
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
};
export const openRemovedContentModal = function openRemovedContentModal(action) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { action };
  obj.openLazy(asyncRequire(17993, dependencyMap.paths), "AutomodRemovedContentSheet", obj2);
};
