// Module ID: 11399
// Function ID: 88643
// Name: getDmHasMessageHistory
// Dependencies: [1348, 653, 675, 2]
// Exports: trackWaveCtaClicked

// Module 11399 (getDmHasMessageHistory)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

function getDmHasMessageHistory(channelId) {
  channel = channel.getChannel(channelId);
  let lastMessageId;
  if (null != channel) {
    lastMessageId = channel.lastMessageId;
  }
  return null != lastMessageId;
}
const result = require("expandLocation").fileFinishedImporting("modules/channel/trackWaveCtaClicked.tsx");

export { getDmHasMessageHistory };
export const trackWaveCtaClicked = function trackWaveCtaClicked(channelId) {
  let obj = importDefault(675);
  obj = { channel_id: channelId.channelId, source: channelId.source, dm_has_message_history: getDmHasMessageHistory(channelId.channelId) };
  obj.track(AnalyticEvents.WAVE_CTA_CLICKED, obj);
};
