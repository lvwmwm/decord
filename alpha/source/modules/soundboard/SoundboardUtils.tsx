// Module ID: 7674
// Function ID: 7675
// Name: SoundboardUtils
// Dependencies: [5, 1220, 2048, 4464, 1372, 5311, 5313, 1074, 1218, 2020, 4483, 7675, 7668, 7676, 573, 7703, 7704, 7705, 563, 4673, 2028, 2025, 5320, 1241, 5009, 2]
// Exports: getAmplitudinalSoundboardVolume, hasSetAnyCustomJoinSound, maybePlayCustomJoinSound, playSound, removeCustomJoinSound, trackCustomCallSoundExternallyDeleted, trackSoundFavorited, updateCustomJoinSound, useSoundBoardDismissContentTypes

// Module 7674 (SoundboardUtils)
import useStateFromStores from "useStateFromStores" /* 563 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import UserSettings from "UserSettings" /* 2020 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4483 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5009 */;
import SoundboardTypes from "SoundboardTypes" /* 5320 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7668 */;
import useMuteStates from "useMuteStates" /* 7675 */;
import VoiceChannelEffectsActionCreators from "VoiceChannelEffectsActionCreators" /* 7676 */;
import getCurrentVoiceChannelDefault from "getCurrentVoiceChannel" /* 7703 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import PermissionStore from "PermissionStore" /* 4464 */;
import UserStore from "UserStore" /* 1372 */;
import SoundboardStore from "SoundboardStore" /* 5311 */;

const require = globalThis.__r;

require = fn;
function hasPermissionToPlaySound(guildId, guild_id) {
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let canResult = null == guild_id;
  if (!canResult) {
    canResult = PermissionStore.can(constants.USE_EXTERNAL_SOUNDS, guild_id);
  }
  if (!canResult) {
    canResult = guildId.guildId === closure_1_10;
  }
  if (!canResult) {
    let guild_id1;
    if (guild_id != null) {
      guild_id1 = guild_id.guild_id;
    }
    canResult = guildId.guildId === guild_id1;
  }
  return canResult;
}
function canUseSoundboardSound(stateFromStores, guildId, guild_id) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  let result = PremiumUtilsDefault.canUseSoundboardEverywhere(stateFromStores);
  if (!result) {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    result = guildId.guildId === guild_id;
  }
  if (!result) {
    result = guildId.guildId === closure_1_10;
  }
  if (result) {
    let guild_id1;
    if (guild_id != null) {
      guild_id1 = guild_id.guild_id;
    }
    let canResult = null == guild_id1;
    if (!canResult) {
      canResult = PermissionStore.can(constants.USE_EXTERNAL_SOUNDS, guild_id);
    }
    if (!canResult) {
      canResult = guildId.guildId === closure_1_10;
    }
    if (!canResult) {
      let guild_id2;
      if (guild_id != null) {
        guild_id2 = guild_id.guild_id;
      }
      canResult = guildId.guildId === guild_id2;
    }
    result = canResult;
  }
  if (result) {
    let available = !flag;
    if (flag) {
      available = guildId.available;
    }
    result = available;
  }
  return result;
}
function canMakeSound(channel) {
  const muteStates = useMuteStates.getMuteStates({ channel });
  const mute = muteStates.mute;
  let tmp2 = !mute;
  if (!mute) {
    tmp2 = !muteStates.suppress;
  }
  return tmp2;
}
let closure_17 = async function _maybePlayCustomJoinSound(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          dependencyMap = tmp3;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          let sound;
          currentUser = currentUser.getCurrentUser();
          closure_129_0 = currentUser;
          const tmp52 = getCurrentVoiceChannelDefault();
          closure_129_1 = tmp52;
          const customJoinSound = require("useCustomJoinSound").getCustomJoinSound(closure_0);
          closure_129_2 = customJoinSound;
          if (null != tmp52) {
            if (!set.has(tmp52.type)) {
              if (null != customJoinSound) {
                if (tmp50Result.canUseCustomCallSounds(currentUser)) {
                  if (tmp53Result.canSelectedVoiceChannelUseSoundboard()) {
                    c3 = 1;
                    c4 = 1;
                    const obj4 = { value: tmp53(7668).maybeFetchSoundboardSounds(), done: false };
                    return obj4;
                  }
                  tmp53Result = tmp53(7705);
                }
                tmp50Result = tmp50(4483);
              }
            }
          }
          const obj9 = require("useCustomJoinSound");
          tmp50 = importDefault;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        if (closure_129_2.guildId === closure_130_9) {
          let guildId = closure_130_10;
        } else {
          guildId = closure_129_2.guildId;
        }
        closure_129_3 = guildId;
        sound = closure_130_8.getSound(closure_129_3, closure_129_2.soundId);
        if (null != sound) {
          let tmp23 = null;
          if (closure_130_14(sound, closure_129_1)) {
            tmp23 = null;
            if (closure_130_15(closure_129_0, sound, closure_129_1, true)) {
              tmp23 = null;
              if (closure_130_16(closure_129_1)) {
                (function playCustomJoinSound(sound, id) {
                  closure_1_0(7668).playSoundLocally(id, sound);
                  const obj = closure_1_0(7668);
                  const result = closure_1_0(7676).sendVoiceChannelCustomCallSoundEffect(id, sound, false);
                })(sound, closure_129_1.id);
              }
            }
          }
          c4 = 3;
          let obj = { value: tmp23, done: true };
          return obj;
        }
      }
      c4 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp33) {
      c4 = tmp;
      throw tmp33;
    }
  }
};
let closure_5 = fn(2048).SILENT_JOIN_LEAVE_CHANNEL_TYPES;
const SoundboardConstants = fn(5313);
({ CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: closure_9, DEFAULT_SOUND_GUILD_ID: c10 } = SoundboardConstants);
const Constants = fn(1074);
({ Permissions: closure_11, AnalyticEvents: closure_12 } = Constants);
const ExpressionPickerViewType = fn(1218).ExpressionPickerViewType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/SoundboardUtils.tsx");

export const getAmplitudinalSoundboardVolume = function getAmplitudinalSoundboardVolume() {
  const SoundboardSettings = UserSettings.SoundboardSettings;
  const setting = SoundboardSettings.getSetting();
  let num;
  if (setting != null) {
    num = setting.volume;
  }
  if (num == null) {
    num = 100;
  }
  return num;
};
export { hasPermissionToPlaySound };
export { canUseSoundboardSound };
export { canMakeSound };
export const playSound = function playSound(soundId, id, arg2, arg3) {
  SoundboardActionCreators.playSoundLocally(id, soundId);
  const result = VoiceChannelEffectsActionCreators.sendVoiceChannelSoundboardEffect(id, soundId, false, arg2, arg3);
  DispatcherDefault.dispatch({ type: "SOUNDBOARD_TRACK_USAGE", soundId: soundId.soundId });
};
export const hasSetAnyCustomJoinSound = function hasSetAnyCustomJoinSound() {
  const guilds = UserSettingsProtoStore.settings.guilds;
  let guilds1;
  if (guilds != null) {
    guilds1 = guilds.guilds;
  }
  if (guilds1 == null) {
    guilds1 = {};
  }
  const values = Object.values(guilds1);
  return values.some((joinSound) => null != joinSound.joinSound);
};
export const maybePlayCustomJoinSound = function maybePlayCustomJoinSound() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useSoundBoardDismissContentTypes = function useSoundBoardDismissContentTypes(isSoundboardButtonDisabled) {
  let flag = isSoundboardButtonDisabled.isSoundboardButtonDisabled;
  if (flag === undefined) {
    flag = false;
  }
  const items = [UserStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [];
  if (!flag) {
    const guilds = UserSettingsProtoStore.settings.guilds;
    let guilds1;
    if (guilds != null) {
      guilds1 = guilds.guilds;
    }
    if (guilds1 == null) {
      guilds1 = {};
    }
    const _Object = Object;
    const values = Object.values(guilds1);
    if (!values.some((joinSound) => null != joinSound.joinSound)) {
      const result = tmp(4673).ageEligibleForPremiumUpsell(stateFromStores);
      const tmpResult = tmp(4673);
      if (tmp9) {
        items1.push(tmp(2028).DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
      }
      tmp9 = PremiumUtilsDefault.canUseCustomCallSounds(stateFromStores) || result;
    }
  }
  return items1;
};
export const removeCustomJoinSound = function removeCustomJoinSound(guildId, _location) {
  _require = guildId;
  const result = require("UserSettingsProtoActionCreators").updateUserGuildSettings(guildId, (arg0) => {
    arg0.joinSound = undefined;
    const obj = { guildId, changeType: SoundboardTypes.AnalyticsChangeType.REMOVED, soundType: SoundboardTypes.AnalyticsSoundType.ENTRY, location: _location };
    guildId = obj.guildId;
    ({ changeType, soundType, soundSource, location: _location } = obj);
    const obj3 = { location_stack: _location, guild_id: null, change_type: null, sound_type: null, sound_source: null };
    let num = 0;
    if ("" !== guildId) {
      const _Number = Number;
      num = Number(guildId);
    }
    obj3.guild_id = num;
    obj3.change_type = changeType;
    obj3.sound_type = soundType;
    obj3.sound_source = soundSource;
    AnalyticsUtilsDefault.track(constants2.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, obj3);
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const updateCustomJoinSound = function updateCustomJoinSound(guildId, arg1, location_stack) {
  _require = guildId;
  guildId = arg1;
  dependencyMap = location_stack;
  const result = require("UserSettingsProtoActionCreators").updateUserGuildSettings(guildId, (joinSound) => {
    const AnalyticsSoundSource = SoundboardTypes.AnalyticsSoundSource;
    if (guildId.guildId === closure_2_10) {
      let CUSTOM = AnalyticsSoundSource.DEFAULT;
      let tmp6 = tmp3;
    } else {
      CUSTOM = AnalyticsSoundSource.CUSTOM;
      tmp6 = tmp3;
    }
    if (null != joinSound.joinSound) {
      let ADDED = tmp6(5320).AnalyticsChangeType.UPDATED;
    } else {
      ADDED = tmp6(5320).AnalyticsChangeType.ADDED;
    }
    joinSound.joinSound = { soundId: guildId.soundId, guildId: guildId.guildId === closure_2_10 ? React7 : guildId.guildId };
    const obj2 = { location_stack, guild_id: null, change_type: null, sound_type: null, sound_source: null };
    let num = 0;
    if ("" !== closure_0) {
      const _Number = Number;
      num = Number(closure_0);
    }
    obj2.guild_id = num;
    obj2.change_type = ADDED;
    obj2.sound_type = tmp6(5320).AnalyticsSoundType.ENTRY;
    obj2.sound_source = CUSTOM;
    AnalyticsUtilsDefault.track(constants2.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, obj2);
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const trackCustomCallSoundExternallyDeleted = function trackCustomCallSoundExternallyDeleted(location_stack) {
  AnalyticsUtilsDefault.track(constants2.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: location_stack.location });
};
export const trackSoundFavorited = function trackSoundFavorited(location) {
  const sound = location.sound;
  AppAnalyticsUtilsDefault.trackWithMetadata(constants2.EXPRESSION_FAVORITED, { location: location.location, expression_type: ExpressionPickerViewType.SOUNDBOARD, expression_id: sound.soundId, expression_name: sound.name, expression_guild_id: sound.guildId });
};
