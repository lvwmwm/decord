// Module ID: 5741
// Function ID: 49375
// Name: _getCancellationSlowConnection
// Dependencies: [4991, 1906, 5742, 5743, 653, 4579, 22, 5744, 507, 5767, 5482, 4585, 2]
// Exports: sendVoiceChannelCustomCallSoundEffect, sendVoiceChannelSoundboardEffect

// Module 5741 (_getCancellationSlowConnection)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { VoiceChannelEffectAnimationType as closure_6 } from "VoiceChannelEffectAnimationType";
import ME from "ME";
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME";

let closure_7;
let closure_8;
const require = arg1;
function _getCancellationSlowConnection(id) {
  const _require = id;
  const abortController = new AbortController();
  let obj = _require(22);
  obj = {
    abortController,
    onRequestProgress: obj.throttle(() => {
      if (outer1_4.getVoiceChannelId() !== closure_0) {
        abortController.abort();
      }
    }, 1000)
  };
  return obj;
}
({ Endpoints: closure_7, NOOP_NULL: closure_8 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx");

export const VoiceChannelEffectSentLocation = { EMOJI_PICKER: "emoji_picker", EFFECT_BAR: "effect_bar" };
export const sendVoiceChannelCustomCallSoundEffect = function sendVoiceChannelCustomCallSoundEffect(id, sound, arg2) {
  const tmp = _getCancellationSlowConnection(id);
  const abortController = tmp.abortController;
  let BASIC = state.getState().animationType;
  if (null == BASIC) {
    BASIC = constants.BASIC;
  }
  let obj = { animation_type: BASIC, animation_id: abortController(5744).sampleAnimationId(BASIC, abortController(5744).CUSTOM_CALL_SOUND_ANIMATION_RANGE) };
  const HTTP = abortController(507).HTTP;
  obj = { url: closure_7.CUSTOM_CALL_SOUNDS(id), body: obj, signal: abortController.signal, onRequestProgress: tmp.onRequestProgress, rejectWithError: true };
  const obj2 = abortController(5744);
  HTTP.post(obj).then(closure_8, () => {

  });
  const postResult = HTTP.post(obj);
  const items = [importDefault(5482).CHANNEL_CALL];
  importDefault(5767)(items, arg2, sound, abortController(4585).AnalyticsSoundType.ENTRY);
};
export const sendVoiceChannelSoundboardEffect = function sendVoiceChannelSoundboardEffect(id, emojiId, arg2, arg3, arg4) {
  let items = arg3;
  let customEmojiById = null;
  if (null != emojiId.emojiId) {
    customEmojiById = customEmojiById.getCustomEmojiById(emojiId.emojiId);
  }
  const tmp3 = _getCancellationSlowConnection(id);
  const abortController = tmp3.abortController;
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
  const HTTP = abortController(507).HTTP;
  obj = { url: closure_7.SEND_SOUNDBOARD_SOUND(id), body: obj, signal: abortController.signal, onRequestProgress: tmp3.onRequestProgress, rejectWithError: true };
  HTTP.post(obj).then(closure_8, () => {

  });
  const postResult = HTTP.post(obj);
  if (null == items) {
    items = [];
  }
  importDefault(5767)(items, arg2, emojiId, abortController(4585).AnalyticsSoundType.DEFAULT, arg4);
};
