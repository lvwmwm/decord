// Module ID: 17920
// Function ID: 17921
// Name: AutomodRemovedContentActionCreators
// Dependencies: [2064, 4768, 1126, 5055, 17921, 2000, 2]
// Exports: openRemovedContentModal, showRemovedMessageToast

// Module 17920 (AutomodRemovedContentActionCreators)
import intl2 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import ChannelStore from "ChannelStore" /* 2064 */;
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
    const obj = { key: "AUTOMOD_REMOVED_" + channel_id, content: formatToPlainString(v9U3Wb3, obj2) };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    const intl = intl2.intl;
    formatToPlainString = intl.formatToPlainString;
    const _HermesInternal2 = HermesInternal;
    obj2 = { channel: "#" + name };
    v9U3Wb3 = intl2.t["9U3Wb3"];
    open(obj);
  }
};
export const openRemovedContentModal = function openRemovedContentModal(action) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { action };
  obj.openLazy(asyncRequire(17921, dependencyMap.paths), "AutomodRemovedContentSheet", obj2);
};
