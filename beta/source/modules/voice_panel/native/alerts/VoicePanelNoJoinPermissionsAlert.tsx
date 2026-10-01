// Module ID: 17011
// Function ID: 17012
// Name: VoicePanelNoJoinPermissionsAlert
// Dependencies: [19, 21, 5209, 5209, 17012, 1115, 2]
// Exports: default

// Module 17011 (VoicePanelNoJoinPermissionsAlert)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1115 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx");

export default function VoicePanelNoJoinPermissionsAlert() {
  let intl3;
  const obj = AlertModal2;
  const dismissModalCallback = obj.useDismissModalCallback();
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  ({ variant: "secondary", text: intl3.string(intl4.t["NX+WJN"]), onPress: dismissModalCallback });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal header={null} title={intl.string(intl4.t["7/2/3M"])} content={intl2.string(intl4.t.xsenup)} actions={null} />;
};
export const VOICE_PANEL_NO_JOIN_PERMS_KEY = "voice-panel-no-join-perms";
