// Module ID: 17030
// Function ID: 17031
// Name: useControlAccessoryHeight
// Dependencies: [19, 11754, 16997, 4566, 17003, 16877, 17001, 2]
// Exports: default

// Module 17030 (useControlAccessoryHeight)
import VoicePanelConsoleStatus from "VoicePanelConsoleStatus" /* 17003 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let closure_4 = { code: "function useControlAccessoryHeightTsx1(){const{consoleStatusHeight,floatingCTAHeight}=this.__closure;return consoleStatusHeight.get()+floatingCTAHeight.get();}" };
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlAccessoryHeight.tsx");

export default function useControlAccessoryHeight() {
  let sharedValue;
  let sharedValue1;
  let shouldShowFloatingCTA;
  const channelId = sharedValue1.useContext(sharedValue(shouldShowFloatingCTA[1])).channelId;
  const isConnectingOrConnectedToConsole = sharedValue(shouldShowFloatingCTA[2])(channelId).isConnectingOrConnectedToConsole;
  const obj = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[3]);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue, isConnectingOrConnectedToConsole];
  const effect = sharedValue1.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    if (isConnectingOrConnectedToConsole) {
      num = VoicePanelConsoleStatus.CONSOLE_STATUS_HEIGHT;
    }
    const result = set(num);
  }, items);
  const obj2 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]);
  shouldShowFloatingCTA = obj2.useShouldShowFloatingCTA(channelId);
  const obj3 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[3]);
  sharedValue1 = obj3.useSharedValue(0);
  const obj4 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[6]);
  const floatingCTATotalViewHeight = obj4.getFloatingCTATotalViewHeight();
  const items1 = [sharedValue1, shouldShowFloatingCTA, floatingCTATotalViewHeight];
  const effect1 = sharedValue1.useEffect(() => {
    let num = 0;
    set = sharedValue1.set;
    if (shouldShowFloatingCTA) {
      num = floatingCTATotalViewHeight;
    }
    const result = set(num);
  }, items1);
  const fn = function l() {
    const value = sharedValue.get();
    return value + sharedValue1.get();
  };
  fn.__closure = { consoleStatusHeight: sharedValue, floatingCTAHeight: sharedValue1 };
  fn.__workletHash = 7974849446653;
  fn.__initData = floatingCTATotalViewHeight;
  const obj5 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[3]);
  return obj5.useDerivedValue(fn);
};
