// Module ID: 10724
// Function ID: 83433
// Name: VoicePanelRiveMicButton
// Dependencies: []
// Exports: VoicePanelRiveMicButton

// Module 10724 (VoicePanelRiveMicButton)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export const VoicePanelRiveMicButton = function VoicePanelRiveMicButton(arg0) {
  let color;
  let muted;
  ({ color, muted } = arg0);
  let obj = { style: {} };
  obj = { dataBinding: obj };
  obj = { fill: color, on: !muted };
  let str = "On";
  if (muted) {
    str = "Off";
  }
  obj.defaultViewModelInstance = str;
  if (muted) {
    let MicrophoneIcon = tmp4(tmp5[4]).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp4(tmp5[5]).MicrophoneIcon;
  }
  obj.fallback = <MicrophoneIcon color={color} />;
  obj.children = jsx(arg1(dependencyMap[3]).MicrophoneRive, obj);
  return <View {...obj} />;
};
