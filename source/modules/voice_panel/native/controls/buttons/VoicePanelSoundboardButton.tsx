// Module ID: 15734
// Function ID: 120250
// Name: SoundboardButton
// Dependencies: [0, 4294967295, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15734 (SoundboardButton)
import closure_3 from "result";
import result from "result";
import result from "result";

({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
result = {};
result = { aze: 30271555, azj: 22092032, borderRadius: require("result").radii.round };
result.circle = result;
result.iconContainer = { st: true, position: "/assets/.cache/intl/ZGVzaWdu", flex: null, justifyContent: "5489cb913a06f6a88877637630ce77b7", overflow: "pl.messages.5489cb913a06f6a88877637630ce77b7.compiled.messages" };
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx");

export default function SoundboardButton(arg0) {
  let disabled;
  let handlePress;
  let props;
  let visible;
  let wrapperSpecs;
  ({ props, wrapperSpecs } = arg0);
  const tmp = result();
  let obj = arg1(dependencyMap[5]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const tmp3 = importDefault(dependencyMap[6]);
  ({ disabled, handlePress, visible } = importDefault(dependencyMap[6])(React.useContext(importDefault(dependencyMap[4])).channelId, arg1(dependencyMap[6]).SoundboardButtonLocation.VOICE_PANEL_CONTROLS));
  if (disabled) {
    let color = importDefault(dependencyMap[3]).colors.ICON_MUTED;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  let tmp7 = null;
  if (visible) {
    obj = { onPress: handlePress, disabled, props };
    const intl = arg1(dependencyMap[8]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.6EJvHt);
    obj = {};
    const items = [tmp.circle, ];
    const obj1 = { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor };
    items[1] = obj1;
    obj.style = items;
    const items1 = [callback(importDefault(dependencyMap[9]), obj), ];
    const obj2 = { style: tmp.iconContainer };
    const tmp11 = importDefault(dependencyMap[7]);
    const obj3 = { color };
    obj2.children = callback(arg1(dependencyMap[10]).SoundboardIcon, obj3);
    items1[1] = callback(importDefault(dependencyMap[9]), obj2);
    obj.children = items1;
    tmp7 = callback2(tmp11, obj);
    const tmp14 = importDefault(dependencyMap[9]);
  }
  return tmp7;
};
