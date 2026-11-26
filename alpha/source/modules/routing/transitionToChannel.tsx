// Module ID: 6126
// Function ID: 6127
// Name: transitionToChannel
// Dependencies: [4892, 1071, 6127, 6128, 1098, 6129, 38, 2]
// Exports: transitionToChannel, transitionToMessage, transitionToStaticChannelRoute, transitionToThread, transitionToThreadMessage, tryTransitionToThreadMessage

// Module 6126 (transitionToChannel)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import useGuildIdForChannelRoute from "useGuildIdForChannelRoute" /* 6127 */;
import preloadChannelDefault from "preloadChannel" /* 6128 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/routing/transitionToChannel.tsx");

export function transitionToChannel(id, transitionExtras) {
  const channel = ChannelStore.getChannel(id);
  if (null != channel) {
    const obj3 = useGuildIdForChannelRoute;
    const guildIdForGenericRedirect = obj3.getGuildIdForGenericRedirect(channel);
    preloadChannelDefault(channel.guild_id, channel.id);
    const transitionTo = router_utils.transitionTo;
    const obj = { openChannel: true };
    router_utils;
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id);
    const merged = Object.assign(transitionExtras);
    transitionTo(CHANNELResult, obj);
    let prop;
    const tmp7 = importDefault;
    if (transitionExtras != null) {
      prop = transitionExtras.openTextInVoiceIfVoiceChannel;
    }
    if (prop) {
      prop = channel.isGuildVocal();
    }
    if (prop) {
      const tmp7Result = tmp7(6129);
      tmp7Result.updateChatOpen(channel.id, true);
    }
  }
}
export function transitionToThread(channel, arg1) {
  _modDef38(null != channel.parent_id, "Thread must have a parent ID.");
  const obj = useGuildIdForChannelRoute;
  const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
  const transitionTo = router_utils.transitionTo;
  const obj2 = { openChannel: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id);
  const merged = Object.assign(arg1);
  transitionTo(CHANNELResult, obj2);
}
export function transitionToThreadMessage(channel, id, arg2) {
  _modDef38(null != channel.parent_id, "Thread must have a parent ID.");
  const obj = useGuildIdForChannelRoute;
  const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
  const transitionTo = router_utils.transitionTo;
  const obj2 = { openChannel: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id);
  const merged = Object.assign(arg2);
  transitionTo(CHANNELResult, obj2);
}
export function tryTransitionToThreadMessage(parentChannelId, threadId, messageId, arg3) {
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
        const tmp21Result = tmp21(6129);
        tmp21Result.updateChatOpen(channel1.id, true);
      }
    }
  }
}
export function transitionToMessage(id, id2, arg2) {
  const channel = ChannelStore.getChannel(id);
  if (null != channel) {
    const obj = useGuildIdForChannelRoute;
    const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
    const transitionTo = router_utils.transitionTo;
    const obj2 = { openChannel: true };
    router_utils;
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id2);
    const merged = Object.assign(arg2);
    transitionTo(CHANNELResult, obj2);
  }
}
export function transitionToStaticChannelRoute(guildId, channelId, arg2) {
  const transitionTo = router_utils.transitionTo;
  const obj = { openChannel: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(guildId, channelId);
  const merged = Object.assign(arg2);
  transitionTo(CHANNELResult, obj);
}
