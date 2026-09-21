// Module ID: 13565
// Function ID: 13566
// Name: VibegrationsAppChannelActionCreators
// Dependencies: [13561, 577, 2]
// Exports: markAppChannelChatAutoOpened, setAppChannelChatOpen

// Module 13565 (VibegrationsAppChannelActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 13561 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/actions/VibegrationsAppChannelActionCreators.tsx");

export const setAppChannelChatOpen = function setAppChannelChatOpen(id, open) {
  if (VibegrationsAppChannelsStore.isChatOpen(id) !== open) {
    const obj2 = { type: "VIBEGRATIONS_APP_CHANNEL_CHAT_SET", channelId: id, open };
    DispatcherDefault.dispatch(obj2);
  }
};
export const markAppChannelChatAutoOpened = function markAppChannelChatAutoOpened(channelId, timestamp) {
  DispatcherDefault.dispatch({ type: "VIBEGRATIONS_APP_CHANNEL_CHAT_AUTO_OPENED", channelId, timestamp });
};
