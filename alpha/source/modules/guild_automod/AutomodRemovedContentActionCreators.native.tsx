// Module ID: 19494
// Function ID: 19495
// Name: AutomodRemovedContentActionCreators
// Dependencies: [4641, 5474, 1113, 5006, 19495, 2121, 2]
// Exports: openRemovedContentModal, showRemovedMessageToast

// Module 19494 (AutomodRemovedContentActionCreators)
import intl2 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5474 */;
import ChannelStore from "ChannelStore" /* 4641 */;
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
  obj.openLazy(asyncRequire(19495, dependencyMap.paths), "AutomodRemovedContentSheet", obj2);
}
