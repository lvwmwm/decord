// Module ID: 4578
// Function ID: 40126
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 1316, 1849, 4579, 653, 662, 4214, 3712, 22, 675, 4580, 3803, 21, 566, 686, 2]

// Module 4578 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import perceptualToAmplitude from "perceptualToAmplitude";
import DISCORD_EPOCH from "DISCORD_EPOCH";
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME";
import { AnalyticEvents } from "ME";
import { UserSettingsTypes } from "MAX_FAVORITES";
import module_2026 from "module_2026";
import importDefaultResult from "DEFAULT_FRECENCY";
import set from "_possibleConstructorReturn";

let closure_18;
let closure_19;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function handleSoundCreateOrUpdate(sound) {
  sound = sound.sound;
  const value = map.get(sound.guildId);
  if (null != value) {
    const findIndexResult = value.findIndex((soundId) => soundId.soundId === sound.soundId);
  }
  if (null != value) {
    if (null != findIndexResult) {
      if (-1 !== findIndexResult) {
        value[findIndexResult] = sound;
        const items = [];
        HermesBuiltin.arraySpread(value, 0);
        const result = map.set(sound.guildId, items);
      }
    }
  }
  if (null != value) {
    if (null != value) {
      value.push(sound);
    }
    const items1 = [];
    HermesBuiltin.arraySpread(value, 0);
    const result1 = map.set(sound.guildId, items1);
  }
}
function syncIsSoundboardVolumeMutedFromUserSettings() {
  const SoundboardSettings = require(3803) /* explicitContentFromProto */.SoundboardSettings;
  const setting = SoundboardSettings.getSetting();
  let volume;
  if (null != setting) {
    volume = setting.volume;
  }
  let closure_26 = 0 === volume;
}
function syncLocalSoundboardMutesFromUserSettings(proto) {
  let iter2;
  let user;
  if (null != proto) {
    const audioContextSettings = proto.audioContextSettings;
    if (null != audioContextSettings) {
      user = audioContextSettings.user;
    }
  }
  if (null == user) {
    user = {};
  }
  const entries = Object.entries(user);
  for (let num = 0; num < entries.length; num = num + 1) {
    let tmp = callback3;
    let tmp2 = callback3(entries[num], 2);
    let first = tmp2[0];
    let obj2 = set;
    if (tmp2[1].soundboardMuted) {
      let addResult = obj2.add(first);
    } else {
      let deleteResult = obj2.delete(first);
    }
  }
  const tmp6 = _createForOfIteratorHelperLoose(set.keys());
  let iter = tmp6();
  if (!iter.done) {
    do {
      let value = iter.value;
      if (null == user[value]) {
        let tmp7 = set;
        let deleteResult1 = set.delete(value);
      }
      iter2 = tmp6();
      iter = iter2;
    } while (!iter2.done);
  }
}
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
let map = new Map();
const map1 = new Map();
let set = new Set();
({ NOT_FETCHED: closure_18, NOT_FETCHED: closure_19 } = obj);
let set1 = new Set();
const map2 = new Map();
obj = {
  computeBonus() {
    return 100;
  },
  computeWeight(arg0) {
    if (arg0 > obj.diff(module_2026, "days")) {
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
    obj = importDefault(3712)();
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {

  }
};
importDefaultResult = new importDefaultResult(obj);
let closure_24 = [];
let c25 = false;
let c26 = false;
let closure_27 = require("apply").debounce((volume, location_stack) => {
  let obj = importDefault(675);
  obj = { volume: Math.round(require(4580) /* perceptualToAmplitude */.amplitudeToPerceptual(volume)), location_stack };
  obj.track(AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, obj);
  const SoundboardSettings = require(3803) /* explicitContentFromProto */.SoundboardSettings;
  obj = { volume };
  SoundboardSettings.updateSetting(obj);
}, 1000);
let tmp9 = ((Store) => {
  class SoundboardStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, SoundboardStore);
      obj = outer1_6(SoundboardStore);
      tmp2 = outer1_5;
      if (outer1_28()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SoundboardStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_10);
      outer1_32(outer1_9.settings);
      outer1_31();
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getOverlaySerializedState",
    value() {
      return { soundboardSounds: Object.fromEntries(outer1_15), favoritedSoundIds: Array.from(outer1_20), localSoundboardMutes: Array.from(outer1_17) };
    }
  };
  items[1] = obj;
  obj = {
    key: "getSounds",
    value() {
      return outer1_15;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSoundsForGuild",
    value(arg0) {
      return outer1_15.get(arg0);
    }
  };
  items[4] = {
    key: "getSound",
    value(arg0, arg1) {
      let closure_0 = arg1;
      let items = outer1_15.get(arg0);
      if (null == items) {
        items = [];
      }
      return items.find((soundId) => soundId.soundId === closure_0);
    }
  };
  items[5] = {
    key: "getSoundById",
    value(arg0) {
      let closure_0 = arg0;
      const arr = Array.from(outer1_15.values());
      return Array.from(outer1_15.values()).flat().find((soundId) => soundId.soundId === closure_0);
    }
  };
  items[6] = {
    key: "isFetchingSounds",
    value() {
      return outer1_19 === outer1_14.FETCHING;
    }
  };
  items[7] = {
    key: "isFetchingDefaultSounds",
    value() {
      return outer1_18 === outer1_14.FETCHING;
    }
  };
  items[8] = {
    key: "isFetching",
    value() {
      const self = this;
      return this.isFetchingSounds() || self.isFetchingDefaultSounds();
    }
  };
  items[9] = {
    key: "shouldFetchDefaultSounds",
    value() {
      return outer1_18 === outer1_14.NOT_FETCHED;
    }
  };
  items[10] = {
    key: "hasFetchedDefaultSounds",
    value() {
      return outer1_18 === outer1_14.FETCHED;
    }
  };
  items[11] = {
    key: "isUserPlayingSounds",
    value(arg0) {
      const value = outer1_21.get(arg0);
      let tmp2 = null != value;
      if (tmp2) {
        tmp2 = value > 0;
      }
      return tmp2;
    }
  };
  items[12] = {
    key: "isPlayingSound",
    value(arg0) {
      return null != outer1_16.get(arg0);
    }
  };
  items[13] = {
    key: "isFavoriteSound",
    value(arg0) {
      return outer1_20.has(arg0);
    }
  };
  items[14] = {
    key: "getFavorites",
    value() {
      return outer1_20;
    }
  };
  items[15] = {
    key: "getFrequentlyUsedSoundIds",
    value() {
      return outer1_23.frequently;
    }
  };
  items[16] = {
    key: "hasPendingUsage",
    value() {
      return outer1_24.length > 0;
    }
  };
  items[17] = {
    key: "playedSoundFrecencyWithoutFetchingLatest",
    get() {
      return outer1_23;
    }
  };
  items[18] = {
    key: "isLocalSoundboardMuted",
    value(arg0) {
      return outer1_17.has(arg0);
    }
  };
  items[19] = {
    key: "isSoundboardVolumeMuted",
    value() {
      return outer1_26;
    }
  };
  items[20] = {
    key: "hasHadOtherUserPlaySoundInSession",
    value() {
      return outer1_25;
    }
  };
  items[21] = {
    key: "hasFetchedAllSounds",
    value() {
      let tmp = outer1_19 === outer1_14.FETCHED;
      if (tmp) {
        tmp = outer1_18 === outer1_14.FETCHED;
      }
      return tmp;
    }
  };
  items[22] = {
    key: "isFetchingAnySounds",
    value() {
      let tmp = outer1_19 === outer1_14.FETCHING;
      if (!tmp) {
        tmp = outer1_18 === outer1_14.FETCHING;
      }
      return tmp;
    }
  };
  return callback(SoundboardStore, items);
})(require("initialize").Store);
tmp9.displayName = "SoundboardStore";
obj = {
  LOGOUT: function handleReset() {
    let closure_18;
    let closure_19;
    map.clear();
    map1.clear();
    map2.clear();
    let c25 = false;
    ({ NOT_FETCHED: closure_19, NOT_FETCHED: closure_18 } = obj);
    let c26 = false;
    let closure_24 = [];
    importDefaultResult.overwriteHistory({});
  },
  GUILD_SOUNDBOARD_FETCH: function handleSoundboardFetch() {
    const FETCHING = obj.FETCHING;
  },
  GUILD_SOUNDBOARD_SOUND_CREATE: handleSoundCreateOrUpdate,
  GUILD_SOUNDBOARD_SOUND_UPDATE: handleSoundCreateOrUpdate,
  GUILD_SOUNDBOARD_SOUND_DELETE: function handleSoundDelete(arg0) {
    let guildId;
    let require;
    ({ soundId: require, guildId } = arg0);
    const value = map.get(guildId);
    let findIndexResult;
    if (null != value) {
      findIndexResult = value.findIndex((soundId) => soundId.soundId === closure_0);
    }
    let tmp2 = null == value || null == findIndexResult;
    if (!tmp2) {
      tmp2 = findIndexResult < 0;
    }
    if (!tmp2) {
      value.splice(findIndexResult, 1);
      const items = [];
      HermesBuiltin.arraySpread(value, 0);
      const result = map.set(guildId, items);
    }
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_START: function handleSoundPlayStart(arg0) {
    let soundId;
    let userId;
    ({ soundId, userId } = arg0);
    let value = map1.get(soundId);
    let num = 0;
    if (null != value) {
      num = value;
    }
    const sum = num + 1;
    value = map2.get(userId);
    let num2 = 0;
    if (null != value) {
      num2 = value;
    }
    const sum1 = num2 + 1;
    const result = map1.set(soundId, sum);
    const result1 = map2.set(userId, sum1);
    currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (userId !== id) {
      let c25 = true;
    }
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_END: function handleSoundPlayEnd(arg0) {
    let soundId;
    let userId;
    ({ soundId, userId } = arg0);
    let value = map1.get(soundId);
    let num = 0;
    if (null != value) {
      num = value;
    }
    const diff = num - 1;
    value = map2.get(userId);
    let num2 = 0;
    if (null != value) {
      num2 = value;
    }
    const diff1 = num2 - 1;
    if (diff <= 0) {
      map1.delete(soundId);
    } else {
      const result = map1.set(soundId, diff);
    }
    if (diff1 <= 0) {
      map2.delete(userId);
    } else {
      const result1 = map2.set(userId, diff1);
    }
  },
  GUILD_SOUNDBOARD_SOUNDS_UPDATE: function handleSoundsUpdate(guildId) {
    const result = map.set(guildId.guildId, guildId.soundboardSounds);
  },
  USER_SOUNDBOARD_SET_VOLUME: function handleSetLocalVolume(volume) {
    volume = volume.volume;
    let closure_26 = 0 === volume;
    lib(volume, volume.location);
    if (closure_26 !== closure_26) {
      lib.flush();
    }
  },
  SOUNDBOARD_TRACK_USAGE: function handleTrackUsage(soundId) {
    soundId = soundId.soundId;
    importDefaultResult.track(soundId);
    const obj = { key: soundId, timestamp: Date.now() };
    importDefaultResult.compute();
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect() {
    map1.clear();
    map2.clear();
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    let proto;
    let type;
    ({ type, proto } = settings.settings);
    if (UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS === type) {
      let _Set = Set;
      let soundIds;
      if (null != proto) {
        const favoriteSoundboardSounds = proto.favoriteSoundboardSounds;
        if (null != favoriteSoundboardSounds) {
          soundIds = favoriteSoundboardSounds.soundIds;
        }
      }
      if (null == soundIds) {
        soundIds = [];
      }
      const prototype = _Set.prototype;
      _Set = new _Set(soundIds);
      if (tmp) {
        let closure_24 = [];
      }
      let playedSoundFrecency;
      if (null != proto) {
        playedSoundFrecency = proto.playedSoundFrecency;
      }
      if (null != playedSoundFrecency) {
        let playedSounds = proto.playedSoundFrecency.playedSounds;
        if (null == playedSounds) {
          playedSounds = {};
        }
        importDefaultResult.overwriteHistory(importDefault(22).mapValues(playedSounds, (recentUses) => {
          const obj = {};
          const merged = Object.assign(recentUses);
          recentUses = recentUses.recentUses;
          const mapped = recentUses.map(Number);
          obj["recentUses"] = mapped.filter((arg0) => arg0 > 0);
          return obj;
        }), closure_24);
        let obj = importDefault(22);
      }
    } else if (UserSettingsTypes.PRELOADED_USER_SETTINGS === type) {
      syncLocalSoundboardMutesFromUserSettings(proto);
      syncIsSoundboardVolumeMutedFromUserSettings();
    }
  },
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function handleFetchDefaultSounds() {
    const FETCHING = obj.FETCHING;
  },
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function handleFetchDefaultSoundsSuccess(soundboardSounds) {
    const result = map.set(DEFAULT_SOUND_GUILD_ID, soundboardSounds.soundboardSounds);
    const FETCHED = obj.FETCHED;
  },
  SOUNDBOARD_SOUNDS_RECEIVED: function handleSoundboardSoundsReceived(updates) {
    updates = updates.updates;
    const item = updates.forEach((guildId) => {
      const result = outer1_15.set(guildId.guildId, guildId.sounds);
    });
    const FETCHED = obj.FETCHED;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    map.delete(guild.guild.id);
  },
  AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function handleToggleLocalSoundboardMute(userId) {
    userId = userId.userId;
    if (set.has(userId)) {
      obj.delete(userId);
    } else {
      obj.add(userId);
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(soundboardStoreState) {
    soundboardStoreState = soundboardStoreState.soundboardStoreState;
    const map = new Map(importDefault(21).entries(soundboardStoreState.soundboardSounds));
    const set = new Set(soundboardStoreState.favoritedSoundIds);
    const set1 = new Set(soundboardStoreState.localSoundboardMutes);
  }
};
tmp9 = new tmp9(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/soundboard/SoundboardStore.tsx");

export default tmp9;
export const FetchState = obj;
