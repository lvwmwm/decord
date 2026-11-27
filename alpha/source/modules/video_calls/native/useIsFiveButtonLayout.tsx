// Module ID: 10036
// Function ID: 10037
// Name: useIsFiveButtonLayout
// Dependencies: [4892, 4914, 504, 10013, 10037, 10039, 10041, 2]
// Exports: useIsFiveButtonLayout

// Module 10036 (useIsFiveButtonLayout)
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildStore from "GuildStore" /* 4914 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/video_calls/native/useIsFiveButtonLayout.tsx");

export function useIsFiveButtonLayout(id) {
  let afkChannelId;
  _require = id;
  const items = [ChannelStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(id));
  const obj3 = require("VoiceChatHooks");
  let isConnectedToVoiceChannel = obj3.useIsConnectedToVoiceChannel(stateFromStores);
  let guild_id;
  const tmp = _require;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  let guild_id1;
  const tmp6 = guild_id(10037);
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  if (guild_id1 == null) {
    guild_id1 = null;
  }
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const items1 = [GuildStore];
  const items2 = [guild_id];
  const tmp6Result = tmp6(guild_id1, id);
  const tmpResult = tmp(504);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => GuildStore.getGuild(guild_id), items2);
  if (stateFromStores1 != null) {
    afkChannelId = stateFromStores1.afkChannelId;
  }
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.isGuildVoice();
  }
  if (flag == null) {
    flag = false;
  }
  let id1;
  const tmp5Result = guild_id(10039);
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  const tmp5ResultResult = tmp5Result(id1);
  const tmp14 = guild_id(10041)();
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = tmp6Result;
  }
  if (isConnectedToVoiceChannel) {
    if (!flag) {
      flag = tmp5ResultResult;
    }
    isConnectedToVoiceChannel = flag;
  }
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = !tmp14;
  }
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = afkChannelId !== id;
  }
  return isConnectedToVoiceChannel;
}
