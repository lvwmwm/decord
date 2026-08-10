// Module ID: 16259
// Function ID: 16260
// Name: VoicePanelNoJoinPermissionsAlert
// Dependencies: [19, 21, 4647, 4647, 16260, 1236, 2]
// Exports: default

// Module 16259 (VoicePanelNoJoinPermissionsAlert)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx");

export default function VoicePanelNoJoinPermissionsAlert() {
  let obj = require(4647) /* getAlertModalItemKey */;
  obj = { header: null, title: null, content: null, actions: null };
  obj[0] = jsx(importDefault(16260), {});
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["7/2/3M"]);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.xsenup);
  obj = { variant: "secondary", text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl3.string(require(1236) /* getSystemLocale */.t["NX+WJN"]);
  obj[2] = obj.useDismissModalCallback();
  obj[3] = jsx(require(4647) /* getAlertModalItemKey */.AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(require(4647) /* getAlertModalItemKey */.AlertModal, { variant: "secondary", text: null, onPress: null });
};
export const VOICE_PANEL_NO_JOIN_PERMS_KEY = "voice-panel-no-join-perms";
