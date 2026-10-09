// Module ID: 7077
// Function ID: 7078
// Name: trackSoundPlayed
// Dependencies: [2019, 2064, 5109, 2115, 5427, 1085, 1392, 7042, 1265, 2]
// Exports: default

// Module 7077 (trackSoundPlayed)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import SoundboardConstants from "SoundboardConstants" /* 5427 */;
import SoundboardTypes from "SoundboardTypes" /* 7042 */;
import RunningGameStore from "RunningGameStore" /* 2019 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
const DEFAULT_SOUND_GUILD_ID = SoundboardConstants.DEFAULT_SOUND_GUILD_ID;
const AnalyticEvents = Constants.AnalyticEvents;
({ AnalyticsPremiumFeatureNames: c9, AnalyticsPremiumFeatureTiers: c10 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/soundboard/trackSoundPlayed.tsx");

export default function trackSoundPlayed(location_stack, in_overlay, guildId, sound_type, arg4) {
  let num;
  let sum;
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const mediaSessionId = RTCConnectionStore.getMediaSessionId();
  const rTCConnectionId = RTCConnectionStore.getRTCConnectionId();
  const currentGameForAnalytics = RunningGameStore.getCurrentGameForAnalytics();
  let name;
  if (currentGameForAnalytics != null) {
    name = currentGameForAnalytics.name;
  }
  let tmp6 = guildId !== guildId.guildId && guildId.guildId !== DEFAULT_SOUND_GUILD_ID;
  let str = "default";
  if (guildId.guildId !== DEFAULT_SOUND_GUILD_ID) {
    let str2 = "custom";
    if (tmp6) {
      str2 = "custom-external";
    }
    str = str2;
  }
  if (tmp6) {
    tmp6 = sound_type !== SoundboardTypes.AnalyticsSoundType.ECHO;
  }
  const obj = { feature_name: constants.SOUNDBOARD_PLAY, feature_tier: tmp6 ? authStore.PREMIUM_STANDARD : authStore.FREE, guild_id: guildId, home_guild_id: guildId.guildId, location_stack, rtc_connection_id: rTCConnectionId, media_session_id: mediaSessionId, in_overlay, application_name: name, emoji_count: num, feature_selection: str, feature_selection_id: guildId.soundId, sound_type, sequence_number: sum };
  const track = AnalyticsUtilsDefault.track;
  const PREMIUM_FEATURE_USAGE = AnalyticEvents.PREMIUM_FEATURE_USAGE;
  AnalyticsUtilsDefault;
  if (null != guildId.emojiId) {
    num = 1;
  } else {
    num = 0;
  }
  sum = null;
  if (null != arg4) {
    sum = arg4 + 1;
  }
  track(PREMIUM_FEATURE_USAGE, obj);
};
