// Module ID: 17579
// Function ID: 17580
// Name: JankChatPanelReporter
// Dependencies: [19, 21, 17580, 17583, 2]
// Exports: default

// Module 17579 (JankChatPanelReporter)
import Fragment from "Fragment" /* 21 */;
import getJankScreenName from "getJankScreenName" /* 17580 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/jank_stats/native/JankChatPanelReporter.native.tsx");

export default function JankChatPanelReporter(channelId) {
  let maxWidth;
  let ref;
  let translateX;
  channelId = channelId.channelId;
  const showCreateThread = channelId.showCreateThread;
  ({ translateX, maxWidth } = channelId);
  dependencyMap = react.useRef({ channelId, showCreateThread });
  const items = [channelId, showCreateThread];
  const effect = react.useEffect(() => {
    const obj = { channelId, showCreateThread };
    ref.current = obj;
  }, items);
  const callback = react.useCallback(() => {
    ({ channelId, showCreateThread } = ref.current);
    const obj = getJankScreenName;
    return obj.getChatPanelScreenName(channelId, showCreateThread);
  }, []);
  showCreateThread(17583);
  return <tmp3 position={translateX} openAt={0} closedAt={maxWidth} resolveOpenName={callback} resolveClosedName={channelId(17580).getPanelListScreenName} />;
};
