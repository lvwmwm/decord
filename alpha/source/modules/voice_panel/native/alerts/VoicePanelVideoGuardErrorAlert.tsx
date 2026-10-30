// Module ID: 14519
// Function ID: 14520
// Name: VoicePanelVideoGuardErrorAlert
// Dependencies: [19, 21, 5959, 5959, 1114, 5619, 14516, 2]
// Exports: default

// Module 14519 (VoicePanelVideoGuardErrorAlert)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import AlertModal2 from "AlertModal" /* 5959 */;
import VideoGuardExperiment from "VideoGuardExperiment" /* 14516 */;
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
  ({ variant: "text-sm/normal", color: "text-subtle", children: format(BPDKoA, obj4) });
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
