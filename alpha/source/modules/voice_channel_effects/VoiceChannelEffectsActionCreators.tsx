// Module ID: 6859
// Function ID: 6860
// Name: VoiceChannelEffectsActionCreators
// Dependencies: [5645, 2103, 6860, 6861, 1085, 5689, 12, 6862, 1282, 6885, 6688, 5812, 2]
// Exports: sendVoiceChannelCustomCallSoundEffect, sendVoiceChannelSoundboardEcho, sendVoiceChannelSoundboardEffect

// Module 6859 (VoiceChannelEffectsActionCreators)
import SoundboardConstants from "SoundboardConstants" /* 5689 */;
import VoiceChannelEffectsConstants from "VoiceChannelEffectsConstants" /* 6861 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import VoiceChannelEffectsPersistedStore from "VoiceChannelEffectsPersistedStore" /* 6860 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
const constants = VoiceChannelEffectsConstants.VoiceChannelEffectAnimationType;
({ Endpoints: metroImportDefault, NOOP_NULL: metroImportAll } = Constants);
const DEFAULT_SOUND_GUILD_ID = SoundboardConstants.DEFAULT_SOUND_GUILD_ID;
const result = size.fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx");

export const VoiceChannelEffectSentLocation = { EMOJI_PICKER: "emoji_picker", EFFECT_BAR: "effect_bar" };
export const sendVoiceChannelCustomCallSoundEffect = function sendVoiceChannelCustomCallSoundEffect(id, sound, arg2) {
  let tmp2Result;
  _require = id;
  const abortController = new AbortController();
  const obj = require("module_12");
  const throttleResult = obj.throttle(() => {
    if (SelectedChannelStore.getVoiceChannelId() !== closure_0) {
      abortController.abort();
    }
  }, 1000);
  let BASIC = VoiceChannelEffectsPersistedStore.getState().animationType;
  if (BASIC == null) {
    BASIC = constants.BASIC;
  }
  const obj2 = { animation_type: BASIC, animation_id: tmp2Result.sampleAnimationId(BASIC, require("VoiceChannelEffectsUtils").CUSTOM_CALL_SOUND_ANIMATION_RANGE) };
  tmp2Result = require("VoiceChannelEffectsUtils");
  const HTTP = tmp2(1282).HTTP;
  const request = { url: closure_7.CUSTOM_CALL_SOUNDS(id), body: obj2, signal: abortController.signal, onRequestProgress: throttleResult, rejectWithError: true };
  const postResult = HTTP.post(request);
  postResult.then(closure_8, () => {

  });
  const items = [];
  const tmp7 = abortController(6885);
  items[0] = abortController(6688).CHANNEL_CALL;
  tmp7(items, arg2, sound, require("SoundboardTypes").AnalyticsSoundType.ENTRY);
};
export const sendVoiceChannelSoundboardEffect = function sendVoiceChannelSoundboardEffect(arg0, emojiId, arg2, arg3, arg4) {
  let closure_0;
  let emojiName;
  let customEmojiById = null;
  if (null != emojiId.emojiId) {
    customEmojiById = EmojiStore.getCustomEmojiById(emojiId.emojiId);
  }
  _require = arg0;
  const abortController = new AbortController();
  const obj2 = { sound_id: emojiId.soundId, emoji_id: emojiId.emojiId, emoji_name: emojiName };
  emojiName = emojiId.emojiName;
  const obj = require("module_12");
  const throttleResult = obj.throttle(() => {
    if (SelectedChannelStore.getVoiceChannelId() !== closure_0) {
      abortController.abort();
    }
  }, 1000);
  if (emojiName == null) {
    let name;
    if (customEmojiById != null) {
      name = customEmojiById.name;
    }
    emojiName = name;
  }
  if (emojiId.guildId !== DEFAULT_SOUND_GUILD_ID) {
    obj2.source_guild_id = emojiId.guildId;
  }
  let items = arg3;
  const HTTP = tmp4(1282).HTTP;
  const request = { url: closure_7.SEND_SOUNDBOARD_SOUND(arg0), body: obj2, signal: abortController.signal, onRequestProgress: throttleResult, rejectWithError: true };
  const postResult = HTTP.post(request);
  postResult.then(closure_8, () => {

  });
  const tmp9 = abortController(6885);
  if (arg3 == null) {
    items = [];
  }
  tmp9(items, arg2, emojiId, require("SoundboardTypes").AnalyticsSoundType.DEFAULT, arg4);
};
export const sendVoiceChannelSoundboardEcho = function sendVoiceChannelSoundboardEcho(arg0, soundId, arg2, arg3) {
  let closure_0;
  let items = arg3;
  _require = arg0;
  const abortController = new AbortController();
  const obj = require("module_12");
  const obj2 = { sound_id: soundId.soundId, source_guild_id: soundId.guildId };
  const throttleResult = obj.throttle(() => {
    if (SelectedChannelStore.getVoiceChannelId() !== closure_0) {
      abortController.abort();
    }
  }, 1000);
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: closure_7.SEND_SOUNDBOARD_ECHO(arg0), body: obj2, signal: abortController.signal, onRequestProgress: throttleResult, rejectWithError: true };
  const postResult = HTTP.post(request);
  postResult.then(closure_8, () => {

  });
  const tmp2 = _require;
  const tmp6 = abortController(6885);
  if (arg3 == null) {
    items = [];
  }
  tmp6(items, arg2, soundId, tmp2(5812).AnalyticsSoundType.ECHO);
};
