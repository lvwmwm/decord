// Module ID: 15756
// Function ID: 120454
// Name: useControlAccessoryHeight
// Dependencies: []
// Exports: default

// Module 15756 (useControlAccessoryHeight)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = { code: "function useControlAccessoryHeightTsx1(){const{consoleStatusHeight,floatingCTAHeight}=this.__closure;return consoleStatusHeight.get()+floatingCTAHeight.get();}" };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/voice_panel/native/hooks/useControlAccessoryHeight.tsx");

export default function useControlAccessoryHeight() {
  const channelId = React.useContext(importDefault(dependencyMap[1])).channelId;
  const isConnectingOrConnectedToConsole = importDefault(dependencyMap[3])(channelId).isConnectingOrConnectedToConsole;
  const arg1 = isConnectingOrConnectedToConsole;
  const tmp = importDefault(dependencyMap[2])("useControlAccessoryHeight");
  const sharedValue = arg1(dependencyMap[4]).useSharedValue(0);
  const importDefault = sharedValue;
  const items = [sharedValue, isConnectingOrConnectedToConsole];
  const effect = React.useEffect(() => {
    let num = 0;
    if (isConnectingOrConnectedToConsole) {
      num = isConnectingOrConnectedToConsole(shouldShowFloatingCTA[5]).CONSOLE_STATUS_HEIGHT;
    }
    const result = sharedValue.set(num);
  }, items);
  const obj = arg1(dependencyMap[4]);
  const shouldShowFloatingCTA = arg1(dependencyMap[6]).useShouldShowFloatingCTA(channelId);
  const dependencyMap = shouldShowFloatingCTA;
  const obj2 = arg1(dependencyMap[6]);
  const sharedValue1 = arg1(dependencyMap[4]).useSharedValue(0);
  const React = sharedValue1;
  const obj3 = arg1(dependencyMap[4]);
  const floatingCTATotalViewHeight = arg1(dependencyMap[7]).getFloatingCTATotalViewHeight(tmp);
  let closure_4 = floatingCTATotalViewHeight;
  const items1 = [sharedValue1, shouldShowFloatingCTA, floatingCTATotalViewHeight];
  const effect1 = React.useEffect(() => {
    let num = 0;
    if (shouldShowFloatingCTA) {
      num = floatingCTATotalViewHeight;
    }
    const result = sharedValue1.set(num);
  }, items1);
  const obj4 = arg1(dependencyMap[7]);
  const fn = function c() {
    const value = sharedValue.get();
    return value + sharedValue1.get();
  };
  fn.__closure = { consoleStatusHeight: sharedValue, floatingCTAHeight: sharedValue1 };
  fn.__workletHash = 7974849446653;
  fn.__initData = closure_4;
  return arg1(dependencyMap[4]).useDerivedValue(fn);
};
