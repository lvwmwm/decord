// Module ID: 10075
// Function ID: 77767
// Name: getChannelDetailsSearchContext
// Dependencies: [31, 1348, 653, 44, 624, 2]
// Exports: useChannelDetailsSearchContext, useGuildChannelSearchContext, useGuildSearchContext

// Module 10075 (getChannelDetailsSearchContext)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SearchTypes } from "ME";

const require = arg1;
function getChannelDetailsSearchContext(channelId, guildId, isThreadResult) {
  if (isThreadResult) {
    importDefault(44)(null != guildId, "[useChannelDetailsSearchContext] Thread must have a guild id");
    let obj = { type: SearchTypes.THREAD, guildId, channelId };
  } else if (null == guildId) {
    obj = { type: SearchTypes.CHANNEL, channelId };
  } else {
    obj = { type: SearchTypes.GUILD_CHANNEL, guildId, channelId };
  }
  return obj;
}
const result = require("ME").fileFinishedImporting("modules/search/native/hooks/useSearchContext.tsx");

export const useGuildSearchContext = function useGuildSearchContext(guildId) {
  let closure_0 = guildId;
  const items = [guildId];
  return React.useMemo(() => ({ type: outer1_5.GUILD, guildId: closure_0 }), items);
};
export const useGuildChannelSearchContext = function useGuildChannelSearchContext(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => ({ type: outer1_5.GUILD_CHANNEL, guildId: closure_0, channelId: closure_1 }), items);
};
export { getChannelDetailsSearchContext };
export const useChannelDetailsSearchContext = function useChannelDetailsSearchContext(channelId, guildId) {
  const _require = channelId;
  let closure_1 = guildId;
  const items = [_isNativeReflectConstruct];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => {
    const channel = outer1_4.getChannel(closure_0);
    let isThreadResult;
    if (null != channel) {
      isThreadResult = channel.isThread();
    }
    return null != isThreadResult && isThreadResult;
  });
  const items1 = [channelId, guildId, stateFromStores];
  return React.useMemo(() => outer1_6(closure_0, closure_1, stateFromStores), items1);
};
