// Module ID: 14847
// Function ID: 111895
// Name: RedesignVoiceUserSummary
// Dependencies: []
// Exports: default

// Module 14847 (RedesignVoiceUserSummary)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/channel_list_v2/native/items/RedesignVoiceUserSummary.tsx");

export default function RedesignVoiceUserSummary(channels) {
  channels = channels.channels;
  const arg1 = channels;
  const guildId = channels.guildId;
  const tmp = importDefault(dependencyMap[3])(guildId);
  const importDefault = tmp;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const dependencyMap = stateFromStores;
  const items1 = [channels, stateFromStores, tmp];
  const stageIcon = React.useMemo(() => channels(stateFromStores[5]).isAnyVoiceStateStage(channels, stateFromStores, tmp), items1);
  const obj = arg1(dependencyMap[4]);
  const summarizedVoiceUsers = arg1(dependencyMap[5]).computeSummarizedVoiceUsers({ channels, selectedChannelId: undefined, selectedVoiceChannelId: stateFromStores, voiceStates: tmp });
  const users = summarizedVoiceUsers.filter((arg0) => null != arg0);
  return jsx(importDefault(dependencyMap[6]), { users, guildId, stageIcon });
};
