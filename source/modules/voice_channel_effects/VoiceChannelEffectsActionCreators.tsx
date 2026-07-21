// Module ID: 5736
// Function ID: 49318
// Name: _getCancellationSlowConnection
// Dependencies: []
// Exports: sendVoiceChannelCustomCallSoundEffect, sendVoiceChannelSoundboardEffect

// Module 5736 (_getCancellationSlowConnection)
function _getCancellationSlowConnection(id) {
  const arg1 = id;
  const abortController = new AbortController();
  const importDefault = abortController;
  let obj = arg1(dependencyMap[6]);
  obj = {
    abortController,
    onRequestProgress: obj.throttle(() => {
      if (voiceChannelId.getVoiceChannelId() !== arg0) {
        abortController.abort();
      }
    }, 1000)
  };
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).VoiceChannelEffectAnimationType;
({ Endpoints: closure_7, NOOP_NULL: closure_8 } = arg1(dependencyMap[4]));
const DEFAULT_SOUND_GUILD_ID = arg1(dependencyMap[5]).DEFAULT_SOUND_GUILD_ID;
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx");

export const VoiceChannelEffectSentLocation = { EMOJI_PICKER: "emoji_picker", EFFECT_BAR: "effect_bar" };
export const sendVoiceChannelCustomCallSoundEffect = function sendVoiceChannelCustomCallSoundEffect(id, sound, arg2) {
  const tmp = _getCancellationSlowConnection(id);
  const abortController = tmp.abortController;
  sound = abortController;
  let BASIC = state.getState().animationType;
  if (null == BASIC) {
    BASIC = constants.BASIC;
  }
  let obj = { animation_type: BASIC, animation_id: sound(dependencyMap[7]).sampleAnimationId(BASIC, sound(dependencyMap[7]).CUSTOM_CALL_SOUND_ANIMATION_RANGE) };
  const HTTP = sound(dependencyMap[8]).HTTP;
  obj = { url: closure_7.CUSTOM_CALL_SOUNDS(id), body: obj, signal: abortController.signal, onRequestProgress: tmp.onRequestProgress, rejectWithError: true };
  const obj2 = sound(dependencyMap[7]);
  HTTP.post(obj).then(closure_8, () => {

  });
  const postResult = HTTP.post(obj);
  const items = [importDefault(dependencyMap[10]).CHANNEL_CALL];
  importDefault(dependencyMap[9])(items, arg2, sound, sound(dependencyMap[11]).AnalyticsSoundType.ENTRY);
};
export const sendVoiceChannelSoundboardEffect = function sendVoiceChannelSoundboardEffect(id, emojiId, arg2, arg3, arg4) {
  let items = arg3;
  let customEmojiById = null;
  if (null != emojiId.emojiId) {
    customEmojiById = customEmojiById.getCustomEmojiById(emojiId.emojiId);
  }
  const tmp3 = _getCancellationSlowConnection(id);
  const abortController = tmp3.abortController;
  emojiId = abortController;
  let obj = { sound_id: emojiId.soundId, emoji_id: emojiId.emojiId };
  let emojiName = emojiId.emojiName;
  if (null == emojiName) {
    let name;
    if (null != customEmojiById) {
      name = customEmojiById.name;
    }
    emojiName = name;
  }
  obj.emoji_name = emojiName;
  if (emojiId.guildId !== DEFAULT_SOUND_GUILD_ID) {
    obj.source_guild_id = emojiId.guildId;
  }
  const HTTP = emojiId(dependencyMap[8]).HTTP;
  obj = { url: closure_7.SEND_SOUNDBOARD_SOUND(id), body: obj, signal: abortController.signal, onRequestProgress: tmp3.onRequestProgress, rejectWithError: true };
  HTTP.post(obj).then(closure_8, () => {

  });
  const postResult = HTTP.post(obj);
  if (null == items) {
    items = [];
  }
  importDefault(dependencyMap[9])(items, arg2, emojiId, emojiId(dependencyMap[11]).AnalyticsSoundType.DEFAULT, arg4);
};
