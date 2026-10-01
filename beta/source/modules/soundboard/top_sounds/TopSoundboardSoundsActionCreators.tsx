// Module ID: 16890
// Function ID: 16891
// Name: TopSoundboardSoundsActionCreators
// Dependencies: [1372, 5319, 5320, 1074, 16889, 4673, 573, 1271, 2]
// Exports: fetchTopSoundboardSounds, maybeFetchTopSoundboardSoundsByGuild

// Module 16890 (TopSoundboardSoundsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import UserStore from "UserStore" /* 1372 */;
import SoundboardStore from "SoundboardStore" /* 5319 */;
import TopSoundboardSoundStore from "TopSoundboardSoundStore" /* 5320 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f106421 = (body) => {
  let mapped;
  const items = body.body.items;
  const obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS", guildId, topSoundsMetadata: mapped.sort((rank, rank2) => rank.rank - rank2.rank) };
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  mapped = items.map((soundId) => ({ soundId: soundId.sound_id, rank: soundId.sound_rank }));
  return dispatch(obj);
};
const f106422 = () => {
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
      const TopSoundboardSoundsMobileExperiment = require("TopSoundboardSoundsExperiment").TopSoundboardSoundsMobileExperiment;
      if (TopSoundboardSoundsMobileExperiment.getConfig({ location: "maybeFetchTopSoundboardSoundsByGuild" }).enabled) {
        const topSoundboardSoundsMetadata = SoundboardStore.getTopSoundboardSoundsMetadata(id);
        if (null != topSoundboardSoundsMetadata) {
          const topSoundsTTL = topSoundboardSoundsMetadata.topSoundsTTL;
          if (null != topSoundsTTL) {
            const _Date = Date;
          }
        }
        if (!TopSoundboardSoundStore.getIsFetching(id)) {
          _require = id;
          const tmp9Result = require("RouteUtils");
          if (!tmp9Result.isPseudoGuildId(id)) {
            let obj2 = DispatcherDefault;
            let obj = { type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: id };
            obj2.dispatch(obj);
            const HTTP = tmp9(1271).HTTP;
            const get = HTTP.get;
            const obj3 = { url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(id), oldFormErrors: true, rejectWithError: true };
            const value = get(obj3);
            value.then(f106421, f106422);
          }
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
    const HTTP = tmp(1271).HTTP;
    const get = HTTP.get;
    const obj4 = { url: Endpoints.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(guildId), oldFormErrors: true, rejectWithError: true };
    const value = get(obj4);
    value.then(f106421, f106422);
  }
};
