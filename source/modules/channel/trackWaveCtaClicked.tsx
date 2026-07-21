// Module ID: 11359
// Function ID: 88328
// Name: getDmHasMessageHistory
// Dependencies: []
// Exports: trackWaveCtaClicked

// Module 11359 (getDmHasMessageHistory)
function getDmHasMessageHistory(channelId) {
  const channel = channel.getChannel(channelId);
  let lastMessageId;
  if (null != channel) {
    lastMessageId = channel.lastMessageId;
  }
  return null != lastMessageId;
}
let closure_2 = importDefault(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/channel/trackWaveCtaClicked.tsx");

export { getDmHasMessageHistory };
export const trackWaveCtaClicked = function trackWaveCtaClicked(channelId) {
  let obj = importDefault(dependencyMap[2]);
  obj = { channel_id: channelId.channelId, source: channelId.source, dm_has_message_history: getDmHasMessageHistory(channelId.channelId) };
  obj.track(AnalyticEvents.WAVE_CTA_CLICKED, obj);
};
