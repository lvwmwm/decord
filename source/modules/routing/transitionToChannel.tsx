// Module ID: 4134
// Function ID: 34355
// Name: transitionToChannel
// Dependencies: []
// Exports: transitionToMessage, transitionToStaticChannelRoute, transitionToThread, tryTransitionToThreadMessage

// Module 4134 (transitionToChannel)
function transitionToChannel(id, openTextInVoiceIfVoiceChannel) {
  const channel = store.getChannel(id);
  if (null != channel) {
    const guildIdForGenericRedirect = openTextInVoiceIfVoiceChannel(dependencyMap[2]).getGuildIdForGenericRedirect(channel);
    const obj3 = openTextInVoiceIfVoiceChannel(dependencyMap[2]);
    importDefault(dependencyMap[3]).preload(channel.guild_id, channel.id);
    const obj4 = importDefault(dependencyMap[3]);
    const obj = { openChannel: true };
    const obj5 = openTextInVoiceIfVoiceChannel(dependencyMap[4]);
    const merged = Object.assign(openTextInVoiceIfVoiceChannel);
    obj5.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id), obj);
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id);
    if (tmp) {
      importDefault(dependencyMap[5]).updateChatOpen(channel.id, true);
      const obj2 = importDefault(dependencyMap[5]);
    }
    const tmp = null != openTextInVoiceIfVoiceChannel && openTextInVoiceIfVoiceChannel.openTextInVoiceIfVoiceChannel && channel.isGuildVocal();
  }
}
function transitionToThreadMessage(channel, id, openTextInVoiceIfVoiceChannel) {
  importDefault(dependencyMap[6])(null != channel.parent_id, "Thread must have a parent ID.");
  let obj = id(dependencyMap[2]);
  const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
  obj = { openChannel: true };
  const obj2 = id(dependencyMap[4]);
  const merged = Object.assign(openTextInVoiceIfVoiceChannel);
  obj2.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id), obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const Routes = arg1(dependencyMap[1]).Routes;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/routing/transitionToChannel.tsx");

export { transitionToChannel };
export const transitionToThread = function transitionToThread(channel, arg1) {
  importDefault(dependencyMap[6])(null != channel.parent_id, "Thread must have a parent ID.");
  let obj = arg1(dependencyMap[2]);
  const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
  obj = { openChannel: true };
  const obj2 = arg1(dependencyMap[4]);
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
    let obj = id(dependencyMap[2]);
    const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
    obj = { openChannel: true };
    const obj2 = id(dependencyMap[4]);
    const merged = Object.assign(arg2);
    obj2.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id), obj);
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id);
  }
};
export const transitionToStaticChannelRoute = function transitionToStaticChannelRoute(guildId, GUILD_HOME) {
  let obj = GUILD_HOME(dependencyMap[4]);
  obj = { openChannel: true };
  const merged = Object.assign(arg2);
  obj.transitionTo(Routes.CHANNEL(guildId, GUILD_HOME), obj);
};
