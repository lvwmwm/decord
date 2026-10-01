// Module ID: 17022
// Function ID: 17023
// Name: VoicePanelSoundboardButton
// Dependencies: [19, 21, 4836, 576, 11754, 17008, 17023, 17009, 1115, 5901, 12024, 2]
// Exports: default

// Module 17022 (VoicePanelSoundboardButton)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11754 */;
import SoundboardIcon from "SoundboardIcon" /* 12024 */;
import VoicePanelStyles from "VoicePanelStyles" /* 17008 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 17009 */;
import useSoundboardConfig from "useSoundboardConfig" /* 17023 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const useSoundboardConfigDefault = useSoundboardConfig;

let closure_4;
let hasOwnProperty;
let size;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { circle: size, iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" } };
size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
let closure_6 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx");

export default function SoundboardButton(arg0) {
  let color;
  let disabled;
  let disabledAccessibilityHint;
  let handlePress;
  let intl;
  let items;
  let items1;
  let obj5;
  let props;
  let visible;
  let wrapperSpecs;
  ({ props, wrapperSpecs } = arg0);
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const tmp3 = closure_6();
  const obj = VoicePanelStyles;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  const tmp6 = useSoundboardConfigDefault;
  ({ disabled, handlePress, disabledAccessibilityHint, visible } = tmp6(channelId, useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS));
  tmp6(channelId, useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS);
  if (disabled) {
    color = tmp(576).colors.ICON_MUTED;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  let tmp8 = null;
  if (visible) {
    const element = { onPress: handlePress, disabled, props, accessibilityLabel: intl.string(intl2.t["6EJvHt"]), accessibilityHint: disabledAccessibilityHint, children: items1 };
    const tmpResult = VoicePanelAnimatedButtonWrapperDefault;
    intl = tmp4(1115).intl;
    const obj2 = { style: items };
    items = [tmp3.circle, ];
    const obj3 = { backgroundColor };
    items[1] = obj3;
    items1 = [React3(NativeViewDefault, obj2), ];
    const obj4 = { style: tmp3.iconContainer, children: React3(SoundboardIcon.SoundboardIcon, obj5) };
    obj5 = { color };
    const tmpResult2 = NativeViewDefault;
    items1[1] = React3(tmpResult2, obj4);
    tmp8 = hasOwnProperty(tmpResult, element);
  }
  return tmp8;
};
