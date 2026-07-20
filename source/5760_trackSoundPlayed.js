// Module ID: 5760
// Function ID: 49324
// Name: trackSoundPlayed
// Dependencies: []
// Exports: default

// Module 5760 (trackSoundPlayed)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const DEFAULT_SOUND_GUILD_ID = arg1(dependencyMap[4]).DEFAULT_SOUND_GUILD_ID;
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
({ AnalyticsPremiumFeatureNames: closure_8, AnalyticsPremiumFeatureTiers: closure_9 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/soundboard/trackSoundPlayed.tsx");

export default function trackSoundPlayed(location_stack, in_overlay, guildId, sound_type) {
  const channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
  guildId = undefined;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  const mediaSessionId = store.getMediaSessionId();
  const rTCConnectionId = store.getRTCConnectionId();
  const currentGameForAnalytics = currentGameForAnalytics.getCurrentGameForAnalytics();
  let name;
  if (null != currentGameForAnalytics) {
    name = currentGameForAnalytics.name;
  }
  let tmp6 = guildId !== guildId.guildId;
  if (tmp6) {
    tmp6 = guildId.guildId !== DEFAULT_SOUND_GUILD_ID;
  }
  let str = "default";
  if (guildId.guildId !== DEFAULT_SOUND_GUILD_ID) {
    let str2 = "custom";
    if (tmp6) {
      str2 = "custom-external";
    }
    str = str2;
  }
  const obj = { feature_name: constants.SOUNDBOARD_PLAY, feature_tier: tmp6 ? tmp8.PREMIUM_STANDARD : tmp8.FREE, guild_id: guildId, home_guild_id: guildId.guildId, location_stack, rtc_connection_id: rTCConnectionId, media_session_id: mediaSessionId, in_overlay, application_name: name };
  if (null != guildId.emojiId) {
    let num = 1;
  } else {
    num = 0;
  }
  obj.emoji_count = num;
  obj.feature_selection = str;
  obj.feature_selection_id = guildId.soundId;
  obj.sound_type = sound_type;
  let sum = null;
  if (null != arg4) {
    sum = arg4 + 1;
  }
  obj.sequence_number = sum;
  importDefault(dependencyMap[7]).track(AnalyticEvents.PREMIUM_FEATURE_USAGE, obj);
};
