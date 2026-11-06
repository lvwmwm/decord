// Module ID: 18338
// Function ID: 18339
// Name: JankChatPanelReporter
// Dependencies: [19, 21, 18339, 18342, 2]
// Exports: default

// Module 18338 (JankChatPanelReporter)
import Fragment from "Fragment" /* 21 */;
import getJankScreenName from "getJankScreenName" /* 18339 */;
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
  showCreateThread(18342);
  return <tmp3 position={translateX} openAt={0} closedAt={maxWidth} resolveOpenName={callback} resolveClosedName={channelId(18339).getPanelListScreenName} />;
};
