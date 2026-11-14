// Module ID: 12311
// Function ID: 12312
// Name: SafetyToolsActionSheetWrapper
// Dependencies: [19, 5155, 21, 504, 5566, 12312, 2]
// Exports: default

// Module 12311 (SafetyToolsActionSheetWrapper)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetWrapper.tsx");

export default function SafetyToolsActionSheetWrapper(channelId) {
  let children;
  let hasHeaderBack;
  let headerTitle;
  let recipientId;
  let warningId;
  let warningType;
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  let stateFromStores;
  ({ headerTitle, hasHeaderBack, warningId, warningType, recipientId, children } = channelId);
  const items = [ChannelStore];
  const obj = channelId(stateFromStores[3]);
  const tmp2 = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [stateFromStores, onClose];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp5 = null;
  const tmp = channelId;
  if (null != stateFromStores) {
    const BottomSheet = tmp(tmp2[4]).BottomSheet;
    tmp5 = <BottomSheet showGradient startExpanded header={null}>{children}</BottomSheet>;
  }
  return tmp5;
};
