// Module ID: 8837
// Function ID: 8838
// Name: RevealProvider
// Dependencies: [19, 4521, 4853, 8829, 21, 504, 8831, 8838, 1364, 4767, 4685, 8839, 8841, 2]
// Exports: default

// Module 8837 (RevealProvider)
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall" /* 8831 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 8838 */;
import StatusBarDefault from "StatusBar" /* 8839 */;
import HomeIndicatorDefault from "HomeIndicator" /* 8841 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4521 */;
import GameConsoleStore from "GameConsoleStore" /* 4853 */;
import ChannelCallStore from "ChannelCallStore" /* 8829 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function useRevealProviderValue(arg0, channel) {
  let awaitingRemoteSessionInfo;
  let key;
  let prefersDeferringSystemGestures;
  let stateFromStores1;
  let tmp = arg0;
  const items = [ActionSheetStore];
  const obj = stateFromStores1(504);
  const stateFromStores = obj.useStateFromStores(items, () => null != key.getKey());
  const tmp5 = useIsPrivateAudioOnlyCallDefault(channel);
  const items1 = [GameConsoleStore];
  const tmp6 = closure_9();
  const obj2 = stateFromStores1(504);
  const tmp2 = stateFromStores1;
  stateFromStores1 = obj2.useStateFromStores(items1, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const tmp8 = useIsActivityFocusedDefault(channel.id);
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
  const tmp2Result = tmp2(1364);
  const tmp10 = tmp2Result.isIOS() && tmp8;
  importDefault = tmp10;
  const items2 = [tmp, tmp10];
  return react.useMemo(() => ({ reveal: stateFromStores1, prefersDeferringSystemGestures }), items2);
}
({ useChannelCallStore: metroRequire, focusTimeout: metroImportDefault, resetFocusTimer: metroImportAll, useIsVoiceChatFocused: c9 } = ChannelCallStore);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const context = react.createContext({ reveal: true });
const result = size.fileFinishedImporting("modules/video_calls/native/components/RevealProvider.tsx");

export default function RevealProvider(showStatus) {
  let channel;
  let children;
  let closure_0;
  let items1;
  let prefersDeferringSystemGestures;
  let reveal;
  let str;
  let flag = showStatus.showStatus;
  ({ channel, children } = showStatus);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showStatus.useThemedBarStyle;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let tmp = closure_6((focus) => focus.focus);
  _require = tmp;
  const tmp2 = useRevealProviderValue(tmp, channel);
  ({ reveal, prefersDeferringSystemGestures } = tmp2);
  const items = [tmp];
  const effect = react.useEffect(() => {
    const tmp = closure_0;
    if (tmp) {
      metroImportAll();
    } else {
      metroImportDefault.stop();
    }
  }, items);
  if (!flag2) {
    str = "light-content";
  } else {
    str = "dark-content";
    require("shared");
  }
  const Provider = context.Provider;
  let tmp11 = !reveal;
  const obj2 = { value: tmp2, children: items1 };
  const tmp4Result = StatusBarDefault;
  const tmp8 = closure_11;
  if (!reveal) {
    tmp11 = !flag;
  }
  items1 = [closure_10(tmp4Result, { hidden: tmp11, animated: true, barStyle: str }), children, ];
  let tmp13 = !reveal;
  const tmp4Result2 = HomeIndicatorDefault;
  if (!reveal) {
    tmp13 = !prefersDeferringSystemGestures;
  }
  items1[2] = closure_10(tmp4Result2, { prefersHidden: tmp13, prefersDeferringSystemGestures });
  return tmp8(Provider, obj2);
};
export const RevealContext = context;
export { useRevealProviderValue };
