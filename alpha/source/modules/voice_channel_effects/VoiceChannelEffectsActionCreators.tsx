// Module ID: 7521
// Function ID: 7522
// Name: VoiceChannelEffectsActionCreators
// Dependencies: [6790, 4912, 7522, 7523, 1072, 6055, 12, 7524, 1283, 7547, 7345, 7512, 2]
// Exports: sendVoiceChannelCustomCallSoundEffect, sendVoiceChannelSoundboardEcho, sendVoiceChannelSoundboardEffect

// Module 7521 (VoiceChannelEffectsActionCreators)
import SoundboardConstants from "SoundboardConstants" /* 6055 */;
import VoiceChannelEffectsConstants from "VoiceChannelEffectsConstants" /* 7523 */;
import EmojiStore from "EmojiStore" /* 6790 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import VoiceChannelEffectsPersistedStore from "VoiceChannelEffectsPersistedStore" /* 7522 */;
import Constants from "Constants" /* 1072 */;
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
export function sendVoiceChannelCustomCallSoundEffect(id, sound, arg2) {
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
  const HTTP = tmp2(1283).HTTP;
  const request = { url: closure_7.CUSTOM_CALL_SOUNDS(id), body: obj2, signal: abortController.signal, onRequestProgress: throttleResult, rejectWithError: true };
  const postResult = HTTP.post(request);
  postResult.then(closure_8, () => {

  });
  const items = [];
  const tmp7 = abortController(7547);
  items[0] = abortController(7345).CHANNEL_CALL;
  tmp7(items, arg2, sound, require("SoundboardTypes").AnalyticsSoundType.ENTRY);
}
export function sendVoiceChannelSoundboardEffect(arg0, emojiId, arg2, arg3, arg4) {
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
  const HTTP = tmp4(1283).HTTP;
  const request = { url: closure_7.SEND_SOUNDBOARD_SOUND(arg0), body: obj2, signal: abortController.signal, onRequestProgress: throttleResult, rejectWithError: true };
  const postResult = HTTP.post(request);
  postResult.then(closure_8, () => {

  });
  const tmp9 = abortController(7547);
  if (arg3 == null) {
    items = [];
  }
  tmp9(items, arg2, emojiId, require("SoundboardTypes").AnalyticsSoundType.DEFAULT, arg4);
}
export function sendVoiceChannelSoundboardEcho(arg0, soundId, arg2, arg3) {
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
  const tmp6 = abortController(7547);
  if (arg3 == null) {
    items = [];
  }
  tmp6(items, arg2, soundId, tmp2(7512).AnalyticsSoundType.ECHO);
}
