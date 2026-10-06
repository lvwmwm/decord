// Module ID: 12833
// Function ID: 12834
// Name: VibegrationsAppChannelActionCreators
// Dependencies: [12829, 585, 2]
// Exports: markAppChannelChatAutoOpened, setAppChannelChatOpen

// Module 12833 (VibegrationsAppChannelActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 12829 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/actions/VibegrationsAppChannelActionCreators.tsx");

export const setAppChannelChatOpen = function setAppChannelChatOpen(id, open) {
  if (VibegrationsAppChannelsStore.isChatOpen(id) !== open) {
    const obj2 = { type: "VIBEGRATIONS_APP_CHANNEL_CHAT_SET", channelId: id, open };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
};
export const markAppChannelChatAutoOpened = function markAppChannelChatAutoOpened(channelId, timestamp) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VIBEGRATIONS_APP_CHANNEL_CHAT_AUTO_OPENED", channelId, timestamp };
  obj.dispatch(obj2);
};
