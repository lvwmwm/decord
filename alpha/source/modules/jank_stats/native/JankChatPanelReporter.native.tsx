// Module ID: 15837
// Function ID: 15838
// Name: JankChatPanelReporter
// Dependencies: [19, 21, 15838, 15841, 2]
// Exports: default

// Module 15837 (JankChatPanelReporter)
import getJankScreenName from "getJankScreenName" /* 15838 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/jank_stats/native/JankChatPanelReporter.native.tsx");

export default function JankChatPanelReporter(channelId) {
  channelId = channelId.channelId;
  const showCreateThread = channelId.showCreateThread;
  ({ translateX, maxWidth } = channelId);
  dependencyMap = noop.useRef({ channelId, showCreateThread });
  const items = [channelId, showCreateThread];
  const effect = noop.useEffect(() => {
    closure_2.current = { channelId, showCreateThread };
  }, items);
  const callback = noop.useCallback(() => {
    ({ channelId, showCreateThread } = ref.current);
    return getJankScreenName.getChatPanelScreenName(channelId, showCreateThread);
  }, []);
  const obj = { position: translateX, openAt: 0, closedAt: maxWidth, resolveOpenName: callback, resolveClosedName: channelId(15838).getPanelListScreenName };
  return jsx(showCreateThread(15841), { position: translateX, openAt: 0, closedAt: maxWidth, resolveOpenName: callback, resolveClosedName: channelId(15838).getPanelListScreenName });
};
