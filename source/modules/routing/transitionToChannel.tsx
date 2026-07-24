// Module ID: 4138
// Function ID: 34393
// Name: transitionToChannel
// Dependencies: [1348, 653, 4139, 4140, 1198, 4323, 44, 2]
// Exports: transitionToMessage, transitionToStaticChannelRoute, transitionToThread, tryTransitionToThreadMessage

// Module 4138 (transitionToChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Routes } from "ME";

const require = arg1;
function transitionToChannel(id, openTextInVoiceIfVoiceChannel) {
  const channel = store.getChannel(id);
  if (null != channel) {
    const guildIdForGenericRedirect = require(4139) /* useGuildIdForChannelRoute */.getGuildIdForGenericRedirect(channel);
    const obj3 = require(4139) /* useGuildIdForChannelRoute */;
    importDefault(4140).preload(channel.guild_id, channel.id);
    const obj4 = importDefault(4140);
    const obj = { openChannel: true };
    const obj5 = require(1198) /* shouldNavigate */;
    const merged = Object.assign(openTextInVoiceIfVoiceChannel);
    obj5.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id), obj);
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id);
    if (tmp) {
      importDefault(4323).updateChatOpen(channel.id, true);
      const obj2 = importDefault(4323);
    }
    tmp = null != openTextInVoiceIfVoiceChannel && openTextInVoiceIfVoiceChannel.openTextInVoiceIfVoiceChannel && channel.isGuildVocal();
  }
}
function transitionToThreadMessage(channel, id, openTextInVoiceIfVoiceChannel) {
  importDefault(44)(null != channel.parent_id, "Thread must have a parent ID.");
  let obj = require(4139) /* useGuildIdForChannelRoute */;
  const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
  obj = { openChannel: true };
  const obj2 = require(1198) /* shouldNavigate */;
  const merged = Object.assign(openTextInVoiceIfVoiceChannel);
  obj2.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id), obj);
}
const result = require("useGuildIdForChannelRoute").fileFinishedImporting("modules/routing/transitionToChannel.tsx");

export { transitionToChannel };
export const transitionToThread = function transitionToThread(channel, arg1) {
  importDefault(44)(null != channel.parent_id, "Thread must have a parent ID.");
  let obj = require(4139) /* useGuildIdForChannelRoute */;
  const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
  obj = { openChannel: true };
  const obj2 = require(1198) /* shouldNavigate */;
  const merged = Object.assign(arg1);
  obj2.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id), obj);
};
export { transitionToThreadMessage };
export const tryTransitionToThreadMessage = function tryTransitionToThreadMessage(parentChannelId, threadId, messageId, openTextInVoiceIfVoiceChannel) {
  const channel = store.getChannel(threadId);
  if (null != channel) {
    transitionToThreadMessage(channel, messageId, openTextInVoiceIfVoiceChannel);
  } else {
    transitionToChannel(parentChannelId, openTextInVoiceIfVoiceChannel);
  }
};
export const transitionToMessage = function transitionToMessage(channelId, id, arg2) {
  const channel = store.getChannel(channelId);
  if (null != channel) {
    let obj = require(4139) /* useGuildIdForChannelRoute */;
    const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
    obj = { openChannel: true };
    const obj2 = require(1198) /* shouldNavigate */;
    const merged = Object.assign(arg2);
    obj2.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id), obj);
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id);
  }
};
export const transitionToStaticChannelRoute = function transitionToStaticChannelRoute(guildId, GUILD_HOME) {
  let obj = require(1198) /* shouldNavigate */;
  obj = { openChannel: true };
  const merged = Object.assign(arg2);
  obj.transitionTo(Routes.CHANNEL(guildId, GUILD_HOME), obj);
};
