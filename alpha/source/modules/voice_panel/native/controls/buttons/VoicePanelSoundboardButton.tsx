// Module ID: 17018
// Function ID: 17019
// Name: VoicePanelSoundboardButton
// Dependencies: [19, 21, 4836, 576, 11754, 17004, 17019, 17005, 1115, 5901, 12024, 2]
// Exports: default

// Module 17018 (VoicePanelSoundboardButton)
import nativeDefault from "native" /* 576 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11754 */;
import VoicePanelStyles from "VoicePanelStyles" /* 17004 */;
import useSoundboardConfig from "useSoundboardConfig" /* 17019 */;
import noop from "module_19" /* 19 */;

const useSoundboardConfigDefault = useSoundboardConfig;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
let obj2 = { circle: null, iconContainer: null };
let size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
obj2.circle = size;
obj2.iconContainer = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx");

export default function SoundboardButton(arg0) {
  ({ props, wrapperSpecs } = arg0);
  const tmp3 = closure_6();
  const voicePanelButtonStyles = VoicePanelStyles.useVoicePanelButtonStyles(wrapperSpecs);
  ({ disabled, handlePress, disabledAccessibilityHint, visible } = useSoundboardConfigDefault(noop.useContext(VoicePanelStateContextDefault).channelId, useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS));
  if (disabled) {
    let color = tmp(576).colors.ICON_MUTED;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  let tmp8 = null;
  if (visible) {
    const element = { onPress: handlePress, disabled, props, accessibilityLabel: null, accessibilityHint: null, children: null };
    const intl = tmp4(1115).intl;
    element.accessibilityLabel = intl.string(tmp4(1115).t["6EJvHt"]);
    element.accessibilityHint = disabledAccessibilityHint;
    const obj2 = { style: null };
    const items = [tmp3.circle, ];
    const obj3 = { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor };
    items[1] = obj3;
    obj2.style = items;
    const items1 = [React4(tmp(5901), obj2), ];
    const obj4 = { style: tmp3.iconContainer, children: null };
    const tmpResult = tmp(17005);
    const obj5 = { color };
    obj4.children = React4(tmp4(12024).SoundboardIcon, obj5);
    items1[1] = React4(tmp(5901), obj4);
    element.children = items1;
    tmp8 = hasOwnProperty(tmpResult, element);
    const tmpResult2 = tmp(5901);
  }
  return tmp8;
};
