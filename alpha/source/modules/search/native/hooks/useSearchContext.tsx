// Module ID: 13797
// Function ID: 13798
// Name: useSearchContext
// Dependencies: [19, 4858, 1072, 38, 563, 2]
// Exports: getChannelDetailsSearchContext, useChannelDetailsSearchContext, useGuildChannelSearchContext, useGuildSearchContext

// Module 13797 (useSearchContext)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1072 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const SearchTypes = Constants.SearchTypes;
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchContext.tsx");

export function useGuildSearchContext(guildId) {
  const items = [guildId];
  return react.useMemo(() => ({ type: SearchTypes.GUILD, guildId }), items);
}
export function useGuildChannelSearchContext(guildId, channelId) {
  const items = [guildId, channelId];
  return react.useMemo(() => ({ type: SearchTypes.GUILD_CHANNEL, guildId, channelId }), items);
}
export function getChannelDetailsSearchContext(channelId, guildId, isThreadResult) {
  let obj;
  const tmp = isThreadResult;
  if (tmp) {
    _modDef38(null != guildId, "[useChannelDetailsSearchContext] Thread must have a guild id");
    obj = { type: SearchTypes.THREAD, guildId, channelId };
    const obj2 = { type: SearchTypes.THREAD, guildId, channelId };
  } else if (null == guildId) {
    obj = { type: SearchTypes.CHANNEL, channelId };
    const obj3 = { type: SearchTypes.CHANNEL, channelId };
  } else {
    obj = { type: SearchTypes.GUILD_CHANNEL, guildId, channelId };
  }
  return obj;
}
export function useChannelDetailsSearchContext(channelId, guildId) {
  let stateFromStores;
  _require = channelId;
  let obj = require("useStateFromStores");
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let flag;
    if (channel != null) {
      flag = channel.isThread();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const items1 = [channelId, guildId, stateFromStores];
  return react.useMemo(() => {
    let obj;
    const tmp3 = stateFromStores;
    if (tmp3) {
      _modDef38(null != guildId, "[useChannelDetailsSearchContext] Thread must have a guild id");
      obj = { type: SearchTypes.THREAD, guildId, channelId };
      const obj2 = { type: SearchTypes.THREAD, guildId, channelId };
    } else if (null == guildId) {
      obj = { type: SearchTypes.CHANNEL, channelId };
      const obj3 = { type: SearchTypes.CHANNEL, channelId };
    } else {
      obj = { type: SearchTypes.GUILD_CHANNEL, guildId, channelId };
    }
    return obj;
  }, items1);
}
