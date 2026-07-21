// Module ID: 12235
// Function ID: 93863
// Name: VoicePanelSpoilerAlert
// Dependencies: []
// Exports: default

// Module 12235 (VoicePanelSpoilerAlert)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/spoiler_channels/native/VoicePanelSpoilerAlert.tsx");

export default function VoicePanelSpoilerAlert(channelId) {
  const arg1 = channelId.channelId;
  let obj = arg1(dependencyMap[2]);
  let closure_1 = obj.useDismissModalCallback();
  obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.title = intl.string(arg1(dependencyMap[4]).t.q38/ae);
  const intl2 = arg1(dependencyMap[4]).intl;
  obj.content = intl2.string(arg1(dependencyMap[4]).t.2fDWXK);
  obj = {};
  const obj1 = {
    variant: "primary",
    onPress() {
      callback(closure_2[5]).spoilerAgree(channelId);
      const obj = callback(closure_2[5]);
      const voiceChannel = callback(closure_2[6]).selectVoiceChannel(channelId);
      callback();
    }
  };
  const intl3 = arg1(dependencyMap[4]).intl;
  obj1.text = intl3.string(arg1(dependencyMap[4]).t.p89ACt);
  const items = [callback(arg1(dependencyMap[3]).AlertActionButton, obj1, "confirm"), ];
  const obj2 = {
    variant: "secondary",
    onPress() {
      callback();
    }
  };
  const intl4 = arg1(dependencyMap[4]).intl;
  obj2.text = intl4.string(arg1(dependencyMap[4]).t./g10LC);
  items[1] = callback(arg1(dependencyMap[3]).AlertActionButton, obj2, "cancel");
  obj.children = items;
  obj.actions = callback2(arg1(dependencyMap[2]).AlertActions, obj);
  return callback(arg1(dependencyMap[3]).AlertModal, obj);
};
export const VOICE_PANEL_SPOILER_KEY = "voice-panel-spoiler";
