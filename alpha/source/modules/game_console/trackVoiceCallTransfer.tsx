// Module ID: 10905
// Function ID: 10906
// Name: trackVoiceCallTransfer
// Dependencies: [4643, 5535, 5537, 1071, 1255, 2]
// Exports: default

// Module 10905 (trackVoiceCallTransfer)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5535 */;
import SessionsStore from "SessionsStore" /* 5537 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/game_console/trackVoiceCallTransfer.tsx");

export default function trackVoiceCallTransfer(channel_id, target_platform, sessionId) {
  let guild_id;
  let str = "discord_client";
  const track = AnalyticsUtilsDefault.track;
  const VOICE_CALL_TRANSFER = AnalyticEvents.VOICE_CALL_TRANSFER;
  AnalyticsUtilsDefault;
  if (null != sessionId) {
    const sessionById = SessionsStore.getSessionById(sessionId);
    let os;
    if (sessionById != null) {
      os = sessionById.clientInfo.os;
    }
    str = os;
  }
  const obj = { source_platform: str, guild_id, channel_id, rtc_connection_id: RTCConnectionStore.getRTCConnectionId(), target_platform };
  const channel = ChannelStore.getChannel(channel_id);
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  track(VOICE_CALL_TRANSFER, obj);
};
