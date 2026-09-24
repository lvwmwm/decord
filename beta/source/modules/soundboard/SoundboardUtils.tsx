// Module ID: 7620
// Function ID: 7621
// Name: SoundboardUtils
// Dependencies: [5, 1224, 2049, 4431, 1376, 5258, 5260, 1078, 1222, 2023, 4450, 7621, 7614, 7622, 577, 7649, 7650, 7651, 558, 568, 565, 4635, 2031, 2028, 5266, 1245, 4970, 2]
// Exports: getAmplitudinalSoundboardVolume, hasSetAnyCustomJoinSound, maybePlayCustomJoinSound, playSound, removeCustomJoinSound, trackCustomCallSoundExternallyDeleted, trackSoundFavorited, updateCustomJoinSound

// Module 7620 (SoundboardUtils)
import useStateFromStores from "useStateFromStores" /* 565 */;
import c from "c" /* 568 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import UserSettings from "UserSettings" /* 2023 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4450 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4970 */;
import SoundboardTypes from "SoundboardTypes" /* 5266 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7614 */;
import useMuteStates from "useMuteStates" /* 7621 */;
import VoiceChannelEffectsActionCreators from "VoiceChannelEffectsActionCreators" /* 7622 */;
import getCurrentVoiceChannelDefault from "getCurrentVoiceChannel" /* 7649 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1224 */;
import PermissionStore from "PermissionStore" /* 4431 */;
import UserStore from "UserStore" /* 1376 */;
import SoundboardStore from "SoundboardStore" /* 5258 */;

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
    canResult = guildId.guildId === v65535;
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
    result = guildId.guildId === v65535;
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
      canResult = guildId.guildId === v65535;
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
      return { value: "IconComponent", done: null };
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
                    const obj4 = { value: tmp53(7614).maybeFetchSoundboardSounds(), done: false };
                    return obj4;
                  }
                  tmp53Result = tmp53(7651);
                }
                tmp50Result = tmp50(4450);
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
                  closure_1_0(7614).playSoundLocally(id, sound);
                  const obj = closure_1_0(7614);
                  const result = closure_1_0(7622).sendVoiceChannelCustomCallSoundEffect(id, sound, false);
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
      return { value: "IconComponent", done: null };
    } catch (tmp33) {
      c4 = tmp;
      throw tmp33;
    }
  }
};
let closure_5 = fn(2049).SILENT_JOIN_LEAVE_CHANNEL_TYPES;
const SoundboardConstants = fn(5260);
({ CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: closure_9, DEFAULT_SOUND_GUILD_ID: c10 } = SoundboardConstants);
const Constants = fn(1078);
({ Permissions: closure_11, AnalyticEvents: closure_12 } = Constants);
const ExpressionPickerViewType = fn(1222).ExpressionPickerViewType;
const ReactCompilerGating = fn(558);
function hasSetAnyCustomJoinSound() {
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
}
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
export { hasSetAnyCustomJoinSound };
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
export const useSoundBoardDismissContentTypes = ReactCompilerGating.isReactCompilerEnabled() ? ((isSoundboardButtonDisabled) => {
  const cResult = c.c(5);
  isSoundboardButtonDisabled = isSoundboardButtonDisabled.isSoundboardButtonDisabled;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === tmp4) {
      let tmp9 = cResult[4];
    }
    return tmp9;
  }
  const items1 = [];
  if (!(undefined !== isSoundboardButtonDisabled && isSoundboardButtonDisabled)) {
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
      const result = tmp(4635).ageEligibleForPremiumUpsell(stateFromStores);
      const tmpResult2 = tmp(4635);
      if (tmp14) {
        items1.push(tmp(2031).DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
      }
      tmp14 = PremiumUtilsDefault.canUseCustomCallSounds(stateFromStores) || result;
    }
  }
  cResult[2] = stateFromStores;
  cResult[3] = undefined !== isSoundboardButtonDisabled && isSoundboardButtonDisabled;
  cResult[4] = items1;
  tmp9 = items1;
}) : ((isSoundboardButtonDisabled) => {
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
      const result = tmp(4635).ageEligibleForPremiumUpsell(stateFromStores);
      const tmpResult = tmp(4635);
      if (tmp9) {
        items1.push(tmp(2031).DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
      }
      tmp9 = PremiumUtilsDefault.canUseCustomCallSounds(stateFromStores) || result;
    }
  }
  return items1;
});
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
    if (guildId.guildId === v65535) {
      let CUSTOM = AnalyticsSoundSource.DEFAULT;
      let tmp6 = tmp3;
    } else {
      CUSTOM = AnalyticsSoundSource.CUSTOM;
      tmp6 = tmp3;
    }
    if (null != joinSound.joinSound) {
      let ADDED = tmp6(5266).AnalyticsChangeType.UPDATED;
    } else {
      ADDED = tmp6(5266).AnalyticsChangeType.ADDED;
    }
    joinSound.joinSound = { soundId: guildId.soundId, guildId: guildId.guildId === v65535 ? options : guildId.guildId };
    const obj2 = { location_stack, guild_id: null, change_type: null, sound_type: null, sound_source: null };
    let num = 0;
    if ("" !== closure_0) {
      const _Number = Number;
      num = Number(closure_0);
    }
    obj2.guild_id = num;
    obj2.change_type = ADDED;
    obj2.sound_type = tmp6(5266).AnalyticsSoundType.ENTRY;
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
