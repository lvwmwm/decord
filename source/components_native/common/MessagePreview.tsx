// Module ID: 15641
// Function ID: 15642
// Name: MessagePreview
// Dependencies: [19, 8192, 676, 21, 589, 1236, 15476, 9302, 2]
// Exports: default

// Module 15641 (MessagePreview)
import noop from "noop";
import messages from "messages";
import ME from "ME";
import { jsx } from "jsxProd";

let AnalyticsObjects;
let AnalyticsSections;
const require = arg1;
({ AnalyticsSections, AnalyticsObjects } = ME);
let closure_6 = { section: AnalyticsSections.CHANNEL_SEARCH, object: AnalyticsObjects.CHANNEL_SEARCH };
const result = require("ME").fileFinishedImporting("components_native/common/MessagePreview.tsx");

export default function MessagePreview(channelId) {
  const onBeforeJumpToMessage = channelId.onBeforeJumpToMessage;
  let jumpTargetId;
  let obj = onBeforeJumpToMessage(589);
  const items = [messages];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ messages: messages.messages, jumpTargetId: messages.jumpTargetId }));
  jumpTargetId = stateFromStoresObject.jumpTargetId;
  const items1 = [jumpTargetId, onBeforeJumpToMessage];
  const memo = React.useMemo(() => {
    const obj = { jumpToChatText: null, jumpTargetId: null, onBeforeJumpToMessage: null };
    const intl = onBeforeJumpToMessage(outer1_2[5]).intl;
    obj[0] = intl.string(onBeforeJumpToMessage(outer1_2[5]).t["+TSRGD"]);
    obj[1] = jumpTargetId;
    obj[2] = onBeforeJumpToMessage;
    return obj;
  }, items1);
  const effect = React.useEffect(() => () => {
    callback(table[6]).clearMessages();
  }, []);
  obj = { channelId: channelId.channelId, messages: stateFromStoresObject.messages, jumpToChatProps: memo, analyticsLocation: closure_6 };
  return jsx(onBeforeJumpToMessage(9302).ChatPreview, { channelId: channelId.channelId, messages: stateFromStoresObject.messages, jumpToChatProps: memo, analyticsLocation: closure_6 });
};
