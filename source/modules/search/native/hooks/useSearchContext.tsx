// Module ID: 10060
// Function ID: 77685
// Name: getChannelDetailsSearchContext
// Dependencies: [369098766, 3154116608, 3623878660, 2130706448, 1325400079, 1392508967]
// Exports: useChannelDetailsSearchContext, useGuildChannelSearchContext, useGuildSearchContext

// Module 10060 (getChannelDetailsSearchContext)
function getChannelDetailsSearchContext(channelId, guildId, isThreadResult) {
  if (isThreadResult) {
    importDefault(dependencyMap[3])(null != guildId, "[useChannelDetailsSearchContext] Thread must have a guild id");
    let obj = { type: SearchTypes.THREAD, guildId, channelId };
  } else if (null == guildId) {
    obj = { type: SearchTypes.CHANNEL, channelId };
  } else {
    obj = { type: SearchTypes.GUILD_CHANNEL, guildId, channelId };
  }
  return obj;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const SearchTypes = arg1(dependencyMap[2]).SearchTypes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/search/native/hooks/useSearchContext.tsx");

export const useGuildSearchContext = function useGuildSearchContext(guildId) {
  const arg1 = guildId;
  const items = [guildId];
  return React.useMemo(() => ({ type: constants.GUILD, guildId: arg0 }), items);
};
export const useGuildChannelSearchContext = function useGuildChannelSearchContext(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => ({ type: constants.GUILD_CHANNEL, guildId: arg0, channelId: arg1 }), items);
};
export { getChannelDetailsSearchContext };
export const useChannelDetailsSearchContext = function useChannelDetailsSearchContext(channelId, guildId) {
  guildId = channelId;
  const importDefault = guildId;
  const items = [closure_4];
  const stateFromStores = guildId(dependencyMap[4]).useStateFromStores(items, () => {
    const channel = channel.getChannel(arg0);
    let isThreadResult;
    if (null != channel) {
      isThreadResult = channel.isThread();
    }
    return null != isThreadResult && isThreadResult;
  });
  const dependencyMap = stateFromStores;
  const items1 = [channelId, guildId, stateFromStores];
  return React.useMemo(() => callback(arg0, arg1, stateFromStores), items1);
};
