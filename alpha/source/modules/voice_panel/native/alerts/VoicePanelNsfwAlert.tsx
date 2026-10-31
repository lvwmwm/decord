// Module ID: 19310
// Function ID: 19311
// Name: VoicePanelNsfwAlert
// Dependencies: [19, 4881, 4885, 21, 5964, 5964, 1113, 6902, 2]
// Exports: default

// Module 19310 (VoicePanelNsfwAlert)
import GuildRecord from "GuildRecord" /* 4881 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6902 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroRequire;
const isGuildNSFW = GuildRecord.isGuildNSFW;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNsfwAlert.tsx");

export default function VoicePanelNsfwAlert(guildId) {
  let AlertActions;
  let closure_2;
  let intl3;
  let intl4;
  let items;
  let obj3;
  let string2Result;
  let stringResult;
  guildId = guildId.guildId;
  const onConnect = guildId.onConnect;
  let obj = guildId(5964);
  dependencyMap = obj.useDismissModalCallback();
  const tmp3 = isGuildNSFW(GuildStore.getGuild(guildId));
  const AlertModal = guildId(5964).AlertModal;
  const intl = guildId(1113).intl;
  const string = intl.string;
  const t = guildId(1113).t;
  if (tmp3) {
    stringResult = string(t.xi46lg);
  } else {
    stringResult = string(t.ZmwvDc);
  }
  const obj2 = { title: stringResult, content: string2Result, actions: closure_6(AlertActions, obj3) };
  const intl2 = tmp(1113).intl;
  const string2 = intl2.string;
  const t2 = tmp(1113).t;
  if (tmp3) {
    string2Result = string2(t2.ZtuRts);
  } else {
    string2Result = string2(t2.E4Cd5I);
  }
  obj3 = { children: items };
  AlertActions = tmp(5964).AlertActions;
  const obj4 = {
    variant: "primary",
    onPress: function handleAgree() {
      const obj = GuildActionCreatorsDefault;
      obj.nsfwAgree(guildId);
      onConnect();
      closure_2();
    },
    text: intl3.string(guildId(1113).t.wVq7uo)
  };
  const AlertActionButton = tmp(5964).AlertActionButton;
  intl3 = tmp(1113).intl;
  items = [closure_5(AlertActionButton, obj4, "confirm"), ];
  const obj5 = {
    variant: "secondary",
    onPress: function handleDisagree() {
      const obj = GuildActionCreatorsDefault;
      obj.nsfwReturnToSafety(guildId);
      closure_2();
    },
    text: intl4.string(guildId(1113).t["/g10LC"])
  };
  const AlertActionButton2 = tmp(5964).AlertActionButton;
  intl4 = tmp(1113).intl;
  items[1] = closure_5(AlertActionButton2, obj5, "add-profile-picture");
  return closure_5(AlertModal, obj2);
};
export const VOICE_PANEL_NSFW_KEY = "voice-panel-nsfw";
