// Module ID: 11278
// Function ID: 11279
// Name: SafetyToolsActionSheetWrapper
// Dependencies: [19, 4858, 21, 504, 5267, 11279, 2]
// Exports: default

// Module 11278 (SafetyToolsActionSheetWrapper)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import size from "module_2" /* 2 */;

let BottomSheet;

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
    BottomSheet = tmp(tmp2[4]).BottomSheet;
    tmp5 = <BottomSheet showGradient startExpanded header={null}>{children}</BottomSheet>;
  }
  return tmp5;
};
