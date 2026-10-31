// Module ID: 19317
// Function ID: 19318
// Name: VoicePanelSoundboardButton
// Dependencies: [19, 21, 5014, 575, 11222, 19303, 19318, 19304, 1113, 6960, 14087, 2]
// Exports: default

// Module 19317 (VoicePanelSoundboardButton)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import NativeViewDefault from "NativeView" /* 6960 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11222 */;
import SoundboardIcon from "SoundboardIcon" /* 14087 */;
import VoicePanelStyles from "VoicePanelStyles" /* 19303 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 19304 */;
import useSoundboardConfig from "useSoundboardConfig" /* 19318 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
    color = tmp(575).colors.ICON_MUTED;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  let tmp8 = null;
  if (visible) {
    const element = { onPress: handlePress, disabled, props, accessibilityLabel: intl.string(intl2.t["6EJvHt"]), accessibilityHint: disabledAccessibilityHint, children: items1 };
    const tmpResult = VoicePanelAnimatedButtonWrapperDefault;
    intl = tmp4(1113).intl;
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
