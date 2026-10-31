// Module ID: 18176
// Function ID: 18177
// Name: RedesignVoiceUserSummary
// Dependencies: [19, 4917, 5767, 21, 504, 6046, 18175, 2]
// Exports: default

// Module 18176 (RedesignVoiceUserSummary)
import Fragment from "Fragment" /* 21 */;
import ChannelUtils from "ChannelUtils" /* 6046 */;
import react from "react" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5767 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/RedesignVoiceUserSummary.tsx");

export default function RedesignVoiceUserSummary(channels) {
  let voiceChannelId;
  channels = channels.channels;
  const guildId = channels.guildId;
  let stateFromStores;
  let obj = channels(stateFromStores[4]);
  const items = [SortedVoiceStateStore];
  const items1 = [guildId];
  stateFromStores = obj.useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStates(guildId), items1);
  const items2 = [SelectedChannelStore];
  const obj2 = channels(stateFromStores[4]);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => voiceChannelId.getVoiceChannelId());
  const items3 = [channels, stateFromStores1, stateFromStores];
  const stageIcon = stateFromStores1.useMemo(() => {
    const obj = ChannelUtils;
    return obj.isAnyVoiceStateStage(channels, stateFromStores1, stateFromStores);
  }, items3);
  const obj4 = { channels, selectedChannelId: "r", selectedVoiceChannelId: stateFromStores1, voiceStates: stateFromStores };
  const obj3 = channels(stateFromStores[5]);
  const summarizedVoiceUsers = obj3.computeSummarizedVoiceUsers(obj4);
  const users = summarizedVoiceUsers.filter((item) => null != item);
  return jsx(guildId(stateFromStores[6]), { users, max: 8, renderIcon: true, guildId, stageIcon });
};
