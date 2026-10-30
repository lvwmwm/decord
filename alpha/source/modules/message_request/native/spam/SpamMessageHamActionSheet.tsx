// Module ID: 13970
// Function ID: 13971
// Name: SpamMessageHamActionSheet
// Dependencies: [32, 19, 17, 1384, 21, 5009, 575, 504, 13965, 5707, 1114, 5253, 5267, 7315, 7361, 8169, 5629, 2]
// Exports: default

// Module 13970 (SpamMessageHamActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5267 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7315 */;
import ActionSheetCloseButton from "ActionSheetCloseButton" /* 7361 */;
import _mod8169 from "module_8169" /* 8169 */;
import useMessageRequestActions from "useMessageRequestActions" /* 13965 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, container: obj3, buttonContainer: obj4, switch: { paddingHorizontal: 0 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_24 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/message_request/native/spam/SpamMessageHamActionSheet.tsx");

export default function SpamMessageRequestHamActionSheet(arg0) {
  let Button;
  let _undefined;
  let c5;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let isAcceptLoading;
  let isOptimisticAccepted;
  let items1;
  let items2;
  let obj10;
  let obj6;
  let recipientId;
  ({ channel: require, onConfirm: importDefault, onCancel: dependencyMap } = arg0);
  let value;
  react = undefined;
  c5 = undefined;
  const tmp = closure_9();
  const tmp2 = value(react.useState(false), 2);
  value = tmp2[0];
  react = tmp2[1];
  let obj = get_initialized;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(require.getRecipientId()));
  const obj2 = useMessageRequestActions;
  const obj3 = {
    user: stateFromStores,
    onError: function handleRequestError() {
      let intl;
      const obj = { text: intl.string(intl4.t["EDYbS+"]), variant: "critical" };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl4.intl;
      open("MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", obj);
    },
    onAcceptSuccess: function handleAcceptSuccess() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  const messageRequestActions = obj2.useMessageRequestActions(obj3);
  ({ acceptMessageRequest: c5, isAcceptLoading, isOptimisticAccepted } = messageRequestActions);
  const isUserProfileLoading = messageRequestActions.isUserProfileLoading;
  const obj4 = {
    onDismiss: function handleDismiss() {
      dependencyMap();
    },
    children: items1
  };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const obj5 = { title: intl.string(intl4.t["9ty6yc"]), trailing: closure_7(ActionSheetCloseButton.ActionSheetCloseButton, obj6), backgroundColor: tmp.header };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl4.intl;
  obj6 = {
    onPress: function handleClose() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      dependencyMap();
    }
  };
  items1 = [closure_7(BottomSheetTitleHeader, obj5), ];
  const obj7 = { style: tmp.container, children: items2 };
  const obj8 = {
    style: tmp.switch,
    label: intl2.string(intl4.t.ZhGpNQ),
    value,
    switchProps: { renderIosBackground: true },
    onValueChange(arg0) {
      return closure_4(arg0);
    }
  };
  const FormSwitchRow = _mod8169.FormSwitchRow;
  intl2 = intl4.intl;
  items2 = [closure_7(FormSwitchRow, obj8), ];
  const obj9 = { style: tmp.buttonContainer, children: closure_7(Button, obj10) };
  obj10 = {
    size: "md",
    onPress: function handleAccept() {
      importDefault(first);
      _undefined(require.id);
    },
    text: intl3.string(intl4.t.olZgw5),
    disabled: isAcceptLoading || isUserProfileLoading || isOptimisticAccepted,
    loading: isAcceptLoading
  };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  if (!isAcceptLoading) {
    isAcceptLoading = isOptimisticAccepted;
  }
  items2[1] = closure_7(c5, obj9);
  items1[1] = closure_8(c5, obj7);
  return closure_8(BottomSheet, obj4);
};
