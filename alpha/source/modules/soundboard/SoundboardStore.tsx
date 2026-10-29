// Module ID: 6046
// Function ID: 6047
// Name: SoundboardStore
// Dependencies: [32, 1243, 5752, 1389, 6047, 6048, 1084, 1094, 5768, 2047, 12, 4833, 1264, 5897, 11, 504, 584, 2]

// Module 6046 (SoundboardStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1094 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import _modDef2047 from "module_2047" /* 2047 */;
import UserSettings from "UserSettings" /* 4833 */;
import FrecencyDefault from "Frecency" /* 5768 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5897 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5752 */;
import UserStore from "UserStore" /* 1389 */;
import TopSoundboardSoundStore from "TopSoundboardSoundStore" /* 6047 */;
import SoundboardConstants from "SoundboardConstants" /* 6048 */;
import module_12_mod from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let closure_23, recentUses, set2;

let FETCHED;
let c9;
let metroImportAll;
function handleSoundCreateOrUpdate(sound) {
  let findIndexResult;
  sound = sound.sound;
  const value = map.get(sound.guildId);
  if (value != null) {
    findIndexResult = value.findIndex((soundId) => soundId.soundId === sound.soundId);
  }
  if (null != value) {
    if (null != findIndexResult) {
      if (-1 !== findIndexResult) {
        value[findIndexResult] = sound;
        const items = [];
        const guildId2 = sound.guildId;
        set2 = map.set;
        HermesBuiltin.arraySpread(items, value, 0);
        set2(guildId2, items);
      }
    }
  }
  if (null != value) {
    if (value != null) {
      value.push(sound);
    }
    const items1 = [];
    const guildId = sound.guildId;
    set = map.set;
    HermesBuiltin.arraySpread(items1, value, 0);
    const result = set(guildId, items1);
  }
}
function syncLocalSoundboardMutesFromUserSettings(proto) {
  let user;
  if (proto != null) {
    const audioContextSettings = proto.audioContextSettings;
    if (audioContextSettings != null) {
      user = audioContextSettings.user;
    }
  }
  if (user == null) {
    user = {};
  }
  const entries = Object.entries(user);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let first = tmp5[0];
    let obj2 = set1;
    if (tmp5[1].soundboardMuted) {
      let addResult = obj2.add(first);
    } else {
      let deleteResult = obj2.delete(first);
    }
    continue;
  }
  const keys = set1.keys();
  for (const item10038 of keys) {
    if (null == user[item10038]) {
      let deleteResult1 = set1.delete(tmp12);
    }
    continue;
  }
}
({ DEFAULT_SOUND_GUILD_ID: metroImportAll, EMPTY_SOUND_ID_LIST: c9 } = SoundboardConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const FetchState = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let set = new Set();
({ NOT_FETCHED: FETCHED, NOT_FETCHED: FETCHED } = FetchState);
const set1 = new Set();
set = set1;
const map3 = new Map();
let closure_21 = Date.UTC(2026, 5, 29);
let obj2 = {
  computeBonus() {
    return 100;
  },
  computeWeight(arg0) {
    const obj = _modDef2047();
    if (arg0 > obj.diff(closure_21, "days")) {
      return 0;
    } else {
      let num2 = 100;
      if (arg0 > 3) {
        num2 = 70;
        if (arg0 > 15) {
          num2 = 50;
          if (arg0 > 30) {
            num2 = 30;
            if (arg0 > 45) {
              num2 = 1;
              if (arg0 <= 80) {
                num2 = 10;
              }
            }
          }
        }
      }
      return num2;
    }
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {

  }
};
let tmp9 = new FrecencyDefault(obj2);
const version = tmp9;
const sidebars = [];
let c24 = false;
let closure_25 = false;
let module_12 = module_12_mod;
let closure_26 = module_12.debounce((volume) => {
  const SoundboardSettings = UserSettings.SoundboardSettings;
  const obj = { volume };
  SoundboardSettings.updateSetting(obj);
}, 1000);
module_12 = module_12_mod;
let closure_27 = module_12.debounce((USER, location_stack) => {
  let guildId;
  let obj2;
  let round;
  const obj = { volume: round(obj2.amplitudeToPerceptual(USER)), location_stack, voice_guild_id: guildId };
  const track = AnalyticsUtilsDefault.track;
  const UPDATE_SOUNDBOARD_SETTINGS = AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS;
  round = Math.round;
  AnalyticsUtilsDefault;
  obj2 = PerceptualVolumeUtils;
  guildId = RTCConnectionStore.getGuildId();
  if (guildId == null) {
    guildId = null;
  }
  track(UPDATE_SOUNDBOARD_SETTINGS, obj);
}, 1000);
const Store = get_initializedDefault.Store;
class SoundboardStore extends Store {
  initialize() {
    this.waitFor(RTCConnectionStore, TopSoundboardSoundStore, UserSettingsProtoStore, UserStore);
    syncLocalSoundboardMutesFromUserSettings(UserSettingsProtoStore.settings);
    const SoundboardSettings = UserSettings.SoundboardSettings;
    const setting = SoundboardSettings.getSetting();
    let volume;
    if (setting != null) {
      volume = setting.volume;
    }
    closure_25 = 0 === volume;
  }
  getOverlaySerializedState() {
    const obj = { soundboardSounds: Object.fromEntries(map), favoritedSoundIds: Array.from(set), localSoundboardMutes: Array.from(set1) };
    return obj;
  }
  getSounds() {
    return map;
  }
  getSoundsForGuild(arg0) {
    return map.get(arg0);
  }
  getSound(arg0, arg1) {
    let closure_0 = arg1;
    let items = map.get(arg0);
    if (items == null) {
      items = [];
    }
    return items.find((soundId) => soundId.soundId === closure_0);
  }
  getSoundById(soundId) {
    let closure_0 = soundId;
    const arr = Array.from(map.values());
    const flatResult = arr.flat();
    return flatResult.find((soundId) => soundId.soundId === closure_0);
  }
  isFetchingSounds() {
    return FETCHED === obj.FETCHING;
  }
  isFetchingDefaultSounds() {
    return FETCHED === obj.FETCHING;
  }
  isFetching() {
    const self = this;
    const tmp = this.isFetchingSounds() || self.isFetchingDefaultSounds();
    return tmp;
  }
  shouldFetchDefaultSounds() {
    return FETCHED === obj.NOT_FETCHED;
  }
  hasFetchedDefaultSounds() {
    return FETCHED === obj.FETCHED;
  }
  isUserPlayingSounds(id) {
    const value = map3.get(id);
    return null != value && value > 0;
  }
  isPlayingSound(soundId) {
    return null != map2.get(soundId);
  }
  isFavoriteSound(soundId) {
    return set.has(soundId);
  }
  getFavorites() {
    return set;
  }
  getFrequentlyUsedSoundIds() {
    return closure_22.frequently;
  }
  getTopSoundboardSoundsMetadata(id) {
    return map1.get(id);
  }
  getTopSoundboardSoundIds(id) {
    if (null == id) {
      return React4;
    } else {
      const value = map1.get(id);
      let soundIds;
      const topSoundboardSoundIdsByGuildId = TopSoundboardSoundStore.getTopSoundboardSoundIdsByGuildId(id);
      if (value != null) {
        soundIds = value.soundIds;
      }
      if (soundIds == null) {
        soundIds = topSoundboardSoundIdsByGuildId;
      }
      if (soundIds == null) {
        soundIds = React4;
      }
      return soundIds;
    }
  }
  hasPendingUsage() {
    return closure_23.length > 0;
  }
  isLocalSoundboardMuted(id) {
    return set1.has(id);
  }
  isSoundboardVolumeMuted() {
    return closure_25;
  }
  hasHadOtherUserPlaySoundInSession() {
    return c24;
  }
  hasFetchedAllSounds() {
    return FETCHED === obj.FETCHED && FETCHED === tmp.FETCHED;
  }
  isFetchingAnySounds() {
    return FETCHED === obj.FETCHING || FETCHED === tmp.FETCHING;
  }
}
Object.defineProperty(SoundboardStore.prototype, "playedSoundFrecencyWithoutFetchingLatest", {
  get: function playedSoundFrecencyWithoutFetchingLatest() {
    return closure_22;
  },
  set: undefined
});
SoundboardStore.displayName = "SoundboardStore";
const obj3 = {
  LOGOUT: function handleReset() {
    map.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    c24 = false;
    ({ NOT_FETCHED: FETCHED, NOT_FETCHED: FETCHED } = obj);
    closure_25 = false;
    closure_23 = [];
    closure_22.overwriteHistory({});
  },
  GUILD_SOUNDBOARD_FETCH: function handleSoundboardFetch() {
    FETCHED = obj.FETCHING;
  },
  GUILD_SOUNDBOARD_SOUND_CREATE: handleSoundCreateOrUpdate,
  GUILD_SOUNDBOARD_SOUND_UPDATE: handleSoundCreateOrUpdate,
  GUILD_SOUNDBOARD_SOUND_DELETE: function handleSoundDelete(arg0) {
    let closure_129_0;
    let guildId;
    ({ soundId: closure_129_0, guildId } = arg0);
    const value = map.get(guildId);
    let findIndexResult;
    if (value != null) {
      findIndexResult = value.findIndex((soundId) => soundId.soundId === closure_1_0);
    }
    const tmp3 = null == value || null == findIndexResult || findIndexResult < 0;
    if (!tmp3) {
      value.splice(findIndexResult, 1);
      const items = [];
      set = map.set;
      HermesBuiltin.arraySpread(items, value, 0);
      const result = set(guildId, items);
    }
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_START: function handleSoundPlayStart(arg0) {
    let soundId;
    let userId;
    ({ soundId, userId } = arg0);
    let num = map2.get(soundId);
    const obj = map2;
    if (num == null) {
      num = 0;
    }
    const sum = num + 1;
    let num2 = map3.get(userId);
    const obj2 = map3;
    if (num2 == null) {
      num2 = 0;
    }
    const sum1 = num2 + 1;
    const result = obj.set(soundId, sum);
    const result1 = obj2.set(userId, sum1);
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (userId !== id) {
      c24 = true;
    }
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_END: function handleSoundPlayEnd(arg0) {
    let soundId;
    let userId;
    ({ soundId, userId } = arg0);
    let num = map2.get(soundId);
    if (num == null) {
      num = 0;
    }
    const diff = num - 1;
    let num2 = map3.get(userId);
    if (num2 == null) {
      num2 = 0;
    }
    const diff1 = num2 - 1;
    if (diff <= 0) {
      map2.delete(soundId);
    } else {
      const result = obj.set(soundId, diff);
    }
    if (diff1 <= 0) {
      map3.delete(userId);
    } else {
      const result1 = obj2.set(userId, diff1);
    }
  },
  GUILD_SOUNDBOARD_SOUNDS_UPDATE: function handleSoundsUpdate(guildId) {
    const result = map.set(guildId.guildId, guildId.soundboardSounds);
  },
  USER_SOUNDBOARD_SET_VOLUME: function handleSetLocalVolume(volume) {
    volume = volume.volume;
    closure_25 = 0 === volume;
    const _location = volume.location;
    closure_26(volume);
    closure_27(volume, _location);
    const obj = closure_26;
    if (closure_25 !== closure_25) {
      obj.flush();
    }
  },
  SOUNDBOARD_TRACK_USAGE: function handleTrackUsage(soundId) {
    soundId = soundId.soundId;
    closure_22.track(soundId);
    const obj = { key: soundId, timestamp: Date.now() };
    closure_23.push(obj);
    closure_22.compute();
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect() {
    map2.clear();
    map3.clear();
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    let proto;
    let type;
    ({ type, proto } = settings.settings);
    if (UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS === type) {
      let soundIds;
      const _Set = Set;
      if (proto != null) {
        const favoriteSoundboardSounds = proto.favoriteSoundboardSounds;
        if (favoriteSoundboardSounds != null) {
          soundIds = favoriteSoundboardSounds.soundIds;
        }
      }
      if (soundIds == null) {
        soundIds = [];
      }
      const self = this;
      const self2 = this;
      const _Set1 = new _Set(soundIds);
      if (tmp) {
        closure_23 = [];
      }
      let playedSoundFrecency;
      if (proto != null) {
        playedSoundFrecency = proto.playedSoundFrecency;
      }
      if (null != playedSoundFrecency) {
        const overwriteHistory = closure_22.overwriteHistory;
        let playedSounds = proto.playedSoundFrecency.playedSounds;
        const mapValues = module_12.mapValues;
        module_12;
        if (playedSounds == null) {
          playedSounds = {};
        }
        overwriteHistory(mapValues(playedSounds, (recentUses) => {
          let mapped;
          const obj = { recentUses: mapped.filter((item) => item > 0) };
          const merged = Object.assign(recentUses);
          recentUses = recentUses.recentUses;
          mapped = recentUses.map(Number);
          return obj;
        }), closure_23);
      }
    } else if (tmp2.PRELOADED_USER_SETTINGS === type) {
      syncLocalSoundboardMutesFromUserSettings(proto);
      const SoundboardSettings = UserSettings.SoundboardSettings;
      const setting = SoundboardSettings.getSetting();
      let volume;
      if (setting != null) {
        volume = setting.volume;
      }
      closure_25 = 0 === volume;
    }
  },
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function handleFetchDefaultSounds() {
    FETCHED = obj.FETCHING;
  },
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function handleFetchDefaultSoundsSuccess(soundboardSounds) {
    const result = map.set(metroImportAll, soundboardSounds.soundboardSounds);
    FETCHED = obj.FETCHED;
  },
  SOUNDBOARD_SOUNDS_RECEIVED: function handleSoundboardSoundsReceived(updates) {
    updates = updates.updates;
    const item = updates.forEach((guildId) => {
      const result = map.set(guildId.guildId, guildId.sounds);
    });
    FETCHED = obj.FETCHED;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    map.delete(guild.id);
    map1.delete(guild.id);
  },
  AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function handleToggleLocalSoundboardMute(userId) {
    userId = userId.userId;
    if (set1.has(userId)) {
      set1.delete(userId);
    } else {
      set1.add(userId);
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(soundboardStoreState) {
    soundboardStoreState = soundboardStoreState.soundboardStoreState;
    const obj = SnowflakeUtilsDefault;
    new Map(obj.entries(soundboardStoreState.soundboardSounds));
    new Set(soundboardStoreState.favoritedSoundIds);
    new Set(soundboardStoreState.localSoundboardMutes);
  },
  TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS: function handleTopSoundboardSoundsLoaded(topSoundsMetadata) {
    let addResult;
    topSoundsMetadata = topSoundsMetadata.topSoundsMetadata;
    const guildId = topSoundsMetadata.guildId;
    const obj = { soundIds: topSoundsMetadata.map((soundId) => soundId.soundId), topSoundsTTL: addResult.valueOf() };
    set = map1.set;
    const obj2 = _modDef2047();
    addResult = obj2.add(1, "days");
    const result = set(guildId, obj);
  }
};
const soundboardStore = new SoundboardStore(DispatcherDefault, obj3);
let result = size.fileFinishedImporting("modules/soundboard/SoundboardStore.tsx");

export default soundboardStore;
export { FetchState };
