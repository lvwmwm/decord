// Module ID: 12121
// Function ID: 12122
// Name: SpamMessageHamActionSheet
// Dependencies: [32, 19, 17, 1390, 21, 5091, 587, 558, 576, 4768, 1126, 5008, 5055, 504, 12116, 6887, 6835, 8563, 5376, 6836, 2]

// Module 12121 (SpamMessageHamActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import AssetRegistryDefault from "AssetRegistry" /* 5008 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6835 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6836 */;
import ActionSheetCloseButton from "ActionSheetCloseButton" /* 6887 */;
import Form from "Form" /* 8563 */;
import useMessageRequestActions from "useMessageRequestActions" /* 12116 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SpamMessageRequestHamActionSheet(channel) {
  let closure_4;
  let first;
  let first1;
  let isAcceptLoading;
  let isOptimisticAccepted;
  let onCancel;
  let tmp11;
  let tmp13;
  let tmp8;
  let tmp9;
  const tmp = channel;
  let obj = channel(onCancel[8]);
  const cResult = obj.c(44);
  channel = channel.channel;
  const onConfirm = channel.onConfirm;
  onCancel = channel.onCancel;
  closure_9();
  const tmp5 = first(react.useState(false), 2);
  first = tmp5[0];
  react = tmp5[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function handleRequestError() {
      let intl;
      const obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: intl.string(channel(onCancel[10]).t["EDYbS+"]), icon: onConfirm(onCancel[11]) };
      const open = onConfirm(onCancel[9]).open;
      onConfirm(onCancel[9]);
      intl = channel(onCancel[10]).intl;
      open(obj);
    }
    cResult[0] = handleRequestError;
    first1 = handleRequestError;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    function handleAcceptSuccess() {
      const obj = onConfirm(onCancel[12]);
      obj.hideActionSheet();
    }
    cResult[1] = handleAcceptSuccess;
    tmp8 = handleAcceptSuccess;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[2] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== channel) {
    class P {
      constructor() {
        return UserStore.getUser(channel.getRecipientId());
      }
    }
    cResult[3] = channel;
    cResult[4] = P;
    tmp11 = P;
  } else {
    class P {
      constructor() {
        return UserStore.getUser(channel.getRecipientId());
      }
    }
  }
  const tmpResult = tmp(onCancel[13]);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11);
  if (cResult[5] !== stateFromStores) {
    class P {
      constructor() {
        return UserStore.getUser(channel.getRecipientId());
      }
    }
    tmp14[0] = stateFromStores;
    tmp14[1] = first1;
    tmp14[2] = tmp8;
    cResult[5] = stateFromStores;
    cResult[6] = tmp14;
    tmp13 = tmp14;
  } else {
    class P {
      constructor() {
        return UserStore.getUser(channel.getRecipientId());
      }
    }
  }
  const tmpResult2 = tmp(onCancel[14]);
  const messageRequestActions = tmpResult2.useMessageRequestActions(tmp13);
  const acceptMessageRequest = messageRequestActions.acceptMessageRequest;
  ({ isAcceptLoading, isOptimisticAccepted } = messageRequestActions);
  if (cResult[7] === acceptMessageRequest) {
    class P {
      constructor() {
        return UserStore.getUser(channel.getRecipientId());
      }
    }
  }
  function handleAccept() {
    onConfirm(first);
    acceptMessageRequest(channel.id);
  }
  cResult[7] = acceptMessageRequest;
  cResult[8] = channel.id;
  cResult[9] = first;
  cResult[10] = onConfirm;
  cResult[11] = handleAccept;
}) : (function SpamMessageRequestHamActionSheet(arg0) {
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
      const obj = { key: "MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE", content: intl.string(intl4.t["EDYbS+"]), icon: AssetRegistryDefault };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl4.intl;
      open(obj);
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
  const FormSwitchRow = Form.FormSwitchRow;
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
});
const result = size.fileFinishedImporting("modules/message_request/native/spam/SpamMessageHamActionSheet.tsx");

export default tmp4;
