// Module ID: 16990
// Function ID: 16991
// Name: VoicePanelSoundboardButton
// Dependencies: [19, 21, 4829, 576, 11740, 16976, 16991, 16977, 1115, 5896, 12006, 2]
// Exports: default

// Module 16990 (VoicePanelSoundboardButton)
import nativeDefault from "native" /* 576 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11740 */;
import VoicePanelStyles from "VoicePanelStyles" /* 16976 */;
import useSoundboardConfig from "useSoundboardConfig" /* 16991 */;
import noop from "module_19" /* 19 */;

const useSoundboardConfigDefault = useSoundboardConfig;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
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
    const items1 = [React4(tmp(5896), obj2), ];
    const obj4 = { style: tmp3.iconContainer, children: null };
    const tmpResult = tmp(16977);
    const obj5 = { color };
    obj4.children = React4(tmp4(12006).SoundboardIcon, obj5);
    items1[1] = React4(tmp(5896), obj4);
    element.children = items1;
    tmp8 = hasOwnProperty(tmpResult, element);
    const tmpResult2 = tmp(5896);
  }
  return tmp8;
};
