// Module ID: 18481
// Function ID: 18482
// Name: TopSoundboardSoundsActionCreators
// Dependencies: [1392, 6004, 6005, 1087, 5018, 584, 1297, 2]
// Exports: fetchTopSoundboardSounds, maybeFetchTopSoundboardSoundsByGuild

// Module 18481 (TopSoundboardSoundsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import UserStore from "UserStore" /* 1392 */;
import SoundboardStore from "SoundboardStore" /* 6004 */;
import TopSoundboardSoundStore from "TopSoundboardSoundStore" /* 6005 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f135834 = (body) => {
  let mapped;
  const items = body.body.items;
  const obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS", guildId, topSoundsMetadata: mapped.sort((rank, rank2) => rank.rank - rank2.rank) };
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  mapped = items.map((soundId) => ({ soundId: soundId.sound_id, rank: soundId.sound_rank }));
  return dispatch(obj);
};
const f135835 = () => {
  const obj = DispatcherDefault;
  const obj2 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId };
  return obj.dispatch(obj2);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/soundboard/top_sounds/TopSoundboardSoundsActionCreators.tsx");

export const maybeFetchTopSoundboardSoundsByGuild = function maybeFetchTopSoundboardSoundsByGuild(id) {
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
          const HTTP = tmp2(1297).HTTP;
          const get = HTTP.get;
          const obj4 = { url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(id), oldFormErrors: true, rejectWithError: true };
          const value = get(obj4);
          value.then(f135834, f135835);
        }
      }
    }
  }
};
export const fetchTopSoundboardSounds = function fetchTopSoundboardSounds(guildId) {
  _require = guildId;
  const obj = require("RouteUtils");
  const tmp = _require;
  if (!obj.isPseudoGuildId(guildId)) {
    const obj3 = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
    const HTTP = tmp(1297).HTTP;
    const get = HTTP.get;
    const obj4 = { url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(guildId), oldFormErrors: true, rejectWithError: true };
    const value = get(obj4);
    value.then(f135834, f135835);
  }
};
