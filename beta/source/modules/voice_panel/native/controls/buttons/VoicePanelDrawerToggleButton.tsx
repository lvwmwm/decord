// Module ID: 19764
// Function ID: 19765
// Name: VoicePanelDrawerToggleButton
// Dependencies: [19, 21, 5170, 575, 19748, 19735, 19749, 7056, 11587, 15782, 2]
// Exports: default

// Module 19764 (VoicePanelDrawerToggleButton)
import nativeDefault from "native" /* 575 */;
import NativeViewDefault from "NativeView" /* 7056 */;
import useDrawerToggleDefault from "useDrawerToggle" /* 19735 */;
import VoicePanelStyles from "VoicePanelStyles" /* 19748 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 19749 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let size;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { circle: size, iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" } };
size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
let closure_5 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx");

export default function VoicePanelDrawerToggleButton(arg0) {
  let ChevronSmallUpIcon;
  let accessibilityLabel;
  let handlePress;
  let isDrawerOpen;
  let items;
  let items1;
  let openTab;
  let props;
  let wrapperSpecs;
  ({ props, openTab, wrapperSpecs } = arg0);
  const tmp = closure_5();
  const obj = VoicePanelStyles;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  const color = voicePanelButtonStyles.iconFill.color;
  ({ isDrawerOpen, handlePress, accessibilityLabel } = useDrawerToggleDefault(openTab));
  const element = { onPress: handlePress, props, accessibilityLabel, children: items1 };
  useDrawerToggleDefault(openTab);
  const obj2 = { style: items };
  items = [tmp.circle, { backgroundColor }];
  items1 = [, ];
  const tmp7 = VoicePanelAnimatedButtonWrapperDefault;
  items1[0] = _false(NativeViewDefault, obj2);
  const obj3 = { style: tmp.iconContainer, children: _false(ChevronSmallUpIcon, { color }) };
  const tmp6 = React3;
  const tmp9 = NativeViewDefault;
  if (isDrawerOpen) {
    ChevronSmallUpIcon = tmp2(11587).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = tmp2(15782).ChevronSmallUpIcon;
  }
  items1[1] = _false(tmp9, obj3);
  return tmp6(tmp7, element);
};
