// Module ID: 5767
// Function ID: 49424
// Name: trackSoundPlayed
// Dependencies: [4150, 1348, 4202, 1906, 4579, 653, 1851, 675, 2]
// Exports: default

// Module 5767 (trackSoundPlayed)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME";
import { AnalyticEvents } from "ME";
import GuildFeatures from "GuildFeatures";

let closure_8;
let closure_9;
({ AnalyticsPremiumFeatureNames: closure_8, AnalyticsPremiumFeatureTiers: closure_9 } = GuildFeatures);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/soundboard/trackSoundPlayed.tsx");

export default function trackSoundPlayed(location_stack, in_overlay, guildId, sound_type) {
  channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
  guildId = undefined;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  const mediaSessionId = store.getMediaSessionId();
  const rTCConnectionId = store.getRTCConnectionId();
  currentGameForAnalytics = currentGameForAnalytics.getCurrentGameForAnalytics();
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
  importDefault(675).track(AnalyticEvents.PREMIUM_FEATURE_USAGE, obj);
};
