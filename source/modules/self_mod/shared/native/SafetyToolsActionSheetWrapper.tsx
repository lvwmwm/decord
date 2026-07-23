// Module ID: 10141
// Function ID: 78478
// Name: SafetyToolsActionSheetWrapper
// Dependencies: [31, 1348, 33, 566, 5187, 10142, 2]
// Exports: default

// Module 10141 (SafetyToolsActionSheetWrapper)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetWrapper.tsx");

export default function SafetyToolsActionSheetWrapper(channelId) {
  let children;
  let hasHeaderBack;
  let headerTitle;
  let recipientId;
  let warningId;
  let warningType;
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  ({ headerTitle, hasHeaderBack, warningId, warningType, recipientId, children } = channelId);
  let obj = channelId(stateFromStores[3]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(channelId));
  const items1 = [stateFromStores, onClose];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { showGradient: true, startExpanded: true };
    obj = { recipientId, warningId, warningType, hasBackButton: hasHeaderBack, title: headerTitle, channelId };
    obj.header = jsx(onClose(stateFromStores[5]), { recipientId, warningId, warningType, hasBackButton: hasHeaderBack, title: headerTitle, channelId });
    obj.children = children;
    tmp3 = jsx(channelId(stateFromStores[4]).BottomSheet, { recipientId, warningId, warningType, hasBackButton: hasHeaderBack, title: headerTitle, channelId });
  }
  return tmp3;
};
