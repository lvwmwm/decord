// Module ID: 15723
// Function ID: 120211
// Name: VoicePanelNoJoinPermissionsAlert
// Dependencies: []
// Exports: default

// Module 15723 (VoicePanelNoJoinPermissionsAlert)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoJoinPermissionsAlert.tsx");

export default function VoicePanelNoJoinPermissionsAlert() {
  let obj = arg1(dependencyMap[2]);
  obj = { header: jsx(importDefault(dependencyMap[4]), {}) };
  const intl = arg1(dependencyMap[5]).intl;
  obj.title = intl.string(arg1(dependencyMap[5]).t.7/2/3M);
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.content = intl2.string(arg1(dependencyMap[5]).t.xsenup);
  obj = { variant: "secondary" };
  const intl3 = arg1(dependencyMap[5]).intl;
  obj.text = intl3.string(arg1(dependencyMap[5]).t.NX+WJN);
  obj.onPress = obj.useDismissModalCallback();
  obj.actions = jsx(arg1(dependencyMap[2]).AlertActionButton, obj);
  return jsx(arg1(dependencyMap[3]).AlertModal, obj);
};
export const VOICE_PANEL_NO_JOIN_PERMS_KEY = "voice-panel-no-join-perms";
