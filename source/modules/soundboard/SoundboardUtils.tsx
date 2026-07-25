// Module ID: 10713
// Function ID: 83309
// Name: hasPermissionToPlaySound
// Dependencies: [5, 1316, 1352, 3759, 1850, 4579, 4580, 653, 1314, 3804, 3777, 10714, 7986, 4586, 10715, 686, 10718, 10719, 10720, 624, 3970, 1334, 1331, 675, 4325, 2]
// Exports: getAmplitudinalSoundboardVolume, maybePlayCustomJoinSound, playSound, removeCustomJoinSound, trackCustomCallSoundExternallyDeleted, trackSoundFavorited, updateCustomJoinSound, useSoundBoardDismissContentTypes

// Module 10713 (hasPermissionToPlaySound)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { SILENT_JOIN_LEAVE_CHANNEL_TYPES as closure_5 } from "_callSuper";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import MAX_LENGTH_SOUND_NAME from "MAX_LENGTH_SOUND_NAME";
import ME from "ME";
import { ExpressionPickerViewType } from "ExpressionPickerViewType";

let closure_10;
let closure_11;
let closure_12;
let closure_9;
const require = arg1;
function hasPermissionToPlaySound(guildId, guild_id) {
  guild_id = undefined;
  if (null != guild_id) {
    guild_id = guild_id.guild_id;
  }
  let canResult = null == guild_id;
  if (!canResult) {
    canResult = closure_6.can(constants.USE_EXTERNAL_SOUNDS, guild_id);
  }
  if (!canResult) {
    canResult = guildId.guildId === closure_10;
  }
  if (!canResult) {
    let guild_id1;
    if (null != guild_id) {
      guild_id1 = guild_id.guild_id;
    }
    canResult = guildId.guildId === guild_id1;
  }
  return canResult;
}
function canUseSoundboardSound(currentUser, sound, channel) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  let result = importDefault(3777).canUseSoundboardEverywhere(currentUser);
  if (!result) {
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    result = sound.guildId === guild_id;
  }
  if (!result) {
    result = sound.guildId === closure_10;
  }
  if (result) {
    result = hasPermissionToPlaySound(sound, channel);
  }
  if (result) {
    result = !flag || sound.available;
    const tmp6 = !flag || sound.available;
  }
  return result;
}
function canMakeSound(channel) {
  let obj = require(10714) /* getMuteStates */;
  obj = { channel };
  const muteStates = obj.getMuteStates(obj);
  return !muteStates.mute && !muteStates.suppress;
}
function hasSetAnyCustomJoinSound() {
  let guilds = settings.settings.guilds;
  guilds = undefined;
  if (null != guilds) {
    guilds = guilds.guilds;
  }
  if (null == guilds) {
    guilds = {};
  }
  const values = Object.values(guilds);
  return values.some((joinSound) => null != joinSound.joinSound);
}
function _maybePlayCustomJoinSound() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function trackCustomCallSettingsChanged(guildId) {
  let _location;
  let changeType;
  let soundSource;
  let soundType;
  guildId = guildId.guildId;
  ({ changeType, soundType, soundSource, location: _location } = guildId);
  let obj = importDefault(675);
  obj = { location_stack: _location };
  let num = 0;
  if ("" !== guildId) {
    const _Number = Number;
    num = Number(guildId);
  }
  obj.guild_id = num;
  obj.change_type = changeType;
  obj.sound_type = soundType;
  obj.sound_source = soundSource;
  obj.track(constants2.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, obj);
}
({ CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: closure_9, DEFAULT_SOUND_GUILD_ID: closure_10 } = MAX_LENGTH_SOUND_NAME);
({ Permissions: closure_11, AnalyticEvents: closure_12 } = ME);
let result = require("_callSuper").fileFinishedImporting("modules/soundboard/SoundboardUtils.tsx");

export const getAmplitudinalSoundboardVolume = function getAmplitudinalSoundboardVolume() {
  let volume;
  const SoundboardSettings = require(3804) /* explicitContentFromProto */.SoundboardSettings;
  const setting = SoundboardSettings.getSetting();
  if (null != setting) {
    volume = setting.volume;
  }
  let num = 100;
  if (null != volume) {
    num = volume;
  }
  return num;
};
export { hasPermissionToPlaySound };
export { canUseSoundboardSound };
export { canMakeSound };
export const playSound = function playSound(soundId, channelId) {
  let obj = require(7986) /* _fetchDefaultSoundsFromApi2 */;
  obj.playSoundLocally(channelId, soundId, require(4586) /* SoundButtonOverlay */.LocalSoundTrigger.SOUNDBOARD);
  const result = require(10715) /* _getCancellationSlowConnection */.sendVoiceChannelSoundboardEffect(channelId, soundId, false, arg2, arg3);
  const obj2 = require(10715) /* _getCancellationSlowConnection */;
  obj = { type: "SOUNDBOARD_TRACK_USAGE", soundId: soundId.soundId };
  importDefault(686).dispatch(obj);
};
export { hasSetAnyCustomJoinSound };
export const maybePlayCustomJoinSound = function maybePlayCustomJoinSound() {
  return _maybePlayCustomJoinSound(...arguments);
};
export const useSoundBoardDismissContentTypes = function useSoundBoardDismissContentTypes(isSoundboardButtonDisabled) {
  let flag = isSoundboardButtonDisabled.isSoundboardButtonDisabled;
  if (flag === undefined) {
    flag = false;
  }
  const items = [closure_7];
  const stateFromStores = require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => outer1_7.getCurrentUser());
  const items1 = [];
  if (!flag) {
    if (!hasSetAnyCustomJoinSound()) {
      const result = require(3970) /* conceal */.ageEligibleForPremiumUpsell(stateFromStores);
      const obj2 = require(3970) /* conceal */;
      const obj3 = importDefault(3777);
      if (tmp7) {
        items1.push(require(1334) /* DismissibleContent */.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
      }
      tmp7 = importDefault(3777).canUseCustomCallSounds(stateFromStores) || result;
    }
  }
  return items1;
};
export const removeCustomJoinSound = function removeCustomJoinSound(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const result = _require(1331).updateUserGuildSettings(arg0, (arg0) => {
    arg0.joinSound = undefined;
    outer1_19({ guildId: callback, changeType: callback(outer1_2[13]).AnalyticsChangeType.REMOVED, soundType: callback(outer1_2[13]).AnalyticsSoundType.ENTRY, location: closure_1 });
  }, _require(1331).UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const updateCustomJoinSound = function updateCustomJoinSound(arg0, arg1, arg2) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const result = _require(1331).updateUserGuildSettings(arg0, (joinSound) => {
    const AnalyticsSoundSource = callback(4586).AnalyticsSoundSource;
    if (null != joinSound.joinSound) {
      let ADDED = callback(4586).AnalyticsChangeType.UPDATED;
    } else {
      ADDED = callback(4586).AnalyticsChangeType.ADDED;
    }
    let obj = { soundId: closure_1.soundId };
    if (closure_1.guildId === outer1_10) {
      let guildId = outer1_9;
    } else {
      guildId = closure_1.guildId;
    }
    obj.guildId = guildId;
    joinSound.joinSound = obj;
    obj = { guildId: callback, changeType: ADDED, soundSource: closure_1.guildId === outer1_10 ? AnalyticsSoundSource.DEFAULT : AnalyticsSoundSource.CUSTOM, soundType: callback(4586).AnalyticsSoundType.ENTRY, location: dependencyMap };
    outer1_19(obj);
  }, _require(1331).UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const trackCustomCallSoundExternallyDeleted = function trackCustomCallSoundExternallyDeleted(location_stack) {
  importDefault(675).track(constants2.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: location_stack.location });
};
export const trackSoundFavorited = function trackSoundFavorited(location) {
  const sound = location.sound;
  let obj = importDefault(4325);
  obj = { location: location.location, expression_type: ExpressionPickerViewType.SOUNDBOARD, expression_id: sound.soundId, expression_name: sound.name, expression_guild_id: sound.guildId };
  obj.trackWithMetadata(constants2.EXPRESSION_FAVORITED, obj);
};
