// Module ID: 9680
// Function ID: 9681
// Name: RevealProvider
// Dependencies: [19, 4479, 4805, 9672, 21, 504, 9674, 9681, 1364, 4722, 4639, 9682, 9684, 2]
// Exports: default

// Module 9680 (RevealProvider)
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall" /* 9674 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9681 */;
import StatusBarDefault from "StatusBar" /* 9682 */;
import HomeIndicatorDefault from "HomeIndicator" /* 9684 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4479 */;
import GameConsoleStore from "GameConsoleStore" /* 4805 */;

const require = globalThis.__r;

const require = fn;
function useRevealProviderValue(arg0, channel) {
  let tmp = arg0;
  const items = [ActionSheetStore];
  const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => null != key.getKey());
  const obj = stateFromStores1(504);
  const tmp2 = stateFromStores1;
  const tmp5 = useIsPrivateAudioOnlyCallDefault(channel);
  const tmp6 = closure_9();
  const items1 = [GameConsoleStore];
  stateFromStores1 = stateFromStores1(504).useStateFromStores(items1, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const obj2 = stateFromStores1(504);
  if (!arg0) {
    tmp = stateFromStores;
  }
  if (!tmp) {
    tmp = tmp5;
  }
  if (!tmp) {
    tmp = null === channel;
  }
  if (!tmp) {
    tmp = tmp6;
  }
  if (!tmp) {
    tmp = stateFromStores1;
  }
  stateFromStores1 = tmp;
  const tmp8 = useIsActivityFocusedDefault(channel.id);
  const tmp10 = tmp2(1364).isIOS() && tmp8;
  importDefault = tmp10;
  const items2 = [tmp, tmp10];
  return noop.useMemo(() => ({ reveal: stateFromStores1, prefersDeferringSystemGestures }), items2);
}
const ChannelCallStore = fn(9672);
({ useChannelCallStore: metroRequire, focusTimeout: closure_7, resetFocusTimer: closure_8, useIsVoiceChatFocused: closure_9 } = ChannelCallStore);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const context = noop.createContext({ reveal: true });
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/RevealProvider.tsx");

export default function RevealProvider(showStatus) {
  let flag = showStatus.showStatus;
  ({ channel, children } = showStatus);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showStatus.useThemedBarStyle;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_6((focus) => focus.focus);
  _require = tmp;
  const tmp2 = useRevealProviderValue(tmp, channel);
  ({ reveal, prefersDeferringSystemGestures } = tmp2);
  const items = [tmp];
  const effect = noop.useEffect(() => {
    if (closure_0) {
      React6();
    } else {
      React5.stop();
    }
  }, items);
  if (!flag2) {
    let str = "light-content";
  } else {
    str = "dark-content";
    const obj = require("shared");
  }
  const obj2 = { value: tmp2, children: null };
  let tmp11 = !reveal;
  if (!reveal) {
    tmp11 = !flag;
  }
  const items1 = [closure_10(StatusBarDefault, { hidden: tmp11, animated: true, barStyle: str }), children, ];
  let tmp13 = !reveal;
  const tmp4Result = StatusBarDefault;
  const tmp8 = closure_11;
  if (!reveal) {
    tmp13 = !prefersDeferringSystemGestures;
  }
  items1[2] = closure_10(HomeIndicatorDefault, { prefersHidden: tmp13, prefersDeferringSystemGestures });
  obj2.children = items1;
  return tmp8(context.Provider, obj2);
};
export const RevealContext = context;
export { useRevealProviderValue };
