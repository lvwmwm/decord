// Module ID: 15039
// Function ID: 114616
// Name: RedesignVoiceUserSummary
// Dependencies: [31, 1907, 33, 15040, 566, 4313, 15038, 2]
// Exports: default

// Module 15039 (RedesignVoiceUserSummary)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/channel_list_v2/native/items/RedesignVoiceUserSummary.tsx");

export default function RedesignVoiceUserSummary(channels) {
  channels = channels.channels;
  const guildId = channels.guildId;
  const tmp = importDefault(stateFromStores[3])(guildId);
  importDefault = tmp;
  let obj = channels(stateFromStores[4]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_4.getVoiceChannelId());
  const items1 = [channels, stateFromStores, tmp];
  const memo = React.useMemo(() => channels(stateFromStores[5]).isAnyVoiceStateStage(channels, stateFromStores, closure_1), items1);
  const summarizedVoiceUsers = channels(stateFromStores[5]).computeSummarizedVoiceUsers({ channels, selectedChannelId: undefined, selectedVoiceChannelId: stateFromStores, voiceStates: tmp });
  const found = summarizedVoiceUsers.filter((arg0) => null != arg0);
  obj = { users: found, max: 8, renderIcon: true, guildId, stageIcon: memo };
  return jsx(importDefault(stateFromStores[6]), { users: found, max: 8, renderIcon: true, guildId, stageIcon: memo });
};
