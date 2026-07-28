// Module ID: 15083
// Function ID: 114791
// Name: RedesignVoiceUserSummary
// Dependencies: [31, 1907, 4238, 33, 566, 4347, 15082, 2]
// Exports: default

// Module 15083 (RedesignVoiceUserSummary)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_list_v2/native/items/RedesignVoiceUserSummary.tsx");

export default function RedesignVoiceUserSummary(channels) {
  channels = channels.channels;
  const guildId = channels.guildId;
  let obj = channels(stateFromStores[4]);
  const items = [closure_5];
  const items1 = [guildId];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.getVoiceStates(guildId), items1);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores1 = channels(stateFromStores[4]).useStateFromStores(items2, () => outer1_4.getVoiceChannelId());
  const items3 = [channels, stateFromStores1, stateFromStores];
  const memo = stateFromStores1.useMemo(() => channels(stateFromStores[5]).isAnyVoiceStateStage(channels, stateFromStores1, stateFromStores), items3);
  const obj2 = channels(stateFromStores[4]);
  const summarizedVoiceUsers = channels(stateFromStores[5]).computeSummarizedVoiceUsers({ channels, selectedChannelId: undefined, selectedVoiceChannelId: stateFromStores1, voiceStates: stateFromStores });
  const found = summarizedVoiceUsers.filter((arg0) => null != arg0);
  obj = { users: found, max: 8, renderIcon: true, guildId, stageIcon: memo };
  return jsx(guildId(stateFromStores[6]), { users: found, max: 8, renderIcon: true, guildId, stageIcon: memo });
};
