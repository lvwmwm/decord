// Module ID: 15750
// Function ID: 120439
// Name: SoundboardButton
// Dependencies: [0, 4294967295, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15750 (SoundboardButton)
import closure_3 from "result";
import result from "result";
import result from "result";

({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
result = {};
result = { borderRadius: require("result").radii.round };
result.circle = result;
result.iconContainer = { <string:1446693987>: null, <string:1666068817>: "no-hide-descendants", <string:1370110668>: true, <string:1549880881>: "/assets/.cache/intl/ZGVzaWdu", <string:1638698833>: null };
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
