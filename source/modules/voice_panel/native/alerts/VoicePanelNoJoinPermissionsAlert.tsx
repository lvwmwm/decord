// Module ID: 15864
// Function ID: 122616
// Name: VoicePanelNoJoinPermissionsAlert
// Dependencies: [31, 33, 4475, 4475, 15865, 1212, 2]
// Exports: default

// Module 15864 (VoicePanelNoJoinPermissionsAlert)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx");

export default function VoicePanelNoJoinPermissionsAlert() {
  let obj = require(4475) /* getAlertModalItemKey */;
  obj = { header: jsx(importDefault(15865), {}) };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["7/2/3M"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.string(require(1212) /* getSystemLocale */.t.xsenup);
  obj = { variant: "secondary" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t["NX+WJN"]);
  obj.onPress = obj.useDismissModalCallback();
  obj.actions = jsx(require(4475) /* getAlertModalItemKey */.AlertActionButton, { variant: "secondary" });
  return jsx(require(4475) /* getAlertModalItemKey */.AlertModal, { variant: "secondary" });
};
export const VOICE_PANEL_NO_JOIN_PERMS_KEY = "voice-panel-no-join-perms";
