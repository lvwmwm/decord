// Module ID: 17594
// Function ID: 17595
// Name: trackVoicePanelTabOpened
// Dependencies: [4773, 1078, 1245, 2]
// Exports: default

// Module 17594 (trackVoicePanelTabOpened)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import ReadStateStore from "ReadStateStore" /* 4773 */;

const AnalyticEvents = fn(1078).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx");

export default function trackVoicePanelTabOpened(arg0, tab, source) {
  let hasUnreadResult = ReadStateStore.hasUnread(arg0);
  if (!hasUnreadResult) {
    hasUnreadResult = ReadStateStore.getMentionCount(arg0) > 0;
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_PANEL_TAB_OPENED, { tab, source, is_chat_badged: hasUnreadResult });
};
export const VoicePanelTabAnalyticsSources = { STORE: "store", GESTURE: "gesture", PREJOIN_BUTTON: "prejoin button", CONNECTED_BUTTON: "connected button", VOICE_CONTROLS: "voice controls", HEADER_BUTTON: "header button" };
