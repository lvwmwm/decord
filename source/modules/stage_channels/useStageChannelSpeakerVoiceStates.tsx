// Module ID: 14944
// Function ID: 112509
// Name: transformParticipantToSortedVoiceState
// Dependencies: []
// Exports: default

// Module 14944 (transformParticipantToSortedVoiceState)
function transformParticipantToSortedVoiceState(user) {
  let userNick;
  let voiceState;
  ({ voiceState, userNick } = user);
  return { user: user.user, voiceState, nick: userNick, comparator: getComparator(voiceState, userNick) };
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const getComparator = arg1(dependencyMap[3]).getComparator;
let closure_7 = importDefault(dependencyMap[4]);
const FAVORITES = arg1(dependencyMap[5]).FAVORITES;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/stage_channels/useStageChannelSpeakerVoiceStates.tsx");

export default function useStageChannelSpeakerVoiceStates(arg0) {
  const arg1 = arg0;
  const items = [closure_7, closure_5, closure_4];
  const items1 = [arg0];
  return callback(arg1(dependencyMap[6]).useStateFromStores(items, () => {
    if (arg0 === closure_8) {
      const keys = callback(closure_2[7]).keys(favoriteChannels.getFavoriteChannels());
      const mapped = keys.map((channelId) => channel.getChannel(channelId));
      const found = mapped.filter(arg0(closure_2[8]).isNotNullish);
      let found1 = found.filter((isGuildStageVoice) => isGuildStageVoice.isGuildStageVoice());
      const obj = callback(closure_2[7]);
    } else {
      found1 = channels.getChannels(arg0);
    }
    const items = [
      found1.reduce((arg0, id) => {
        const mutableParticipants = store.getMutableParticipants(id.id, callback(closure_2[9]).StageChannelParticipantNamedIndex.SPEAKER);
        const found = mutableParticipants.filter((type) => type.type === callback(closure_2[9]).StageChannelParticipantTypes.VOICE);
        arg0[id.id] = found.map(closure_9);
        return arg0;
      }, {}),
      found1.reduce((arg0, id) => arg0 + store.getParticipantsVersion(id.id), 0)
    ];
    return items;
  }, items1, arg1(dependencyMap[10]).isVersionEqual), 1)[0];
};
export { transformParticipantToSortedVoiceState };
