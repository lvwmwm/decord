// Module ID: 11268
// Function ID: 11269
// Name: ConfirmBlockUserAlert
// Dependencies: [19, 17, 1384, 11230, 21, 5009, 575, 504, 11269, 5063, 7482, 7490, 8344, 6025, 5629, 1114, 5619, 2]
// Exports: default

// Module 11268 (ConfirmBlockUserAlert)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7482 */;
import ReportModals from "ReportModals" /* 8344 */;
import Constants from "Constants" /* 11230 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

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
let result = size.fileFinishedImporting("modules/self_mod/shared/native/ConfirmBlockUserAlert.tsx");

export default function ConfirmBlockUserAlert(userId) {
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
  let obj = userId(onCancel[7]);
  const items = [onBlock];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let obj2 = userId(onCancel[8]);
  const lastChannelMessage = obj2.useLastChannelMessage(channelId);
  const obj3 = channelId(onCancel[9]);
  const name = obj3.useName(stateFromStores);
  const items1 = [userId, channelId];
  const callback = onClose.useCallback(() => {
    let obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: LOCATION_CONTEXT_MOBILE };
    const blockUserResult = obj.blockUser(userId, obj2, channelId);
    blockUserResult.then(() => {
      const obj = channelId(onCancel[11]);
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
  const obj5 = { style: tmp.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl.format(userId(onCancel[15]).t.x5pOn9, { name }) };
  const tmp11 = channelId(onCancel[13]);
  const Text = userId(onCancel[16]).Text;
  intl = userId(onCancel[15]).intl;
  items5 = [callback(Text, obj5), , ];
  const obj6 = { style: tmp.text, variant: "text-md/medium", children: description };
  const Text2 = userId(onCancel[16]).Text;
  if (description == null) {
    const intl2 = tmp2(tmp3[15]).intl;
    const obj7 = { name };
    description = intl2.format(tmp2(tmp3[15]).t.pegItC, obj7);
  }
  items5[1] = callback(Text2, obj6);
  const obj8 = { style: tmp.buttonsContainer, children: items6 };
  const obj9 = { size: "lg", onPress: callback1, text: intl3.string(userId(onCancel[15]).t.l4Emac), variant: str };
  let Button = tmp2(tmp3[14]).Button;
  intl3 = tmp2(tmp3[15]).intl;
  const tmp13 = onBlockAndReport;
  if (str == null) {
    str = "destructive";
  }
  items6 = [callback(Button, obj9), ];
  let tmp12Result = null != onBlockAndReport;
  if (tmp12Result) {
    const obj10 = { size: "lg", onPress: callback2, text: intl4.string(userId(onCancel[15]).t["39O+8F"]), variant: "secondary" };
    const Button2 = tmp2(tmp3[14]).Button;
    intl4 = tmp2(tmp3[15]).intl;
    tmp12Result = tmp12(Button2, obj10);
  }
  items6[1] = tmp12Result;
  items5[2] = onPress(tmp13, obj8);
  return onPress(tmp11, obj4);
};
