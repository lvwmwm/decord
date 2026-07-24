// Module ID: 15896
// Function ID: 122841
// Name: trackVoicePanelTabOpened
// Dependencies: [4142, 653, 675, 2]
// Exports: default

// Module 15896 (trackVoicePanelTabOpened)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const result = require("expandLocation").fileFinishedImporting("modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx");

export default function trackVoicePanelTabOpened(arg0, tab, source) {
  let hasUnreadResult = _isNativeReflectConstruct.hasUnread(arg0);
  if (!hasUnreadResult) {
    hasUnreadResult = _isNativeReflectConstruct.getMentionCount(arg0) > 0;
  }
  let obj = importDefault(675);
  obj = { tab, source, is_chat_badged: hasUnreadResult };
  obj.track(AnalyticEvents.VOICE_PANEL_TAB_OPENED, obj);
};
export const VoicePanelTabAnalyticsSources = { STORE: "store", GESTURE: "gesture", PREJOIN_BUTTON: "prejoin button", CONNECTED_BUTTON: "connected button", VOICE_CONTROLS: "voice controls", HEADER_BUTTON: "header button" };
