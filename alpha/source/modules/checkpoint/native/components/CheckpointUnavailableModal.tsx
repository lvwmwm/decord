// Module ID: 14261
// Function ID: 14262
// Name: CheckpointUnavailableModal
// Dependencies: [17, 6377, 1083, 21, 5306, 575, 5554, 6848, 1630, 1113, 14262, 14264, 14265, 14266, 5377, 14267, 14269, 14271, 3317, 14272, 2]
// Exports: default

// Module 14261 (CheckpointUnavailableModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl3 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef3317 from "module_3317" /* 3317 */;
import native from "native" /* 5377 */;
import HapticUtils from "HapticUtils" /* 5554 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import useCheckpointMusicDefault from "useCheckpointMusic" /* 14262 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 14264 */;
import useCheckpointForegroundTrackingDefault from "useCheckpointForegroundTracking" /* 14265 */;
import CheckpointStepHeaderRefContext from "CheckpointStepHeaderRefContext" /* 14266 */;
import CheckpointBackgroundDefault from "CheckpointBackground" /* 14267 */;
import CheckpointUnavailableScreenDefault from "CheckpointUnavailableScreen" /* 14269 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import CheckpointHeaderDefault from "CheckpointHeader" /* 14272 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let CHECKPOINT_CONTROL_SIZE;
let CHECKPOINT_PRIMARY;
let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let rect;
function handleClose() {
  const obj = HapticUtils;
  const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
  const arr = ModalActionCreatorsDefault;
  arr.pop();
}
({ Pressable: c3, View: closure_4 } = react_native);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY } = CheckpointConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { height: "100%" }, footer: rect, closeButton: { height: CHECKPOINT_CONTROL_SIZE, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: CHECKPOINT_PRIMARY }, closeButtonLabel: { textTransform: "uppercase", fontSize: 18, lineHeight: 24 } };
rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointUnavailableModal.tsx");

export default function CheckpointUnavailableModal() {
  let ThemeContextProvider;
  let intl2;
  let items;
  let items1;
  let obj3;
  let obj4;
  let obj6;
  let obj8;
  let obj9;
  let tmp7;
  const tmp = closure_8();
  const rect = useSafeAreaInsetsDefault();
  const intl = intl3.intl;
  const stringResult = intl.string(intl3.t.cpT0Cq);
  useCheckpointMusicDefault();
  const obj = useCheckpointStepAnalytics;
  const checkpointCloseAnalytics = obj.useCheckpointCloseAnalytics();
  useCheckpointForegroundTrackingDefault();
  const obj2 = { children: metroRequire(ThemeContextProvider, obj3) };
  const CheckpointStepFocusProvider = CheckpointStepHeaderRefContext.CheckpointStepFocusProvider;
  obj3 = { theme: ThemeTypes.DARK, children: metroImportDefault(React3, obj4) };
  obj4 = { style: tmp.container, children: items };
  ThemeContextProvider = native.ThemeContextProvider;
  items = [metroRequire(CheckpointBackgroundDefault, {}), , , ];
  const obj5 = { children: metroRequire(tmp7, obj6) };
  obj6 = { isStepHeading: true, variant: "heading-lg/medium", children: intl2.string(_modDef3317.IaTl5H) };
  const tmp6 = CheckpointUnavailableScreenDefault;
  tmp7 = CheckpointTextDefault;
  intl2 = intl3.intl;
  items[1] = metroRequire(tmp6, obj5);
  items[2] = metroRequire(CheckpointHeaderDefault, {});
  const obj7 = { style: items1, children: metroRequire(_false, obj8) };
  items1 = [tmp.footer, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  obj8 = { style: tmp.closeButton, onPress: handleClose, accessibilityRole: "button", children: metroRequire(CheckpointTextDefault, obj9) };
  obj9 = { variant: "mono-md/normal", style: tmp.closeButtonLabel, children: stringResult };
  items[3] = metroRequire(React3, obj7);
  return metroRequire(CheckpointStepFocusProvider, obj2);
};
