// Module ID: 10542
// Function ID: 82377
// Name: useIsFiveButtonLayout
// Dependencies: []
// Exports: useIsFiveButtonLayout

// Module 10542 (useIsFiveButtonLayout)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/video_calls/native/useIsFiveButtonLayout.tsx");

export const useIsFiveButtonLayout = function useIsFiveButtonLayout(id) {
  const arg1 = id;
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => channel.getChannel(arg0));
  const obj = arg1(dependencyMap[2]);
  let isConnectedToVoiceChannel = arg1(dependencyMap[3]).useIsConnectedToVoiceChannel(stateFromStores);
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  let tmp3 = null;
  if (null != guild_id) {
    tmp3 = guild_id;
  }
  const importDefault = tmp3;
  let guild_id1;
  const obj3 = arg1(dependencyMap[3]);
  if (null != stateFromStores) {
    guild_id1 = stateFromStores.guild_id;
  }
  let tmp6 = null;
  if (null != guild_id1) {
    tmp6 = guild_id1;
  }
  id = undefined;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tmp4 = importDefault(dependencyMap[4]);
  const tmp4Result = importDefault(dependencyMap[4])(tmp6, id);
  const items1 = [closure_4];
  const items2 = [tmp3];
  const stateFromStores1 = arg1(dependencyMap[2]).useStateFromStores(items1, () => guild.getGuild(tmp3), items2);
  if (null != stateFromStores1) {
    const afkChannelId = stateFromStores1.afkChannelId;
  }
  let isGuildVoiceResult;
  if (null != stateFromStores) {
    isGuildVoiceResult = stateFromStores.isGuildVoice();
  }
  let tmp11 = null != isGuildVoiceResult && isGuildVoiceResult;
  let id1;
  const obj4 = arg1(dependencyMap[2]);
  if (null != stateFromStores) {
    id1 = stateFromStores.id;
  }
  const tmp12 = importDefault(dependencyMap[5]);
  const tmp12Result = importDefault(dependencyMap[5])(id1);
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = tmp4Result;
  }
  if (isConnectedToVoiceChannel) {
    if (!tmp11) {
      tmp11 = tmp12Result;
    }
    isConnectedToVoiceChannel = tmp11;
  }
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = !tmp15;
  }
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = afkChannelId !== id;
  }
  return isConnectedToVoiceChannel;
};
