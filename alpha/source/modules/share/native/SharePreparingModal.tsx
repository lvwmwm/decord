// Module ID: 8937
// Function ID: 8938
// Name: SharePreparingModal
// Dependencies: [19, 17, 21, 5014, 575, 5598, 8938, 8939, 1113, 7054, 6953, 5624, 2]
// Exports: default

// Module 8937 (SharePreparingModal)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import Backdrop from "Backdrop" /* 5598 */;
import Text_Text from "Text/Text" /* 5624 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6953 */;
import XSmallIcon from "XSmallIcon" /* 7054 */;
import MediaModalOverlayHeaderWrapper2 from "MediaModalOverlayHeaderWrapper" /* 8938 */;
import MediaViewerOverlayButtonDefault from "MediaViewerOverlayButton" /* 8939 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, topBar: obj3, topBarEnd: { justifyContent: "flex-end" } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { bottom: undefined };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/share/native/SharePreparingModal.tsx");

export default function SharePreparingModal(onCancel) {
  let MediaModalOverlayHeaderWrapper;
  let intl;
  let intl2;
  let items1;
  let obj3;
  let obj4;
  let tmp3;
  onCancel = onCancel.onCancel;
  const tmp = closure_7();
  const items = [onCancel];
  const effect = react.useEffect(() => () => onCancel(), items);
  const obj = { style: tmp.content, children: items1 };
  items1 = [hasOwnProperty(Backdrop.Backdrop, { blur: "none", "aria-hidden": true }), , , ];
  const obj2 = { style: tmp.topBar, pointerEvents: "box-none", children: hasOwnProperty(MediaModalOverlayHeaderWrapper, obj3) };
  obj3 = { style: tmp.topBarEnd, children: hasOwnProperty(tmp3, obj4) };
  obj4 = { accessibilityLabel: intl.string(intl3.t.cpT0Cq), icon: hasOwnProperty(XSmallIcon.XSmallIcon, { size: "md", color: "interactive-text-active" }), onPress: onCancel };
  MediaModalOverlayHeaderWrapper = MediaModalOverlayHeaderWrapper2.MediaModalOverlayHeaderWrapper;
  tmp3 = MediaViewerOverlayButtonDefault;
  intl = intl3.intl;
  items1[1] = hasOwnProperty(React3, obj2);
  items1[2] = hasOwnProperty(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
  const obj5 = { variant: "text-sm/medium", color: "text-overlay-light", children: intl2.string(intl3.t.DwTQE5) };
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  items1[3] = hasOwnProperty(Text, obj5);
  return metroRequire(React3, obj);
};
