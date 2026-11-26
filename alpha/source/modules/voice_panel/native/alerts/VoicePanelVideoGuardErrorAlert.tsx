// Module ID: 14086
// Function ID: 14087
// Name: VoicePanelVideoGuardErrorAlert
// Dependencies: [19, 21, 6052, 6052, 1112, 5634, 14083, 2]
// Exports: default

// Module 14086 (VoicePanelVideoGuardErrorAlert)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1112 */;
import Text_Text from "Text/Text" /* 5634 */;
import AlertModal2 from "AlertModal" /* 6052 */;
import VideoGuardExperiment from "VideoGuardExperiment" /* 14083 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelVideoGuardErrorAlert.tsx");

export default function VoicePanelVideoGuardErrorAlert(title) {
  let BPDKoA;
  let format;
  let intl3;
  let obj4;
  title = title.title;
  const obj = AlertModal2;
  const dismissModalCallback = obj.useDismissModalCallback();
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  ({ variant: "body-sm/normal", color: "text-subtle", children: format(BPDKoA, obj4) });
  const Text = Text_Text.Text;
  const intl2 = intl4.intl;
  format = intl2.format;
  obj4 = { helpdeskArticle: VideoGuardExperiment.VIDEO_GUARD_BLOG_POST_URL };
  BPDKoA = intl4.t.BPDKoA;
  ({ variant: "secondary", text: intl3.string(intl4.t["NX+WJN"]), onPress: dismissModalCallback });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal title={title} content={intl.string(intl4.t.UoW002)} extraContent={null} actions={null} />;
};
export const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = "voice-panel-video-guard-error";
