// Module ID: 17748
// Function ID: 17749
// Name: AutomodRemovedContentActionCreators
// Dependencies: [2045, 4490, 1119, 4757, 17749, 1984, 2]
// Exports: openRemovedContentModal, showRemovedMessageToast

// Module 17748 (AutomodRemovedContentActionCreators)
import util from "util" /* 1119 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4490 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodRemovedContentActionCreators.native.tsx");

export const showRemovedMessageToast = function showRemovedMessageToast(arg0, channel_id) {
  const channel = ChannelStore.getChannel(channel_id);
  let name;
  if (channel != null) {
    name = channel.name;
  }
  if (null != name) {
    const obj2 = { key: null, content: null };
    const _HermesInternal = HermesInternal;
    obj2.key = "AUTOMOD_REMOVED_" + channel_id;
    const intl = util.intl;
    const obj3 = { channel: null };
    const _HermesInternal2 = HermesInternal;
    obj3.channel = "#" + name;
    obj2.content = intl.formatToPlainString(util.t["9U3Wb3"], obj3);
    ToastActionCreatorsDefault.open(obj2);
  }
};
export const openRemovedContentModal = function openRemovedContentModal(action) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17749, dependencyMap.paths), "AutomodRemovedContentSheet", { action });
};
