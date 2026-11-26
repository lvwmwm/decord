// Module ID: 12805
// Function ID: 12806
// Name: CheckpointMessageModal
// Dependencies: [17, 5969, 1082, 21, 4913, 575, 5129, 6429, 1628, 1112, 12540, 4974, 12727, 12746, 12722, 12785, 2]
// Exports: default

// Module 12805 (CheckpointMessageModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1082 */;
import intl2 from "intl" /* 1112 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import native from "native" /* 4974 */;
import HapticUtils from "HapticUtils" /* 5129 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import CheckpointStepHeaderRefContext from "CheckpointStepHeaderRefContext" /* 12540 */;
import CheckpointTextDefault from "CheckpointText" /* 12722 */;
import CheckpointBackgroundDefault from "CheckpointBackground" /* 12727 */;
import CheckpointUnavailableScreenDefault from "CheckpointUnavailableScreen" /* 12746 */;
import CheckpointHeaderDefault from "CheckpointHeader" /* 12785 */;
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
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointMessageModal.tsx");

export default function CheckpointMessageModal(message) {
  let ThemeContextProvider;
  let items;
  let items1;
  let obj2;
  let obj3;
  let obj6;
  let obj7;
  message = message.message;
  const tmp = closure_8();
  const rect = useSafeAreaInsetsDefault();
  const intl = intl2.intl;
  const obj = { children: metroRequire(ThemeContextProvider, obj2) };
  const stringResult = intl.string(intl2.t.cpT0Cq);
  const CheckpointStepFocusProvider = CheckpointStepHeaderRefContext.CheckpointStepFocusProvider;
  obj2 = { theme: ThemeTypes.DARK, children: metroImportDefault(React3, obj3) };
  obj3 = { style: tmp.container, children: items };
  ThemeContextProvider = native.ThemeContextProvider;
  items = [metroRequire(CheckpointBackgroundDefault, {}), , , ];
  const obj4 = { children: metroRequire(CheckpointTextDefault, { isStepHeading: true, variant: "heading-lg/medium", children: message }) };
  const tmp3 = CheckpointUnavailableScreenDefault;
  items[1] = metroRequire(tmp3, obj4);
  items[2] = metroRequire(CheckpointHeaderDefault, {});
  const obj5 = { style: items1, children: metroRequire(_false, obj6) };
  items1 = [tmp.footer, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  obj6 = { style: tmp.closeButton, onPress: handleClose, accessibilityRole: "button", children: metroRequire(CheckpointTextDefault, obj7) };
  obj7 = { variant: "mono-md/normal", style: tmp.closeButtonLabel, children: stringResult };
  items[3] = metroRequire(React3, obj5);
  return metroRequire(CheckpointStepFocusProvider, obj);
};
