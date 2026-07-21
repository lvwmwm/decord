// Module ID: 5734
// Function ID: 49301
// Name: hasPermissionToPlaySound
// Dependencies: []
// Exports: getAmplitudinalSoundboardVolume, maybePlayCustomJoinSound, playSound, removeCustomJoinSound, trackCustomCallSoundExternallyDeleted, trackSoundFavorited, updateCustomJoinSound, useSoundBoardDismissContentTypes

// Module 5734 (hasPermissionToPlaySound)
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
  let result = importDefault(dependencyMap[10]).canUseSoundboardEverywhere(currentUser);
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
  let obj = arg1(dependencyMap[11]);
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
async function _maybePlayCustomJoinSound(arg0, arg1) {
  const currentUser = currentUser.getCurrentUser();
  const tmp2 = callback2(closure_2[16])();
  const customJoinSound = callback(closure_2[17]).getCustomJoinSound(arg0);
  if (null != tmp2) {
    if (!set.has(tmp2.type)) {
      if (null != customJoinSound) {
        if (obj6.canUseCustomCallSounds(currentUser)) {
          if (obj2.canSelectedVoiceChannelUseSoundboard()) {
            yield callback(closure_2[12]).maybeFetchSoundboardSounds();
            const sound = sound.getSound(customJoinSound.guildId === closure_9 ? closure_10 : customJoinSound.guildId, customJoinSound.soundId);
            if (null != sound) {
              let tmp16 = null;
              if (callback3(sound, tmp2)) {
                tmp16 = null;
                if (callback4(currentUser, sound, tmp2, true)) {
                  tmp16 = null;
                  if (callback5(tmp2)) {
                    const id = tmp2.id;
                    callback(closure_2[12]).playSoundLocally(id, sound, callback(closure_2[13]).LocalSoundTrigger.JOINED_VOICE_CHANNEL);
                    const obj4 = callback(closure_2[12]);
                    const result = callback(closure_2[14]).sendVoiceChannelCustomCallSoundEffect(id, sound, false);
                    const obj5 = callback(closure_2[14]);
                  }
                }
              }
              return tmp16;
            }
            const obj3 = callback(closure_2[12]);
          }
          const obj2 = callback(closure_2[18]);
        }
        const obj6 = callback2(closure_2[10]);
      }
    }
  }
}
function trackCustomCallSettingsChanged(guildId) {
  let _location;
  let changeType;
  let soundSource;
  let soundType;
  guildId = guildId.guildId;
  ({ changeType, soundType, soundSource, location: _location } = guildId);
  let obj = importDefault(dependencyMap[23]);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).SILENT_JOIN_LEAVE_CHANNEL_TYPES;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: closure_9, DEFAULT_SOUND_GUILD_ID: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ Permissions: closure_11, AnalyticEvents: closure_12 } = arg1(dependencyMap[7]));
const ExpressionPickerViewType = arg1(dependencyMap[8]).ExpressionPickerViewType;
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/soundboard/SoundboardUtils.tsx");

export const getAmplitudinalSoundboardVolume = function getAmplitudinalSoundboardVolume() {
  let volume;
  const SoundboardSettings = arg1(dependencyMap[9]).SoundboardSettings;
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
  let obj = channelId(dependencyMap[12]);
  obj.playSoundLocally(channelId, soundId, channelId(dependencyMap[13]).LocalSoundTrigger.SOUNDBOARD);
  const result = channelId(dependencyMap[14]).sendVoiceChannelSoundboardEffect(channelId, soundId, false, arg2, arg3);
  const obj2 = channelId(dependencyMap[14]);
  obj = { type: "SOUNDBOARD_TRACK_USAGE", soundId: soundId.soundId };
  importDefault(dependencyMap[15]).dispatch(obj);
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
  const stateFromStores = arg1(dependencyMap[19]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [];
  if (!flag) {
    if (!hasSetAnyCustomJoinSound()) {
      const result = arg1(dependencyMap[20]).ageEligibleForPremiumUpsell(stateFromStores);
      const obj2 = arg1(dependencyMap[20]);
      const obj3 = importDefault(dependencyMap[10]);
      if (tmp7) {
        items1.push(arg1(dependencyMap[21]).DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
      }
      const tmp7 = importDefault(dependencyMap[10]).canUseCustomCallSounds(stateFromStores) || result;
    }
  }
  return items1;
};
export const removeCustomJoinSound = function removeCustomJoinSound(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const result = arg1(dependencyMap[22]).updateUserGuildSettings(arg0, (arg0) => {
    arg0.joinSound = undefined;
    callback({ guildId: arg0, changeType: arg0(closure_2[13]).AnalyticsChangeType.REMOVED, soundType: arg0(closure_2[13]).AnalyticsSoundType.ENTRY, location: arg1 });
  }, arg1(dependencyMap[22]).UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const updateCustomJoinSound = function updateCustomJoinSound(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const result = arg1(dependencyMap[22]).updateUserGuildSettings(arg0, (joinSound, self) => {
    const AnalyticsSoundSource = joinSound(arg2[13]).AnalyticsSoundSource;
    if (null != joinSound.joinSound) {
      let ADDED = joinSound(arg2[13]).AnalyticsChangeType.UPDATED;
    } else {
      ADDED = joinSound(arg2[13]).AnalyticsChangeType.ADDED;
    }
    let obj = { soundId: self.soundId };
    if (self.guildId === closure_10) {
      let guildId = closure_9;
    } else {
      guildId = self.guildId;
    }
    obj.guildId = guildId;
    joinSound.joinSound = obj;
    obj = { guildId: joinSound, changeType: ADDED, soundSource: self.guildId === closure_10 ? AnalyticsSoundSource.DEFAULT : AnalyticsSoundSource.CUSTOM, soundType: joinSound(arg2[13]).AnalyticsSoundType.ENTRY, location: arg2 };
    callback(obj);
  }, arg1(dependencyMap[22]).UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const trackCustomCallSoundExternallyDeleted = function trackCustomCallSoundExternallyDeleted(location_stack) {
  importDefault(dependencyMap[23]).track(constants2.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: location_stack.location });
};
export const trackSoundFavorited = function trackSoundFavorited(location) {
  const sound = location.sound;
  let obj = importDefault(dependencyMap[24]);
  obj = { location: location.location, expression_type: ExpressionPickerViewType.SOUNDBOARD, expression_id: sound.soundId, expression_name: sound.name, expression_guild_id: sound.guildId };
  obj.trackWithMetadata(constants2.EXPRESSION_FAVORITED, obj);
};
