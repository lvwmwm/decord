// Module ID: 17908
// Function ID: 17909
// Name: useStageChannelSpeakerVoiceStates
// Dependencies: [32, 4864, 4861, 5823, 6781, 504, 4886, 11, 1254, 6824, 6831, 2]
// Exports: default

// Module 17908 (useStageChannelSpeakerVoiceStates)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import FavoritesUtils from "FavoritesUtils" /* 4886 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5823 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import FavoriteStore from "FavoriteStore" /* 4864 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 6781 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const GlobalUtils = tmp(1254);
function transformParticipantToSortedVoiceState(user) {
  let userNick;
  let voiceState;
  ({ voiceState, userNick } = user);
  const obj = { user: user.user, voiceState, nick: userNick, comparator: getComparator(voiceState, userNick) };
  return obj;
}
const getComparator = SortedVoiceStateStore.getComparator;
const result = size.fileFinishedImporting("modules/stage_channels/useStageChannelSpeakerVoiceStates.tsx");

export default function useStageChannelSpeakerVoiceStates(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  let items = [StageChannelParticipantStore, ChannelStore, FavoriteStore];
  const items1 = [arg0];
  return _slicedToArray(obj.useStateFromStores(items, () => {
    let channel;
    let found1;
    const obj = FavoritesUtils;
    const tmp3 = closure_0;
    if (obj.isFavoritesGuildId(closure_0)) {
      const obj2 = SnowflakeUtilsDefault;
      const keys = obj2.keys(FavoriteStore.getFavoriteChannels());
      const mapped = keys.map((item) => channel.getChannel(item));
      let found = mapped.filter(GlobalUtils.isNotNullish);
      found1 = found.filter((isGuildStageVoice) => isGuildStageVoice.isGuildStageVoice());
    } else {
      found1 = StageChannelParticipantStore.getChannels(tmp3);
    }
    const items = [
      found1.reduce((acc, id) => {
        const mutableParticipants = closure_1_7.getMutableParticipants(id.id, closure_1_0(closure_1_2[9]).StageChannelParticipantNamedIndex.SPEAKER);
        id = id.id;
        const found = mutableParticipants.filter((type) => type.type === closure_1_0(closure_1_2[9]).StageChannelParticipantTypes.VOICE);
        acc[id] = found.map(closure_1_8);
        return acc;
      }, {}),
      found1.reduce((acc, id) => acc + closure_1_7.getParticipantsVersion(id.id), 0)
    ];
    return items;
  }, items1, require("SecondaryIndexMapUtils").isVersionEqual), 1)[0];
};
export { transformParticipantToSortedVoiceState };
