// Module ID: 4581
// Function ID: 40170
// Name: SoundButtonOverlay
// Dependencies: []
// Exports: soundboardSoundFromAPI, soundboardSoundToAPI

// Module 4581 (SoundButtonOverlay)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/soundboard/SoundboardTypes.tsx");

export const SoundButtonOverlay = { NONE: 0, [0]: "NONE", PLAY: 1, [1]: "PLAY", ADD: 2, [2]: "ADD", SOUNDMOJI: 3, [3]: "SOUNDMOJI" };
export const AnalyticsSoundType = { ENTRY: "entry_sound", EXIT: "exit_sound", DEFAULT: "default" };
export const AnalyticsChangeType = { ADDED: "added", UPDATED: "updated", REMOVED: "removed" };
export const AnalyticsSoundSource = { DEFAULT: "default", CUSTOM: "custom" };
export const soundboardSoundFromAPI = function soundboardSoundFromAPI(body, guildId) {
  let emoji_id;
  let emoji_name;
  let sound_id;
  let user_id;
  const available = body.available;
  let obj = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false };
  ({ sound_id, emoji_id, emoji_name, user_id } = body);
  Object.setPrototypeOf(null);
  obj = {};
  const merged = Object.assign(Object.assign(body, obj));
  obj["soundId"] = sound_id;
  obj["guildId"] = guildId;
  obj["emojiId"] = emoji_id;
  obj["emojiName"] = emoji_name;
  obj["userId"] = user_id;
  obj["available"] = null == available || available;
  return obj;
};
export const soundboardSoundToAPI = function soundboardSoundToAPI(arg0) {
  let emojiId;
  let emojiName;
  let guildId;
  let soundId;
  let userId;
  let obj = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false };
  ({ soundId, guildId, emojiId, emojiName, userId } = arg0);
  Object.setPrototypeOf(null);
  obj = {};
  const merged = Object.assign(Object.assign(arg0, obj));
  obj["sound_id"] = soundId;
  obj["guild_id"] = guildId;
  obj["emoji_id"] = emojiId;
  obj["emoji_name"] = emojiName;
  obj["user_id"] = userId;
  return obj;
};
export const SoundboardSoundGridSectionType = { FAVORITES: 0, [0]: "FAVORITES", GUILD: 1, [1]: "GUILD", DEFAULTS: 2, [2]: "DEFAULTS", SEARCH: 3, [3]: "SEARCH", FREQUENTLY_USED: 4, [4]: "FREQUENTLY_USED" };
export const SoundboardSoundItemType = { SOUND: 0, [0]: "SOUND", ADD_SOUND: 1, [1]: "ADD_SOUND" };
export const LocalSoundTrigger = { GIFT_CODE: 0, [0]: "GIFT_CODE", SOUNDBOARD: 1, [1]: "SOUNDBOARD", JOINED_VOICE_CHANNEL: 2, [2]: "JOINED_VOICE_CHANNEL", SOUNDMOJI: 3, [3]: "SOUNDMOJI" };
