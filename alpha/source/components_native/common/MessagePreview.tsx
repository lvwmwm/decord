// Module ID: 19176
// Function ID: 19177
// Name: MessagePreview
// Dependencies: [19, 8937, 1071, 21, 504, 1112, 18970, 9087, 2]
// Exports: default

// Module 19176 (MessagePreview)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import react from "react" /* 19 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8937 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let AnalyticsObjects;
let AnalyticsSections;
({ AnalyticsSections, AnalyticsObjects } = Constants);
const jsx = Fragment.jsx;
const analyticsLocation = { section: AnalyticsSections.CHANNEL_SEARCH, object: AnalyticsObjects.CHANNEL_SEARCH };
const result = size.fileFinishedImporting("components_native/common/MessagePreview.tsx");

export default function MessagePreview(onBeforeJumpToMessage) {
  onBeforeJumpToMessage = onBeforeJumpToMessage.onBeforeJumpToMessage;
  const channelId = onBeforeJumpToMessage.channelId;
  let obj = onBeforeJumpToMessage(504);
  const items = [MessagePreviewStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ messages: MessagePreviewStore.messages, jumpTargetId: MessagePreviewStore.jumpTargetId }));
  const jumpTargetId = stateFromStoresObject.jumpTargetId;
  const items1 = [jumpTargetId, onBeforeJumpToMessage];
  const messages = stateFromStoresObject.messages;
  const memo = react.useMemo(() => {
    let intl;
    const obj = { jumpToChatText: intl.string(intl2.t["+TSRGD"]), jumpTargetId, onBeforeJumpToMessage };
    intl = intl2.intl;
    return obj;
  }, items1);
  const effect = react.useEffect(() => () => {
    const obj = jumpTargetId(closure_1_2[6]);
    obj.clearMessages();
  }, []);
  return jsx(onBeforeJumpToMessage(9087).ChatPreview, { channelId, messages, jumpToChatProps: memo, analyticsLocation });
};
