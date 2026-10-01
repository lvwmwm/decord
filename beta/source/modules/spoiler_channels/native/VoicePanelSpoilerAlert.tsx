// Module ID: 12489
// Function ID: 12490
// Name: VoicePanelSpoilerAlert
// Dependencies: [19, 21, 5209, 5209, 1115, 5832, 5723, 2]
// Exports: default

// Module 12489 (VoicePanelSpoilerAlert)
import intl5 from "intl" /* 1115 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c3;
let closure_4;
let tmp;
const SelectedChannelActionCreatorsDefault = tmp(5723);
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/spoiler_channels/native/VoicePanelSpoilerAlert.tsx");

export default function VoicePanelSpoilerAlert(arg0) {
  let AlertActions;
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj3;
  ({ channelId: require, onConnect: importDefault } = arg0);
  let obj = AlertModal2;
  dependencyMap = obj.useDismissModalCallback();
  const obj2 = { title: intl.string(intl5.t["q38/ae"]), content: intl2.string(intl5.t["2fDWXK"]), actions: closure_4(AlertActions, obj3) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj3 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj4 = {
    variant: "primary",
    onPress() {
      const obj = GuildActionCreatorsDefault;
      obj.spoilerAgree(require);
      const tmp3 = require;
      if (null != importDefault) {
        importDefault();
      } else {
        const tmpResult = SelectedChannelActionCreatorsDefault;
        const voiceChannel = tmpResult.selectVoiceChannel(tmp3);
      }
      closure_2();
    },
    text: intl3.string(intl5.t.p89ACt)
  };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [closure_3(AlertActionButton, obj4, "confirm"), ];
  const obj5 = {
    variant: "secondary",
    onPress() {
      closure_2();
    },
    text: intl4.string(intl5.t["/g10LC"])
  };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = closure_3(AlertActionButton2, obj5, "cancel");
  return closure_3(AlertModal, obj2);
};
export const VOICE_PANEL_SPOILER_KEY = "voice-panel-spoiler";
