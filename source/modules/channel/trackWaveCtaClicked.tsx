// Module ID: 11639
// Function ID: 11640
// Name: getDmHasMessageHistory
// Dependencies: [1391, 676, 698, 2]
// Exports: getDmHasMessageHistory, trackWaveCtaClicked

// Module 11639 (getDmHasMessageHistory)
import ensureGuildLoaded from "ensureGuildLoaded";
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/channel/trackWaveCtaClicked.tsx");

export const getDmHasMessageHistory = function getDmHasMessageHistory(arg0) {
  const channel = store.getChannel(arg0);
  let lastMessageId;
  if (channel != null) {
    lastMessageId = channel.lastMessageId;
  }
  return null != lastMessageId;
};
export const trackWaveCtaClicked = function trackWaveCtaClicked(channelId) {
  let obj = importDefault(698);
  obj = { channel_id: channelId.channelId, source: channelId.source, dm_has_message_history: null };
  const channel = store.getChannel(channelId.channelId);
  let lastMessageId;
  if (channel != null) {
    lastMessageId = channel.lastMessageId;
  }
  obj[2] = null != lastMessageId;
  obj.track(AnalyticEvents.WAVE_CTA_CLICKED, obj);
};
