// Module ID: 15740
// Function ID: 120272
// Name: VoicePanelNoVideoPermissionsAlert
// Dependencies: []
// Exports: default

// Module 15740 (VoicePanelNoVideoPermissionsAlert)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNoVideoPermissionsAlert.tsx");

export default function VoicePanelNoVideoPermissionsAlert() {
  let obj = arg1(dependencyMap[2]);
  obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.title = intl.string(arg1(dependencyMap[4]).t.OYzPcW);
  const intl2 = arg1(dependencyMap[4]).intl;
  obj.content = intl2.string(arg1(dependencyMap[4]).t.oBH7Y2);
  obj = { variant: "secondary" };
  const intl3 = arg1(dependencyMap[4]).intl;
  obj.text = intl3.string(arg1(dependencyMap[4]).t.NX+WJN);
  obj.onPress = obj.useDismissModalCallback();
  obj.actions = jsx(arg1(dependencyMap[3]).AlertActionButton, obj);
  return jsx(arg1(dependencyMap[3]).AlertModal, obj);
};
export const VOICE_PANEL_NO_VIDEO_PERMS_KEY = "voice-panel-no-video-perms";
