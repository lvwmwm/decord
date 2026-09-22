// Module ID: 9584
// Function ID: 9585
// Name: trackVoiceCallTransfer
// Dependencies: [1957, 4659, 4654, 1074, 1240, 2]
// Exports: default

// Module 9584 (trackVoiceCallTransfer)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4659 */;
import SessionsStore from "SessionsStore" /* 4654 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/trackVoiceCallTransfer.tsx");

export default function trackVoiceCallTransfer(channel_id, target_platform, sessionId) {
  let str = "discord_client";
  if (null != sessionId) {
    const sessionById = SessionsStore.getSessionById(sessionId);
    let os;
    if (sessionById != null) {
      os = sessionById.clientInfo.os;
    }
    str = os;
  }
  const obj2 = { source_platform: str, guild_id: null, channel_id: null, rtc_connection_id: null, target_platform: null };
  const channel = ChannelStore.getChannel(channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj2.guild_id = guild_id;
  obj2.channel_id = channel_id;
  obj2.rtc_connection_id = RTCConnectionStore.getRTCConnectionId();
  obj2.target_platform = target_platform;
  AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_CALL_TRANSFER, obj2);
};
