// Module ID: 10513
// Function ID: 82106
// Name: useRevealProviderValue
// Dependencies: []
// Exports: default

// Module 10513 (useRevealProviderValue)
function useRevealProviderValue(arg0, channel) {
  let tmp = arg0;
  const items = [closure_4];
  const stateFromStores = channel(dependencyMap[5]).useStateFromStores(items, () => null != key.getKey());
  const obj = channel(dependencyMap[5]);
  const tmp3 = importDefault(dependencyMap[6])(channel);
  const tmp4 = callback2();
  const items1 = [closure_5];
  const stateFromStores1 = channel(dependencyMap[5]).useStateFromStores(items1, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const obj2 = channel(dependencyMap[5]);
  if (!arg0) {
    tmp = stateFromStores;
  }
  if (!tmp) {
    tmp = tmp3;
  }
  if (!tmp) {
    tmp = null === channel;
  }
  if (!tmp) {
    tmp = tmp4;
  }
  if (!tmp) {
    tmp = stateFromStores1;
  }
  channel = tmp;
  const tmp6 = importDefault(dependencyMap[7])(channel.id);
  const tmp8 = !channel(dependencyMap[8]).isIOS();
  let tmp9 = !tmp8;
  if (!tmp8) {
    tmp9 = tmp6;
  }
  const importDefault = tmp9;
  const items2 = [tmp, tmp9];
  return importAllResult.useMemo(() => ({ reveal: tmp, prefersDeferringSystemGestures: tmp9 }), items2);
}
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ useChannelCallStore: closure_6, focusTimeout: closure_7, resetFocusTimer: closure_8, useIsVoiceChatFocused: closure_9 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[4]));
const context = importAllResult.createContext({ reveal: true });
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/video_calls/native/components/RevealProvider.tsx");

export default function RevealProvider(showStatus) {
  let channel;
  let children;
  let prefersDeferringSystemGestures;
  let reveal;
  let flag = showStatus.showStatus;
  ({ channel, children } = showStatus);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showStatus.useThemedBarStyle;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let arg1;
  const tmp = callback((focus) => focus.focus);
  arg1 = tmp;
  const tmp2 = useRevealProviderValue(tmp, channel);
  ({ reveal, prefersDeferringSystemGestures } = tmp2);
  const items = [tmp];
  const effect = importAllResult.useEffect(() => {
    if (tmp) {
      callback();
    } else {
      closure_7.stop();
      const tmp = closure_7;
    }
  }, items);
  let str = "light-content";
  if (flag2) {
    str = "light-content";
    if ("dark" !== tmp4) {
      str = "dark-content";
    }
  }
  let obj = { value: tmp2 };
  obj = {};
  let tmp8 = !reveal;
  if (tmp8) {
    tmp8 = !flag;
  }
  obj.hidden = tmp8;
  obj.animated = true;
  obj.barStyle = str;
  const items1 = [closure_10(importDefault(dependencyMap[10]), obj), children, ];
  obj = {};
  let tmp11 = !reveal;
  const tmp5 = closure_11;
  const tmp6 = closure_10;
  const tmp7 = importDefault(dependencyMap[10]);
  const tmp9 = closure_10;
  if (tmp11) {
    tmp11 = !prefersDeferringSystemGestures;
  }
  obj.prefersHidden = tmp11;
  obj.prefersDeferringSystemGestures = prefersDeferringSystemGestures;
  items1[2] = tmp9(importDefault(dependencyMap[11]), obj);
  obj.children = items1;
  return tmp5(context.Provider, obj);
};
export const RevealContext = context;
export { useRevealProviderValue };
