// Module ID: 10559
// Function ID: 82395
// Name: useRevealProviderValue
// Dependencies: [31, 3823, 4144, 10240, 33, 566, 10242, 10560, 477, 4066, 7530, 10566, 2]
// Exports: default

// Module 10559 (useRevealProviderValue)
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import resetFocusTimer from "resetFocusTimer";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
let require = arg1;
function useRevealProviderValue(arg0, channel) {
  let tmp = arg0;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => null != outer1_4.getKey());
  const obj = require(566) /* initialize */;
  const tmp3 = importDefault(10242)(channel);
  const tmp4 = callback2();
  const items1 = [closure_5];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => null != outer1_5.getAwaitingRemoteSessionInfo());
  const obj2 = require(566) /* initialize */;
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
  require = tmp;
  const tmp6 = importDefault(10560)(channel.id);
  const tmp8 = !require(477) /* set */.isIOS();
  let tmp9 = !tmp8;
  if (!tmp8) {
    tmp9 = tmp6;
  }
  importDefault = tmp9;
  const items2 = [tmp, tmp9];
  return importAllResult.useMemo(() => ({ reveal: closure_0, prefersDeferringSystemGestures: closure_1 }), items2);
}
({ useChannelCallStore: closure_6, focusTimeout: closure_7, resetFocusTimer: closure_8, useIsVoiceChatFocused: closure_9 } = resetFocusTimer);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const context = importAllResult.createContext({ reveal: true });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/native/components/RevealProvider.tsx");

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
  let c0;
  const tmp = callback((focus) => focus.focus);
  c0 = tmp;
  const tmp2 = useRevealProviderValue(tmp, channel);
  ({ reveal, prefersDeferringSystemGestures } = tmp2);
  const items = [tmp];
  const effect = importAllResult.useEffect(() => {
    if (c0) {
      outer1_8();
    } else {
      outer1_7.stop();
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
  const items1 = [closure_10(importDefault(7530), obj), children, ];
  obj = {};
  let tmp11 = !reveal;
  const tmp5 = closure_11;
  const tmp6 = closure_10;
  const tmp7 = importDefault(7530);
  const tmp9 = closure_10;
  if (tmp11) {
    tmp11 = !prefersDeferringSystemGestures;
  }
  obj.prefersHidden = tmp11;
  obj.prefersDeferringSystemGestures = prefersDeferringSystemGestures;
  items1[2] = tmp9(importDefault(10566), obj);
  obj.children = items1;
  return tmp5(context.Provider, obj);
};
export const RevealContext = context;
export { useRevealProviderValue };
