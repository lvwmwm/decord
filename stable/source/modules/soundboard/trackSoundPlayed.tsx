// Module ID: 6791
// Function ID: 6792
// Name: trackSoundPlayed
// Dependencies: [2006, 2051, 4860, 2102, 5322, 1086, 1380, 1253, 2]
// Exports: default

// Module 6791 (trackSoundPlayed)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import SoundboardConstants from "SoundboardConstants" /* 5322 */;
import RunningGameStore from "RunningGameStore" /* 2006 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4860 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import PremiumConstants from "PremiumConstants" /* 1380 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
const DEFAULT_SOUND_GUILD_ID = SoundboardConstants.DEFAULT_SOUND_GUILD_ID;
const AnalyticEvents = Constants.AnalyticEvents;
({ AnalyticsPremiumFeatureNames: metroImportAll, AnalyticsPremiumFeatureTiers: c9 } = PremiumConstants);
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
  let str = "default";
  if (guildId.guildId !== DEFAULT_SOUND_GUILD_ID) {
    let str2 = "custom";
    if (guildId !== guildId.guildId && guildId.guildId !== DEFAULT_SOUND_GUILD_ID) {
      str2 = "custom-external";
    }
    str = str2;
  }
  const obj = { feature_name: metroImportAll.SOUNDBOARD_PLAY, feature_tier: guildId !== guildId.guildId && guildId.guildId !== DEFAULT_SOUND_GUILD_ID ? React4.PREMIUM_STANDARD : React4.FREE, guild_id: guildId, home_guild_id: guildId.guildId, location_stack, rtc_connection_id: rTCConnectionId, media_session_id: mediaSessionId, in_overlay, application_name: name, emoji_count: num, feature_selection: str, feature_selection_id: guildId.soundId, sound_type, sequence_number: sum };
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
