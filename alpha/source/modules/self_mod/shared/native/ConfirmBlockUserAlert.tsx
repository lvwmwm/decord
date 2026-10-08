// Module ID: 10399
// Function ID: 10400
// Name: ConfirmBlockUserAlert
// Dependencies: [19, 17, 1389, 10361, 21, 5090, 587, 558, 576, 504, 10400, 4922, 7004, 7014, 7695, 5375, 1126, 5086, 5394, 2]

// Module 10399 (ConfirmBlockUserAlert)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7004 */;
import ReportModals from "ReportModals" /* 7695 */;
import Constants from "Constants" /* 10361 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let nextPromise, obj1, tmp2, tmp3;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const LOCATION_CONTEXT_MOBILE = Constants.LOCATION_CONTEXT_MOBILE;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, text: obj3, buttonsContainer: obj4 };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, textAlign: "center" };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_4, textAlign: "center" };
obj4 = { gap: nativeDefault.space.PX_12, marginBottom: -nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConfirmBlockUserAlert(userId) {
  let closure_7;
  let description;
  let first;
  let onCancel;
  let tmp11;
  let tmp12;
  let tmp7;
  let obj = userId(onCancel[8]);
  const cResult = obj.c(47);
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ description, onCancel } = userId);
  const onClose = userId.onClose;
  const onBlockAndReport = userId.onBlockAndReport;
  const onBlock = userId.onBlock;
  closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [onBlock];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    class C {
      constructor() {
        return closure_5.getUser(userId);
      }
    }
    cResult[1] = userId;
    cResult[2] = C;
    tmp7 = C;
  } else {
    class C {
      constructor() {
        return closure_5.getUser(userId);
      }
    }
  }
  const tmpResult = userId(onCancel[9]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmpResult2 = userId(onCancel[10]);
  const lastChannelMessage = tmpResult2.useLastChannelMessage(channelId);
  const obj4 = channelId(onCancel[11]);
  const name = obj4.useName(stateFromStores);
  if (cResult[3] === channelId) {
    class C {
      constructor() {
        return closure_5.getUser(userId);
      }
    }
    if (cResult[6] === onCancel) {
      class C {
        constructor() {
          return closure_5.getUser(userId);
        }
      }
      const onPress = tmp12;
      if (cResult[9] === tmp11) {
        class C {
          constructor() {
            return closure_5.getUser(userId);
          }
        }
      }
      class M {
        constructor() {
          tmp = onClose();
          tmp2 = closure_7();
          tmp3 = onBlock();
          return;
        }
      }
      cResult[9] = tmp11;
      cResult[10] = onBlock;
      cResult[11] = onClose;
      cResult[12] = M;
    }
    class S {
      constructor() {
        tmp = onClose();
        tmp2 = onCancel();
        return;
      }
    }
    cResult[6] = onCancel;
    cResult[7] = onClose;
    cResult[8] = S;
    tmp12 = S;
  }
  class E {
    constructor() {
      obj = closure_1(closure_2[12]);
      obj1 = { location: LOCATION_CONTEXT_MOBILE };
      blockUserResult = obj.blockUser(userId, obj1);
      nextPromise = blockUserResult.then(() => { /* body not rendered: F141767 */ });
      return;
    }
  }
  cResult[3] = channelId;
  cResult[4] = userId;
  cResult[5] = E;
  tmp11 = E;
}) : (function ConfirmBlockUserAlert(userId) {
  let description;
  let intl;
  let intl3;
  let intl4;
  let items5;
  let items6;
  let onCancel;
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ description, onCancel } = userId);
  const onClose = userId.onClose;
  const onBlockAndReport = userId.onBlockAndReport;
  const onBlock = userId.onBlock;
  let str = userId.blockButtonVariant;
  const tmp = closure_9();
  let obj = userId(onCancel[9]);
  const items = [onBlock];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let obj2 = userId(onCancel[10]);
  const lastChannelMessage = obj2.useLastChannelMessage(channelId);
  const obj3 = channelId(onCancel[11]);
  const name = obj3.useName(stateFromStores);
  const items1 = [userId, channelId];
  const callback = onClose.useCallback(() => {
    let obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: LOCATION_CONTEXT_MOBILE };
    const blockUserResult = obj.blockUser(userId, obj2);
    blockUserResult.then(() => {
      const obj = channelId(onCancel[13]);
      const result = obj.showBlockSuccessToast(userId, closure_1_1);
    });
  }, items1);
  const items2 = [onClose, onCancel];
  const onPress = onClose.useCallback(() => {
    onClose();
    onCancel();
  }, items2);
  const items3 = [onClose, callback, onBlock];
  const items4 = [lastChannelMessage, onClose, callback, onBlockAndReport];
  const callback1 = onClose.useCallback(() => {
    onClose();
    callback();
    onBlock();
  }, items3);
  const callback2 = onClose.useCallback(() => {
    onClose();
    callback();
    const obj = ReportModals;
    const result = obj.showReportModalForInappropriateConversationSafetyAlert(lastChannelMessage);
    if (onBlockAndReport != null) {
      onBlockAndReport();
    }
  }, items4);
  const obj4 = {
    renderConfirmButton() {
      let intl;
      const obj = { size: "lg", onPress, text: intl.string(intl5.t["ETE/oC"]), variant: "secondary" };
      const Button = components_Button_Button.Button;
      intl = intl5.intl;
      return metroImportDefault(Button, obj);
    },
    children: items5
  };
  const obj5 = { style: tmp.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl.format(userId(onCancel[16]).t.x5pOn9, { name }) };
  const tmp11 = channelId(onCancel[18]);
  const Text = userId(onCancel[17]).Text;
  intl = userId(onCancel[16]).intl;
  items5 = [callback(Text, obj5), , ];
  const obj6 = { style: tmp.text, variant: "text-md/medium", children: description };
  const Text2 = userId(onCancel[17]).Text;
  if (description == null) {
    const intl2 = tmp2(tmp3[16]).intl;
    const obj7 = { name };
    description = intl2.format(tmp2(tmp3[16]).t.pegItC, obj7);
  }
  items5[1] = callback(Text2, obj6);
  const obj8 = { style: tmp.buttonsContainer, children: items6 };
  const obj9 = { size: "lg", onPress: callback1, text: intl3.string(userId(onCancel[16]).t.l4Emac), variant: str };
  let Button = tmp2(tmp3[15]).Button;
  intl3 = tmp2(tmp3[16]).intl;
  const tmp13 = onBlockAndReport;
  if (str == null) {
    str = "destructive";
  }
  items6 = [callback(Button, obj9), ];
  let tmp12Result = null != onBlockAndReport;
  if (tmp12Result) {
    const obj10 = { size: "lg", onPress: callback2, text: intl4.string(userId(onCancel[16]).t["39O+8F"]), variant: "secondary" };
    const Button2 = tmp2(tmp3[15]).Button;
    intl4 = tmp2(tmp3[16]).intl;
    tmp12Result = tmp12(Button2, obj10);
  }
  items6[1] = tmp12Result;
  items5[2] = onPress(tmp13, obj8);
  return onPress(tmp11, obj4);
});
let result = size.fileFinishedImporting("modules/self_mod/shared/native/ConfirmBlockUserAlert.tsx");

export default tmp4;
