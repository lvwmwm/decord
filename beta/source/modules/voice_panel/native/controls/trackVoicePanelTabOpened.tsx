// Module ID: 16995
// Function ID: 16996
// Name: trackVoicePanelTabOpened
// Dependencies: [4851, 1074, 1241, 2]
// Exports: default

// Module 16995 (trackVoicePanelTabOpened)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx");

export default function trackVoicePanelTabOpened(arg0, tab, source) {
  let hasUnreadResult = ReadStateStore.hasUnread(arg0);
  const obj = ReadStateStore;
  if (!hasUnreadResult) {
    hasUnreadResult = obj.getMentionCount(arg0) > 0;
  }
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { tab, source, is_chat_badged: hasUnreadResult };
  obj2.track(AnalyticEvents.VOICE_PANEL_TAB_OPENED, obj3);
};
export const VoicePanelTabAnalyticsSources = { STORE: "store", GESTURE: "gesture", PREJOIN_BUTTON: "prejoin button", CONNECTED_BUTTON: "connected button", VOICE_CONTROLS: "voice controls", HEADER_BUTTON: "header button" };
