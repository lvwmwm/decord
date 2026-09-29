// Module ID: 17739
// Function ID: 17740
// Name: AutomodRemovedContentActionCreators
// Dependencies: [2041, 4486, 1115, 4755, 17740, 1980, 2]
// Exports: openRemovedContentModal, showRemovedMessageToast

// Module 17739 (AutomodRemovedContentActionCreators)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4486 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import ChannelStore from "ChannelStore" /* 2041 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17740, dependencyMap.paths), "AutomodRemovedContentSheet", { action });
};
