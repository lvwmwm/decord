// Module ID: 5102
// Function ID: 5103
// Name: transitionToChannel
// Dependencies: [2064, 1085, 5103, 5104, 1112, 5105, 38, 2]
// Exports: transitionToChannel, transitionToMessage, transitionToStaticChannelRoute, transitionToThread, transitionToThreadMessage, tryTransitionToThreadMessage

// Module 5102 (transitionToChannel)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import useGuildIdForChannelRoute from "useGuildIdForChannelRoute" /* 5103 */;
import preloadChannelDefault from "preloadChannel" /* 5104 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/routing/transitionToChannel.tsx");

export const transitionToChannel = function transitionToChannel(id, openTextInVoiceIfVoiceChannel) {
  const channel = ChannelStore.getChannel(id);
  if (null != channel) {
    const obj3 = useGuildIdForChannelRoute;
    const guildIdForGenericRedirect = obj3.getGuildIdForGenericRedirect(channel);
    preloadChannelDefault(channel.guild_id, channel.id);
    const transitionTo = router_utils.transitionTo;
    const obj = { openChannel: true };
    router_utils;
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id);
    const merged = Object.assign(openTextInVoiceIfVoiceChannel);
    transitionTo(CHANNELResult, obj);
    let prop;
    const tmp7 = importDefault;
    if (openTextInVoiceIfVoiceChannel != null) {
      prop = openTextInVoiceIfVoiceChannel.openTextInVoiceIfVoiceChannel;
    }
    if (prop) {
      prop = channel.isGuildVocal();
    }
    if (prop) {
      const tmp7Result = tmp7(5105);
      tmp7Result.updateChatOpen(channel.id, true);
    }
  }
};
export const transitionToThread = function transitionToThread(channel, arg1) {
  _modDef38(null != channel.parent_id, "Thread must have a parent ID.");
  const obj = useGuildIdForChannelRoute;
  const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
  const transitionTo = router_utils.transitionTo;
  const obj2 = { openChannel: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id);
  const merged = Object.assign(arg1);
  transitionTo(CHANNELResult, obj2);
};
export const transitionToThreadMessage = function transitionToThreadMessage(channel, id, arg2) {
  _modDef38(null != channel.parent_id, "Thread must have a parent ID.");
  const obj = useGuildIdForChannelRoute;
  const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
  const transitionTo = router_utils.transitionTo;
  const obj2 = { openChannel: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id);
  const merged = Object.assign(arg2);
  transitionTo(CHANNELResult, obj2);
};
export const tryTransitionToThreadMessage = function tryTransitionToThreadMessage(parentChannelId, threadId, messageId, arg3) {
  const channel = ChannelStore.getChannel(threadId);
  const obj = ChannelStore;
  if (null != channel) {
    _modDef38(null != channel.parent_id, "Thread must have a parent ID.");
    const obj3 = useGuildIdForChannelRoute;
    const guildIdForGenericRedirect = obj3.getGuildIdForGenericRedirect(channel);
    const transitionTo = router_utils.transitionTo;
    const obj2 = { openChannel: true };
    router_utils;
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, messageId);
    const merged = Object.assign(arg3);
    transitionTo(CHANNELResult, obj2);
  } else {
    const channel1 = obj.getChannel(parentChannelId);
    if (null != channel1) {
      const obj6 = useGuildIdForChannelRoute;
      const guildIdForGenericRedirect1 = obj6.getGuildIdForGenericRedirect(channel1);
      preloadChannelDefault(channel1.guild_id, channel1.id);
      const transitionTo2 = router_utils.transitionTo;
      const obj4 = { openChannel: true };
      router_utils;
      const CHANNELResult1 = Routes.CHANNEL(guildIdForGenericRedirect1, channel1.id);
      const merged1 = Object.assign(arg3);
      transitionTo2(CHANNELResult1, obj4);
      let prop;
      const tmp21 = importDefault;
      if (arg3 != null) {
        prop = arg3.openTextInVoiceIfVoiceChannel;
      }
      if (prop) {
        prop = channel1.isGuildVocal();
      }
      if (prop) {
        const tmp21Result = tmp21(5105);
        tmp21Result.updateChatOpen(channel1.id, true);
      }
    }
  }
};
export const transitionToMessage = function transitionToMessage(channelId, messageId, arg2) {
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    const obj = useGuildIdForChannelRoute;
    const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
    const transitionTo = router_utils.transitionTo;
    const obj2 = { openChannel: true };
    router_utils;
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, messageId);
    const merged = Object.assign(arg2);
    transitionTo(CHANNELResult, obj2);
  }
};
export const transitionToStaticChannelRoute = function transitionToStaticChannelRoute(arg0, arg1, arg2) {
  const transitionTo = router_utils.transitionTo;
  const obj = { openChannel: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(arg0, arg1);
  const merged = Object.assign(arg2);
  transitionTo(CHANNELResult, obj);
};
