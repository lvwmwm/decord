// Module ID: 10598
// Function ID: 82719
// Name: getStableSafeAreaInsets
// Dependencies: []
// Exports: default

// Module 10598 (getStableSafeAreaInsets)
function getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = arg1(dependencyMap[2]).DEFAULT_APP_ENTRY_KEY;
  }
  if (obj.isAndroid()) {
    let stableSafeAreaInsets = importDefault(dependencyMap[4]).getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    const obj3 = importDefault(dependencyMap[4]);
  } else {
    stableSafeAreaInsets = arg1(dependencyMap[5]).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    const obj2 = arg1(dependencyMap[5]);
  }
  return stableSafeAreaInsets;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/safe_area/useStableSafeAreaInsets.native.tsx");

export default function useStableSafeAreaInsets() {
  const appEntryKey = arg1(dependencyMap[2]).useAppEntryKey();
  const arg1 = appEntryKey;
  const tmp2 = callback(React.useState(() => callback2(appEntryKey)), 2);
  let closure_1 = tmp2[1];
  const items = [appEntryKey];
  const effect = React.useEffect(() => callback(closure_2[6])(() => {
    callback(callback2(closure_0));
  }, appEntryKey), items);
  return tmp2[0];
};
export { getStableSafeAreaInsets };
