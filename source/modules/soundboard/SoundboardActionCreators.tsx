// Module ID: 5728
// Function ID: 49214
// Name: _fetchDefaultSoundsFromApi2
// Dependencies: []
// Exports: addFavoriteSound, deleteSound, fetchSoundGuildData, maybeFetchSoundboardSounds, muteCustomJoinSound, playSoundLocally, removeFavoriteSound, reportSoundFinishedPlaying, reportSoundStartedPlaying, updateSound, updateUserSoundboardVolume, uploadSound

// Module 5728 (_fetchDefaultSoundsFromApi2)
async function _fetchDefaultSoundsFromApi2() {
  const HTTP = callback(closure_2[5]).HTTP;
  const obj = { url: constants.SOUNDBOARD_DEFAULT_SOUNDS, rejectWithError: callback(closure_2[5]).rejectWithMigratedError() };
  const body = yield HTTP.get(obj).body;
  const mapped = body.map((body) => callback(closure_2[6]).soundboardSoundFromAPI(body, closure_5));
  const obj2 = callback(closure_2[5]);
  callback2(closure_2[7]).dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS", soundboardSounds: mapped });
}
function _resolveOnActionCompleted(SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS) {
  const arg1 = SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS;
  return new Promise((arg0) => {
    function onSoundboardActionCompleted(arg0) {
      onSoundboardActionCompleted(closure_2[7]).unsubscribe(arg0, onSoundboardActionCompleted);
      const timerId = setTimeout(arg0, 0);
    }
    const subscription = onSoundboardActionCompleted(closure_2[7]).subscribe(arg0, onSoundboardActionCompleted);
  });
}
function _maybeFetchDefaultSounds() {
  if (closure_4.shouldFetchDefaultSounds()) {
    let obj = importDefault(dependencyMap[7]);
    obj = { type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" };
    obj.dispatch(obj);
    function _fetchDefaultSoundsFromApi() {
      return callback(...arguments);
    }();
    return _resolveOnActionCompleted("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
  } else {
    return Promise.resolve();
  }
}
function _maybeFetchGuildSoundboardSounds() {
  let obj = arg1(dependencyMap[10]);
  const guildIdsToFetchSoundsFor = obj.getGuildIdsToFetchSoundsFor();
  if (0 === guildIdsToFetchSoundsFor.length) {
    return Promise.resolve();
  } else {
    const tmp2 = _resolveOnActionCompleted("SOUNDBOARD_SOUNDS_RECEIVED");
    obj = { type: "GUILD_SOUNDBOARD_FETCH" };
    importDefault(dependencyMap[7]).dispatch(obj);
    const obj2 = importDefault(dependencyMap[7]);
    obj = { type: "REQUEST_SOUNDBOARD_SOUNDS", guildIds: guildIdsToFetchSoundsFor };
    importDefault(dependencyMap[7]).dispatch(obj);
    return tmp2;
  }
}
async function _maybeFetchSoundboardSounds(disableAnalytics, arg1) {
  disableAnalytics = undefined;
  if (null != disableAnalytics) {
    disableAnalytics = disableAnalytics.disableAnalytics;
  }
  let tmp4 = !closure_10;
  if (!closure_10) {
    tmp4 = !tmp3;
  }
  if (tmp4) {
    closure_10 = true;
  }
  const items = [callback2(), callback3()];
  const nowResult = performance.now();
  const tmp3 = null != disableAnalytics && disableAnalytics;
  if (tmp4) {
    const _performance = performance;
    let obj = callback(closure_2[11]);
    obj = { elapsed_ms: performance.now() - nowResult };
    obj.track(constants.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, obj);
    const nowResult1 = performance.now();
  }
  return yield Promise.all(items);
}
async function _uploadSound(arg0, arg1) {
  const fn = function*(arg0) {
    let emojiId;
    let emojiName;
    let guildId;
    let name;
    let sound;
    let volume;
    ({ guildId, name, sound, volume, emojiId, emojiName } = arg0);
    yield undefined;
    const HTTP = callback(closure_2[5]).HTTP;
    const obj = { url: closure_6.GUILD_SOUNDBOARD_SOUNDS(guildId), body: { name, sound, volume, emoji_id: emojiId, emoji_name: emojiName }, rejectWithError: callback(closure_2[5]).rejectWithMigratedError() };
    const obj2 = callback(closure_2[5]);
    const tmp2 = yield HTTP.post(obj);
    return callback(closure_2[6]).soundboardSoundFromAPI(tmp2.body, guildId);
  };
  fn.next();
  return fn;
}
async function _updateSound(arg0, arg1) {
  const fn = function*(arg0) {
    let emojiId;
    let emojiName;
    let guildId;
    let name;
    let soundId;
    let volume;
    ({ guildId, soundId, name, volume, emojiId, emojiName } = arg0);
    yield undefined;
    const HTTP = callback(closure_2[5]).HTTP;
    const obj = { url: closure_6.GUILD_SOUNDBOARD_SOUND(guildId, soundId), body: { name, volume, emoji_id: emojiId, emoji_name: emojiName }, rejectWithError: callback(closure_2[5]).rejectWithMigratedError() };
    const obj2 = callback(closure_2[5]);
    const tmp2 = yield HTTP.patch(obj);
    return callback(closure_2[6]).soundboardSoundFromAPI(tmp2.body, guildId);
  };
  fn.next();
  return fn;
}
async function _deleteSound(guildId, soundId, arg2) {
  const HTTP = callback(closure_2[5]).HTTP;
  const obj = { url: closure_6.GUILD_SOUNDBOARD_SOUND(guildId, soundId), oldFormErrors: true, rejectWithError: callback(closure_2[5]).rejectWithMigratedError() };
  yield HTTP.del(obj);
}
async function _fetchSoundGuildData(arg0, arg1, arg2) {
  const HTTP = callback(closure_2[5]).HTTP;
  const obj = { url: closure_6.SOUNDBOARD_SOUND_GUILD_DATA(arg0, arg1), rejectWithError: callback(closure_2[5]).rejectWithMigratedError() };
  const tmp = yield HTTP.get(obj);
  let discoverableGuild = null;
  if (null != tmp.body) {
    discoverableGuild = callback(closure_2[16]).makeDiscoverableGuild(tmp.body);
    const obj3 = callback(closure_2[16]);
  }
  return discoverableGuild;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const DEFAULT_SOUND_GUILD_ID = arg1(dependencyMap[2]).DEFAULT_SOUND_GUILD_ID;
({ Endpoints: closure_6, AnalyticEvents: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ MAX_FAVORITES: closure_8, UserSettingsDelay: closure_9 } = arg1(dependencyMap[4]));
let closure_10 = false;
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/soundboard/SoundboardActionCreators.tsx");

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
  const arg1 = soundId;
  const FrecencyUserSettingsActionCreators = arg1(dependencyMap[12]).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", (soundIds) => {
    let obj = callback(closure_2[13]);
    if (obj.size(soundIds.soundIds) >= closure_8) {
      obj = {};
      const intl = soundIds(closure_2[15]).intl;
      obj.title = intl.string(soundIds(closure_2[15]).t.+XYXtZ);
      const intl2 = soundIds(closure_2[15]).intl;
      obj = { count: closure_8 };
      obj.body = intl2.formatToPlainString(soundIds(closure_2[15]).t.JaIyFi, obj);
      callback(closure_2[14]).show(obj);
      let flag = false;
      const obj2 = callback(closure_2[14]);
    } else {
      soundIds = soundIds.soundIds;
      flag = !soundIds.includes(soundIds);
      if (flag) {
        soundIds = soundIds.soundIds;
        soundIds.push(soundIds);
      }
    }
    return flag;
  }, constants.INFREQUENT_USER_ACTION);
};
export const removeFavoriteSound = function removeFavoriteSound(soundId) {
  const arg1 = soundId;
  const FrecencyUserSettingsActionCreators = arg1(dependencyMap[12]).FrecencyUserSettingsActionCreators;
  FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", (soundIds) => {
    soundIds = soundIds.soundIds;
    soundIds.soundIds = soundIds.filter((arg0) => arg0 !== closure_0);
  }, constants.INFREQUENT_USER_ACTION);
};
export const fetchSoundGuildData = function fetchSoundGuildData() {
  return _fetchSoundGuildData(...arguments);
};
export const playSoundLocally = function playSoundLocally(channelId, sound, SOUNDBOARD) {
  let obj = importDefault(dependencyMap[7]);
  obj = { type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", sound, channelId, trigger: SOUNDBOARD };
  obj.dispatch(obj);
};
export const reportSoundStartedPlaying = function reportSoundStartedPlaying(soundId, userId) {
  let obj = importDefault(dependencyMap[7]);
  obj = { type: "GUILD_SOUNDBOARD_SOUND_PLAY_START", soundId, userId };
  obj.dispatch(obj);
};
export const reportSoundFinishedPlaying = function reportSoundFinishedPlaying(soundId, userId) {
  let obj = importDefault(dependencyMap[7]);
  obj = { type: "GUILD_SOUNDBOARD_SOUND_PLAY_END", soundId, userId };
  obj.dispatch(obj);
};
export const updateUserSoundboardVolume = function updateUserSoundboardVolume(volume, analyticsLocations) {
  let obj = importDefault(dependencyMap[7]);
  obj = { type: "USER_SOUNDBOARD_SET_VOLUME", volume, location: analyticsLocations };
  obj.dispatch(obj);
};
export const muteCustomJoinSound = function muteCustomJoinSound(voiceChannelId) {
  let obj = importDefault(dependencyMap[7]);
  obj = { type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId: voiceChannelId };
  obj.dispatch(obj);
};
