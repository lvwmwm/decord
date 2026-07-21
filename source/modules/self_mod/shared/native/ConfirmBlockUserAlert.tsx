// Module ID: 10136
// Function ID: 78440
// Name: ConfirmBlockUserAlert
// Dependencies: []
// Exports: default

// Module 10136 (ConfirmBlockUserAlert)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const LOCATION_CONTEXT_MOBILE = arg1(dependencyMap[3]).LOCATION_CONTEXT_MOBILE;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { color: importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY, textAlign: "center" };
obj.header = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.text = { color: importDefault(dependencyMap[6]).colors.TEXT_SUBTLE, marginTop: importDefault(dependencyMap[6]).space.PX_8, marginBottom: importDefault(dependencyMap[6]).space.PX_24, marginHorizontal: importDefault(dependencyMap[6]).space.PX_4, textAlign: "center" };
const obj1 = { color: importDefault(dependencyMap[6]).colors.TEXT_SUBTLE, marginTop: importDefault(dependencyMap[6]).space.PX_8, marginBottom: importDefault(dependencyMap[6]).space.PX_24, marginHorizontal: importDefault(dependencyMap[6]).space.PX_4, textAlign: "center" };
obj.buttonsContainer = { gap: importDefault(dependencyMap[6]).space.PX_12, marginBottom: -importDefault(dependencyMap[6]).space.PX_8 };
let closure_9 = obj.createStyles(obj);
const obj2 = { gap: importDefault(dependencyMap[6]).space.PX_12, marginBottom: -importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/self_mod/shared/native/ConfirmBlockUserAlert.tsx");

export default function ConfirmBlockUserAlert(userId) {
  let description;
  let onCancel;
  userId = userId.userId;
  const arg1 = userId;
  const channelId = userId.channelId;
  const importDefault = channelId;
  ({ description, onCancel } = userId);
  const dependencyMap = onCancel;
  const onClose = userId.onClose;
  const React = onClose;
  const onBlockAndReport = userId.onBlockAndReport;
  const View = onBlockAndReport;
  const onBlock = userId.onBlock;
  let closure_5 = onBlock;
  const blockButtonVariant = userId.blockButtonVariant;
  const tmp = callback();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => onBlock.getUser(userId));
  let obj1 = arg1(dependencyMap[8]);
  const lastChannelMessage = obj1.useLastChannelMessage(channelId);
  const LOCATION_CONTEXT_MOBILE = lastChannelMessage;
  let obj2 = importDefault(dependencyMap[9]);
  const name = obj2.useName(stateFromStores);
  const items1 = [userId, channelId];
  const callback = React.useCallback(() => {
    let obj = channelId(onCancel[10]);
    obj = { location: lastChannelMessage };
    obj.blockUser(userId, obj).then(() => {
      const result = callback(closure_2[11]).showBlockSuccessToast(closure_0, callback);
    });
  }, items1);
  const items2 = [onClose, onCancel];
  let closure_8 = React.useCallback(() => {
    onClose();
    onCancel();
  }, items2);
  const items3 = [onClose, callback, onBlock];
  const items4 = [lastChannelMessage, onClose, callback, onBlockAndReport];
  const callback1 = React.useCallback(() => {
    onClose();
    callback();
    onBlock();
  }, items3);
  const callback2 = React.useCallback(() => {
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
      obj.text = intl.string(userId(onCancel[15]).t.ETE/oC);
      obj.variant = "secondary";
      return callback(userId(onCancel[14]).Button, obj);
    }
  };
  obj = { delete: "accessibilityLabel", dispatch: "r", raw: "isArray", style: tmp.header };
  const intl = arg1(dependencyMap[15]).intl;
  obj.children = intl.format(arg1(dependencyMap[15]).t.x5pOn9, { name });
  const items5 = [callback(arg1(dependencyMap[16]).Text, obj), , ];
  obj1 = { style: tmp.text, variant: "text-md/medium" };
  if (null == description) {
    const intl2 = arg1(dependencyMap[15]).intl;
    obj2 = { name };
    description = intl2.format(arg1(dependencyMap[15]).t.pegItC, obj2);
  }
  obj1.children = description;
  items5[1] = callback(arg1(dependencyMap[16]).Text, obj1);
  const obj3 = { style: tmp.buttonsContainer };
  const obj4 = { size: "lg", onPress: callback1 };
  const intl3 = arg1(dependencyMap[15]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[15]).t.l4Emac);
  let str = "destructive";
  if (null != blockButtonVariant) {
    str = blockButtonVariant;
  }
  obj4.variant = str;
  const items6 = [callback(arg1(dependencyMap[14]).Button, obj4), ];
  let tmp16 = null != onBlockAndReport;
  if (tmp16) {
    const obj5 = { size: "lg", onPress: callback2 };
    const intl4 = arg1(dependencyMap[15]).intl;
    obj5.text = intl4.string(arg1(dependencyMap[15]).t.39O+8F);
    obj5.variant = "secondary";
    tmp16 = callback(arg1(dependencyMap[14]).Button, obj5);
  }
  items6[1] = tmp16;
  obj3.children = items6;
  items5[2] = closure_8(View, obj3);
  obj.children = items5;
  return closure_8(importDefault(dependencyMap[13]), obj);
};
