// Module ID: 15944
// Function ID: 123190
// Name: VoicePanelNoVideoPermissionsAlert
// Dependencies: [31, 33, 4476, 4476, 1212, 2]
// Exports: default

// Module 15944 (VoicePanelNoVideoPermissionsAlert)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoVideoPermissionsAlert.tsx");

export default function VoicePanelNoVideoPermissionsAlert() {
  let obj = require(4476) /* getAlertModalItemKey */;
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.OYzPcW);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.string(require(1212) /* getSystemLocale */.t.oBH7Y2);
  obj = { variant: "secondary" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t["NX+WJN"]);
  obj.onPress = obj.useDismissModalCallback();
  obj.actions = jsx(require(4476) /* getAlertModalItemKey */.AlertActionButton, { variant: "secondary" });
  return jsx(require(4476) /* getAlertModalItemKey */.AlertModal, { variant: "secondary" });
};
export const VOICE_PANEL_NO_VIDEO_PERMS_KEY = "voice-panel-no-video-perms";
