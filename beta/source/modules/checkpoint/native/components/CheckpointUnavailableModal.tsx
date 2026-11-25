// Module ID: 12505
// Function ID: 12506
// Name: CheckpointUnavailableModal
// Dependencies: [17, 5969, 1082, 21, 4913, 575, 5129, 6429, 1628, 1112, 12506, 12508, 12509, 12510, 4974, 12511, 12512, 12514, 3440, 12515, 2]
// Exports: default

// Module 12505 (CheckpointUnavailableModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1082 */;
import intl3 from "intl" /* 1112 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import _modDef3440 from "module_3440" /* 3440 */;
import native from "native" /* 4974 */;
import HapticUtils from "HapticUtils" /* 5129 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import useCheckpointMusicDefault from "useCheckpointMusic" /* 12506 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 12508 */;
import useCheckpointForegroundTrackingDefault from "useCheckpointForegroundTracking" /* 12509 */;
import CheckpointStepHeaderRefContext from "CheckpointStepHeaderRefContext" /* 12510 */;
import CheckpointBackgroundDefault from "CheckpointBackground" /* 12511 */;
import CheckpointUnavailableScreenDefault from "CheckpointUnavailableScreen" /* 12512 */;
import CheckpointTextDefault from "CheckpointText" /* 12514 */;
import CheckpointHeaderDefault from "CheckpointHeader" /* 12515 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 5969 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
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
  obj6 = { isStepHeading: true, variant: "heading-lg/medium", children: intl2.string(_modDef3440.IaTl5H) };
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
