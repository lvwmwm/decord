// Module ID: 13624
// Function ID: 13625
// Name: trackWaveCtaClicked
// Dependencies: [4857, 1084, 1264, 2]
// Exports: getDmHasMessageHistory, trackWaveCtaClicked

// Module 13624 (trackWaveCtaClicked)
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/channel/trackWaveCtaClicked.tsx");

export function getDmHasMessageHistory(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  let lastMessageId;
  if (channel != null) {
    lastMessageId = channel.lastMessageId;
  }
  return null != lastMessageId;
}
export function trackWaveCtaClicked(channelId) {
  let lastMessageId;
  const obj = { channel_id: channelId.channelId, source: channelId.source, dm_has_message_history: null != lastMessageId };
  const track = AnalyticsUtilsDefault.track;
  const WAVE_CTA_CLICKED = AnalyticEvents.WAVE_CTA_CLICKED;
  AnalyticsUtilsDefault;
  const channel = ChannelStore.getChannel(channelId.channelId);
  lastMessageId = undefined;
  if (channel != null) {
    lastMessageId = channel.lastMessageId;
  }
  track(WAVE_CTA_CLICKED, obj);
}
