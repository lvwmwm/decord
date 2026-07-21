// Module ID: 15724
// Function ID: 120303
// Name: trackVoicePanelTabOpened
// Dependencies: []
// Exports: default

// Module 15724 (trackVoicePanelTabOpened)
let closure_2 = importDefault(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx");

export default function trackVoicePanelTabOpened(arg0, tab, source) {
  let hasUnreadResult = closure_2.hasUnread(arg0);
  if (!hasUnreadResult) {
    hasUnreadResult = closure_2.getMentionCount(arg0) > 0;
  }
  let obj = importDefault(dependencyMap[2]);
  obj = { tab, source, is_chat_badged: hasUnreadResult };
  obj.track(AnalyticEvents.VOICE_PANEL_TAB_OPENED, obj);
};
export const VoicePanelTabAnalyticsSources = { STORE: "store", GESTURE: "gesture", PREJOIN_BUTTON: "prejoin button", CONNECTED_BUTTON: "connected button", VOICE_CONTROLS: "voice controls", HEADER_BUTTON: "header button" };
