// Module ID: 15129
// Function ID: 115172
// Name: transformParticipantToSortedVoiceState
// Dependencies: [57, 1351, 1348, 4204, 4952, 566, 1841, 21, 1327, 4958, 4965, 2]
// Exports: default

// Module 15129 (transformParticipantToSortedVoiceState)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { getComparator } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";

const require = arg1;
function transformParticipantToSortedVoiceState(user) {
  let userNick;
  let voiceState;
  ({ voiceState, userNick } = user);
  return { user: user.user, voiceState, nick: userNick, comparator: getComparator(voiceState, userNick) };
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/useStageChannelSpeakerVoiceStates.tsx");

export default function useStageChannelSpeakerVoiceStates(arg0) {
  const _require = arg0;
  let items = [closure_7, closure_5, _isNativeReflectConstruct];
  const items1 = [arg0];
  return callback(_require(566).useStateFromStores(items, () => {
    if (obj.isFavoritesGuildId(callback)) {
      const keys = outer1_1(outer1_2[7]).keys(outer1_4.getFavoriteChannels());
      const mapped = keys.map((channelId) => outer2_5.getChannel(channelId));
      let found = mapped.filter(callback(outer1_2[8]).isNotNullish);
      let found1 = found.filter((isGuildStageVoice) => isGuildStageVoice.isGuildStageVoice());
      const obj2 = outer1_1(outer1_2[7]);
    } else {
      found1 = outer1_7.getChannels(callback);
    }
    const items = [
      found1.reduce((arg0, id) => {
        const mutableParticipants = outer2_7.getMutableParticipants(id.id, callback(outer2_2[9]).StageChannelParticipantNamedIndex.SPEAKER);
        const found = mutableParticipants.filter((type) => type.type === callback(outer3_2[9]).StageChannelParticipantTypes.VOICE);
        arg0[id.id] = found.map(outer2_8);
        return arg0;
      }, {}),
      found1.reduce((arg0, id) => arg0 + outer2_7.getParticipantsVersion(id.id), 0)
    ];
    return items;
  }, items1, _require(4965).isVersionEqual), 1)[0];
};
export { transformParticipantToSortedVoiceState };
