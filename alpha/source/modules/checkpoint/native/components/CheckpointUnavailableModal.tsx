// Module ID: 14156
// Function ID: 14157
// Name: CheckpointUnavailableModal
// Dependencies: [17, 6314, 1083, 21, 5243, 575, 5491, 6785, 1627, 1113, 14157, 14159, 5314, 14160, 14162, 3269, 14165, 14164, 2]
// Exports: default

// Module 14156 (CheckpointUnavailableModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl3 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef3269 from "module_3269" /* 3269 */;
import native from "native" /* 5314 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import useCheckpointMusicDefault from "useCheckpointMusic" /* 14157 */;
import CheckpointStepHeaderRefContext from "CheckpointStepHeaderRefContext" /* 14159 */;
import CheckpointBackgroundDefault from "CheckpointBackground" /* 14160 */;
import CheckpointUnavailableScreenDefault from "CheckpointUnavailableScreen" /* 14162 */;
import CheckpointTextDefault from "CheckpointText" /* 14164 */;
import CheckpointHeaderDefault from "CheckpointHeader" /* 14165 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
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
  let obj2;
  let obj3;
  let obj6;
  let obj7;
  const tmp = closure_8();
  const rect = useSafeAreaInsetsDefault();
  const intl = intl3.intl;
  const stringResult = intl.string(intl3.t.cpT0Cq);
  useCheckpointMusicDefault();
  const obj = { children: metroRequire(ThemeContextProvider, obj2) };
  const CheckpointStepFocusProvider = CheckpointStepHeaderRefContext.CheckpointStepFocusProvider;
  obj2 = { theme: ThemeTypes.DARK, children: metroImportDefault(React3, obj3) };
  obj3 = { style: tmp.container, children: items };
  ThemeContextProvider = native.ThemeContextProvider;
  items = [metroRequire(CheckpointBackgroundDefault, {}), , , ];
  const obj4 = { message: intl2.string(_modDef3269.IaTl5H) };
  const tmp4 = CheckpointUnavailableScreenDefault;
  intl2 = intl3.intl;
  items[1] = metroRequire(tmp4, obj4);
  items[2] = metroRequire(CheckpointHeaderDefault, {});
  const obj5 = { style: items1, children: metroRequire(_false, obj6) };
  items1 = [tmp.footer, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  obj6 = { style: tmp.closeButton, onPress: handleClose, accessibilityRole: "button", children: metroRequire(CheckpointTextDefault, obj7) };
  obj7 = { variant: "mono-md/normal", style: tmp.closeButtonLabel, children: stringResult };
  items[3] = metroRequire(React3, obj5);
  return metroRequire(CheckpointStepFocusProvider, obj);
};
