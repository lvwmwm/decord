// Module ID: 19771
// Function ID: 19772
// Name: useControlAccessoryHeight
// Dependencies: [19, 11394, 19737, 1652, 19743, 19575, 19741, 2]
// Exports: default

// Module 19771 (useControlAccessoryHeight)
import VoicePanelConsoleStatus from "VoicePanelConsoleStatus" /* 19743 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let closure_4 = { code: "(function useControlAccessoryHeightTsx1(){let[consoleStatusHeight,floatingCTAHeight]=this.__closure;return consoleStatusHeight.get()+floatingCTAHeight.get();})" };
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlAccessoryHeight.tsx");

export default function useControlAccessoryHeight() {
  let sharedValue;
  let sharedValue1;
  let shouldShowFloatingCTA;
  let tmp7;
  let tmp8;
  let tmp9;
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
  const items2 = [floatingCTATotalViewHeight, sharedValue, sharedValue1];
  let c0;
  let c1;
  [tmp7, tmp8, tmp9] = items2;
  function useControlAccessoryHeightTsx1() {
    const value = _undefined.get();
    return value + _undefined2.get();
  }
  const items3 = [tmp8, tmp9];
  useControlAccessoryHeightTsx1.__closure = items3;
  useControlAccessoryHeightTsx1.__workletHash = 1979848822852;
  useControlAccessoryHeightTsx1.__initData = tmp7;
  const obj5 = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[3]);
  return obj5.useDerivedValue(useControlAccessoryHeightTsx1);
};
