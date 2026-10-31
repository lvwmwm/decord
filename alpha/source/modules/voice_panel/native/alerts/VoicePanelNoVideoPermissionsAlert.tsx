// Module ID: 19316
// Function ID: 19317
// Name: VoicePanelNoVideoPermissionsAlert
// Dependencies: [19, 21, 5964, 5964, 1113, 2]
// Exports: default

// Module 19316 (VoicePanelNoVideoPermissionsAlert)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1113 */;
import AlertModal2 from "AlertModal" /* 5964 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoVideoPermissionsAlert.tsx");

export default function VoicePanelNoVideoPermissionsAlert() {
  let intl3;
  const obj = AlertModal2;
  const dismissModalCallback = obj.useDismissModalCallback();
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  ({ variant: "secondary", text: intl3.string(intl4.t["NX+WJN"]), onPress: dismissModalCallback });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal title={intl.string(intl4.t.OYzPcW)} content={intl2.string(intl4.t.oBH7Y2)} actions={null} />;
};
export const VOICE_PANEL_NO_VIDEO_PERMS_KEY = "voice-panel-no-video-perms";
