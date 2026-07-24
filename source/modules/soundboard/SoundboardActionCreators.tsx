// Module ID: 5733
// Function ID: 49263
// Name: _fetchDefaultSoundsFromApi2
// Dependencies: [5, 4578, 4579, 653, 662, 507, 4585, 686, 5734, 4030, 5735, 675, 1331, 22, 4470, 1212, 5736, 2]
// Exports: addFavoriteSound, deleteSound, fetchSoundGuildData, maybeFetchSoundboardSounds, muteCustomJoinSound, playSoundLocally, removeFavoriteSound, reportSoundFinishedPlaying, reportSoundStartedPlaying, updateSound, updateUserSoundboardVolume, uploadSound

// Module 5733 (_fetchDefaultSoundsFromApi2)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME";
import ME from "ME";
import MAX_FAVORITES from "MAX_FAVORITES";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
async function _fetchDefaultSoundsFromApi2() {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  const obj = { url: outer2_6.SOUNDBOARD_DEFAULT_SOUNDS, rejectWithError: outer2_0(outer2_2[5]).rejectWithMigratedError() };
  const body = yield HTTP.get(obj).body;
  const mapped = body.map((body) => outer3_0(outer3_2[6]).soundboardSoundFromAPI(body, outer3_5));
  const obj2 = outer2_0(outer2_2[5]);
  outer2_1(outer2_2[7]).dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS", soundboardSounds: mapped });
}
function _resolveOnActionCompleted(SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS) {
  let closure_0 = SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    function onSoundboardActionCompleted() {
      outer2_1(outer2_2[7]).unsubscribe(closure_0, onSoundboardActionCompleted);
      const timerId = setTimeout(closure_0, 0);
    }
    const subscription = outer1_1(outer1_2[7]).subscribe(closure_0, onSoundboardActionCompleted);
  });
}
function _maybeFetchDefaultSounds() {
  if (closure_4.shouldFetchDefaultSounds()) {
    let obj = importDefault(686);
    obj = { type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" };
    obj.dispatch(obj);
    (function _fetchDefaultSoundsFromApi() {
      return outer1_11(...arguments);
    })();
    return _resolveOnActionCompleted("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
  } else {
    return Promise.resolve();
  }
}
function _maybeFetchGuildSoundboardSounds() {
  let obj = require(5735) /* _getGuildIdsToFetchSoundsFor */;
  const guildIdsToFetchSoundsFor = obj.getGuildIdsToFetchSoundsFor();
  if (0 === guildIdsToFetchSoundsFor.length) {
    return Promise.resolve();
  } else {
    const tmp2 = _resolveOnActionCompleted("SOUNDBOARD_SOUNDS_RECEIVED");
    obj = { type: "GUILD_SOUNDBOARD_FETCH" };
    importDefault(686).dispatch(obj);
    const obj2 = importDefault(686);
    obj = { type: "REQUEST_SOUNDBOARD_SOUNDS", guildIds: guildIdsToFetchSoundsFor };
    importDefault(686).dispatch(obj);
    return tmp2;
  }
}
async function _maybeFetchSoundboardSounds(arg0, arg1) {
  let disableAnalytics;
  if (null != arg0) {
    disableAnalytics = arg0.disableAnalytics;
  }
  let tmp4 = !outer2_10;
  if (!outer2_10) {
    tmp4 = !tmp3;
  }
  if (tmp4) {
    outer2_10 = true;
  }
  const items = [outer2_13(), outer2_14()];
  const nowResult = performance.now();
  tmp3 = null != disableAnalytics && disableAnalytics;
  if (tmp4) {
    const _performance = performance;
    let obj = outer2_1(outer2_2[11]);
    obj = { elapsed_ms: performance.now() - nowResult };
    obj.track(outer2_7.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, obj);
    const nowResult1 = performance.now();
  }
  return yield Promise.all(items);
}
async function _uploadSound(arg0, arg1) {
  let iter = (function*(arg0) {
    let emojiId;
    let emojiName;
    let guildId;
    let name;
    let sound;
    let volume;
    ({ guildId, name, sound, volume, emojiId, emojiName } = arg0);
    yield undefined;
    const HTTP = outer2_0(outer2_2[5]).HTTP;
    const obj = { url: outer2_6.GUILD_SOUNDBOARD_SOUNDS(guildId), body: { name, sound, volume, emoji_id: emojiId, emoji_name: emojiName }, rejectWithError: outer2_0(outer2_2[5]).rejectWithMigratedError() };
    const obj2 = outer2_0(outer2_2[5]);
    const tmp2 = yield HTTP.post(obj);
    return outer2_0(outer2_2[6]).soundboardSoundFromAPI(tmp2.body, guildId);
  })();
  iter.next();
  return iter;
}
async function _updateSound(arg0, arg1) {
  let iter = (function*(arg0) {
    let emojiId;
    let emojiName;
    let guildId;
    let name;
    let soundId;
    let volume;
    ({ guildId, soundId, name, volume, emojiId, emojiName } = arg0);
    yield undefined;
    const HTTP = outer2_0(outer2_2[5]).HTTP;
    const obj = { url: outer2_6.GUILD_SOUNDBOARD_SOUND(guildId, soundId), body: { name, volume, emoji_id: emojiId, emoji_name: emojiName }, rejectWithError: outer2_0(outer2_2[5]).rejectWithMigratedError() };
    const obj2 = outer2_0(outer2_2[5]);
    const tmp2 = yield HTTP.patch(obj);
    return outer2_0(outer2_2[6]).soundboardSoundFromAPI(tmp2.body, guildId);
  })();
  iter.next();
  return iter;
}
async function _deleteSound(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  const obj = { url: outer2_6.GUILD_SOUNDBOARD_SOUND(arg0, arg1), oldFormErrors: true, rejectWithError: outer2_0(outer2_2[5]).rejectWithMigratedError() };
  yield HTTP.del(obj);
}
async function _fetchSoundGuildData(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  const obj = { url: outer2_6.SOUNDBOARD_SOUND_GUILD_DATA(arg0, arg1), rejectWithError: outer2_0(outer2_2[5]).rejectWithMigratedError() };
  const tmp = yield HTTP.get(obj);
  let discoverableGuild = null;
  if (null != tmp.body) {
    discoverableGuild = outer2_0(outer2_2[16]).makeDiscoverableGuild(tmp.body);
    const obj3 = outer2_0(outer2_2[16]);
  }
  return discoverableGuild;
}
({ Endpoints: closure_6, AnalyticEvents: closure_7 } = ME);
({ MAX_FAVORITES: closure_8, UserSettingsDelay: closure_9 } = MAX_FAVORITES);
let c10 = false;
const result = require("MAX_LENGTH_SOUND_NAME").fileFinishedImporting("modules/soundboard/SoundboardActionCreators.tsx");

export const maybeFetchSoundboardSounds = function maybeFetchSoundboardSounds() {
  return _maybeFetchSoundboardSounds(...arguments);
};
export const uploadSound = function uploadSound() {
  return _uploadSound(...arguments);
};
export const updateSound = function updateSound() {
  return _updateSound(...arguments);
};
export const deleteSound = function deleteSound() {
  return _deleteSound(...arguments);
};
export const addFavoriteSound = function addFavoriteSound(soundId) {
  const _require = soundId;
  const FrecencyUserSettingsActionCreators = _require(1331).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", (soundIds) => {
    let obj = outer1_1(outer1_2[13]);
    if (obj.size(soundIds.soundIds) >= outer1_8) {
      obj = {};
      const intl = soundId(outer1_2[15]).intl;
      obj.title = intl.string(soundId(outer1_2[15]).t["+XYXtZ"]);
      const intl2 = soundId(outer1_2[15]).intl;
      obj = { count: outer1_8 };
      obj.body = intl2.formatToPlainString(soundId(outer1_2[15]).t.JaIyFi, obj);
      outer1_1(outer1_2[14]).show(obj);
      let flag = false;
      const obj2 = outer1_1(outer1_2[14]);
    } else {
      soundIds = soundIds.soundIds;
      flag = !soundIds.includes(soundId);
      if (flag) {
        soundIds = soundIds.soundIds;
        soundIds.push(soundId);
      }
    }
    return flag;
  }, constants.INFREQUENT_USER_ACTION);
};
export const removeFavoriteSound = function removeFavoriteSound(soundId) {
  const _require = soundId;
  const FrecencyUserSettingsActionCreators = _require(1331).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", (soundIds) => {
    soundIds = soundIds.soundIds;
    soundIds.soundIds = soundIds.filter((arg0) => arg0 !== outer1_0);
  }, constants.INFREQUENT_USER_ACTION);
};
export const fetchSoundGuildData = function fetchSoundGuildData() {
  return _fetchSoundGuildData(...arguments);
};
export const playSoundLocally = function playSoundLocally(channelId, sound, SOUNDBOARD) {
  let obj = importDefault(686);
  obj = { type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", sound, channelId, trigger: SOUNDBOARD };
  obj.dispatch(obj);
};
export const reportSoundStartedPlaying = function reportSoundStartedPlaying(soundId, userId) {
  let obj = importDefault(686);
  obj = { type: "GUILD_SOUNDBOARD_SOUND_PLAY_START", soundId, userId };
  obj.dispatch(obj);
};
export const reportSoundFinishedPlaying = function reportSoundFinishedPlaying(soundId, userId) {
  let obj = importDefault(686);
  obj = { type: "GUILD_SOUNDBOARD_SOUND_PLAY_END", soundId, userId };
  obj.dispatch(obj);
};
export const updateUserSoundboardVolume = function updateUserSoundboardVolume(volume, analyticsLocations) {
  let obj = importDefault(686);
  obj = { type: "USER_SOUNDBOARD_SET_VOLUME", volume, location: analyticsLocations };
  obj.dispatch(obj);
};
export const muteCustomJoinSound = function muteCustomJoinSound(voiceChannelId) {
  let obj = importDefault(686);
  obj = { type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId: voiceChannelId };
  obj.dispatch(obj);
};
