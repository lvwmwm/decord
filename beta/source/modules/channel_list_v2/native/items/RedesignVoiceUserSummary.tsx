// Module ID: 15763
// Function ID: 15764
// Name: RedesignVoiceUserSummary
// Dependencies: [19, 2099, 4860, 21, 504, 4981, 15762, 2]
// Exports: default

// Module 15763 (RedesignVoiceUserSummary)
import Fragment from "Fragment" /* 21 */;
import ChannelUtils from "ChannelUtils" /* 4981 */;
import react from "react" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
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
