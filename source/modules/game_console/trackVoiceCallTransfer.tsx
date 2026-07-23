// Module ID: 9046
// Function ID: 71060
// Name: trackVoiceCallTransfer
// Dependencies: [1348, 4202, 4145, 653, 675, 2]
// Exports: default

// Module 9046 (trackVoiceCallTransfer)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_console/trackVoiceCallTransfer.tsx");

export default function trackVoiceCallTransfer(channel_id, target_platform) {
  let obj = importDefault(675);
  obj = {};
  let str = "discord_client";
  if (null != arg2) {
    sessionById = sessionById.getSessionById(arg2);
    let os;
    if (null != sessionById) {
      os = sessionById.clientInfo.os;
    }
    str = os;
  }
  obj.source_platform = str;
  channel = channel.getChannel(channel_id);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  obj.channel_id = channel_id;
  obj.rtc_connection_id = rTCConnectionId.getRTCConnectionId();
  obj.target_platform = target_platform;
  obj.track(AnalyticEvents.VOICE_CALL_TRANSFER, obj);
};
