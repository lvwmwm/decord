// Module ID: 9034
// Function ID: 70983
// Name: trackVoiceCallTransfer
// Dependencies: []
// Exports: default

// Module 9034 (trackVoiceCallTransfer)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/game_console/trackVoiceCallTransfer.tsx");

export default function trackVoiceCallTransfer(channel_id, target_platform) {
  let obj = importDefault(dependencyMap[4]);
  obj = {};
  let str = "discord_client";
  if (null != arg2) {
    const sessionById = sessionById.getSessionById(arg2);
    let os;
    if (null != sessionById) {
      os = sessionById.clientInfo.os;
    }
    str = os;
  }
  obj.source_platform = str;
  const channel = channel.getChannel(channel_id);
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
