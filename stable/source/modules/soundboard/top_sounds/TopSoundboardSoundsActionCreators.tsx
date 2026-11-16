// Module ID: 19587
// Function ID: 19588
// Name: TopSoundboardSoundsActionCreators
// Dependencies: [1385, 6223, 6224, 1072, 5221, 572, 1282, 2]
// Exports: fetchTopSoundboardSounds, maybeFetchTopSoundboardSoundsByGuild

// Module 19587 (TopSoundboardSoundsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import UserStore from "UserStore" /* 1385 */;
import SoundboardStore from "SoundboardStore" /* 6223 */;
import TopSoundboardSoundStore from "TopSoundboardSoundStore" /* 6224 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f118928 = (body) => {
  let mapped;
  const items = body.body.items;
  const obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS", guildId, topSoundsMetadata: mapped.sort((rank, rank2) => rank.rank - rank2.rank) };
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  mapped = items.map((soundId) => ({ soundId: soundId.sound_id, rank: soundId.sound_rank }));
  return dispatch(obj);
};
const f118929 = () => {
  const obj = DispatcherDefault;
  const obj2 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId };
  return obj.dispatch(obj2);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundsActionCreators.tsx");

export function maybeFetchTopSoundboardSoundsByGuild(id) {
  let guildId;
  if (null != id) {
    if (null != UserStore.getCurrentUser()) {
      const topSoundboardSoundsMetadata = SoundboardStore.getTopSoundboardSoundsMetadata(id);
      if (null != topSoundboardSoundsMetadata) {
        const topSoundsTTL = topSoundboardSoundsMetadata.topSoundsTTL;
        if (null != topSoundsTTL) {
          const _Date = Date;
        }
      }
      if (!TopSoundboardSoundStore.getIsFetching(id)) {
        _require = id;
        let obj = require("RouteUtils");
        const tmp2 = _require;
        if (!obj.isPseudoGuildId(id)) {
          let obj2 = DispatcherDefault;
          const obj3 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: id };
          obj2.dispatch(obj3);
          const HTTP = tmp2(1282).HTTP;
          const get = HTTP.get;
          const obj4 = { url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(id), oldFormErrors: true, rejectWithError: true };
          const value = get(obj4);
          value.then(f118928, f118929);
        }
      }
    }
  }
}
export function fetchTopSoundboardSounds(guildId) {
  _require = guildId;
  const obj = require("RouteUtils");
  const tmp = _require;
  if (!obj.isPseudoGuildId(guildId)) {
    const obj3 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
    const HTTP = tmp(1282).HTTP;
    const get = HTTP.get;
    const obj4 = { url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(guildId), oldFormErrors: true, rejectWithError: true };
    const value = get(obj4);
    value.then(f118928, f118929);
  }
}
