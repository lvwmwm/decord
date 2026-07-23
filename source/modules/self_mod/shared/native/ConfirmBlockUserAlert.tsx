// Module ID: 10145
// Function ID: 78493
// Name: ConfirmBlockUserAlert
// Dependencies: [31, 27, 1849, 10134, 33, 4130, 689, 566, 10136, 3969, 8923, 7488, 7600, 4561, 4543, 1212, 4126, 2]
// Exports: default

// Module 10145 (ConfirmBlockUserAlert)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { LOCATION_CONTEXT_MOBILE } from "LOCATION_CONTEXT_MOBILE";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, textAlign: "center" };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, textAlign: "center" };
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, textAlign: "center" };
_createForOfIteratorHelperLoose.buttonsContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: -require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: -require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/self_mod/shared/native/ConfirmBlockUserAlert.tsx");

export default function ConfirmBlockUserAlert(userId) {
  let description;
  let onCancel;
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ description, onCancel } = userId);
  const onClose = userId.onClose;
  const onBlockAndReport = userId.onBlockAndReport;
  const onBlock = userId.onBlock;
  const blockButtonVariant = userId.blockButtonVariant;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = userId(onCancel[7]);
  const items = [onBlock];
  const stateFromStores = obj.useStateFromStores(items, () => onBlock.getUser(userId));
  let obj1 = userId(onCancel[8]);
  const lastChannelMessage = obj1.useLastChannelMessage(channelId);
  let obj2 = channelId(onCancel[9]);
  const name = obj2.useName(stateFromStores);
  const items1 = [userId, channelId];
  const callback = onClose.useCallback(() => {
    let obj = channelId(onCancel[10]);
    obj = { location: lastChannelMessage };
    obj.blockUser(userId, obj).then(() => {
      const result = channelId(onCancel[11]).showBlockSuccessToast(outer1_0, outer1_1);
    });
  }, items1);
  const items2 = [onClose, onCancel];
  let closure_8 = onClose.useCallback(() => {
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
    const result = userId(onCancel[12]).showReportModalForInappropriateConversationSafetyAlert(lastChannelMessage);
    if (null != onBlockAndReport) {
      onBlockAndReport();
    }
  }, items4);
  obj = {
    renderConfirmButton() {
      const obj = { size: "lg", onPress: closure_8 };
      const intl = userId(onCancel[15]).intl;
      obj.text = intl.string(userId(onCancel[15]).t["ETE/oC"]);
      obj.variant = "secondary";
      return callback(userId(onCancel[14]).Button, obj);
    }
  };
  obj = { style: tmp.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary" };
  let intl = userId(onCancel[15]).intl;
  obj.children = intl.format(userId(onCancel[15]).t.x5pOn9, { name });
  const items5 = [callback(userId(onCancel[16]).Text, obj), , ];
  obj1 = { style: tmp.text, variant: "text-md/medium" };
  if (null == description) {
    const intl2 = userId(onCancel[15]).intl;
    obj2 = { name };
    description = intl2.format(userId(onCancel[15]).t.pegItC, obj2);
  }
  obj1.children = description;
  items5[1] = callback(userId(onCancel[16]).Text, obj1);
  const obj3 = { style: tmp.buttonsContainer };
  const obj4 = { size: "lg", onPress: callback1 };
  const intl3 = userId(onCancel[15]).intl;
  obj4.text = intl3.string(userId(onCancel[15]).t.l4Emac);
  let str = "destructive";
  if (null != blockButtonVariant) {
    str = blockButtonVariant;
  }
  obj4.variant = str;
  const items6 = [callback(userId(onCancel[14]).Button, obj4), ];
  let tmp16 = null != onBlockAndReport;
  if (tmp16) {
    const obj5 = { size: "lg", onPress: callback2 };
    const intl4 = userId(onCancel[15]).intl;
    obj5.text = intl4.string(userId(onCancel[15]).t["39O+8F"]);
    obj5.variant = "secondary";
    tmp16 = callback(userId(onCancel[14]).Button, obj5);
  }
  items6[1] = tmp16;
  obj3.children = items6;
  items5[2] = closure_8(onBlockAndReport, obj3);
  obj.children = items5;
  return closure_8(channelId(onCancel[13]), obj);
};
