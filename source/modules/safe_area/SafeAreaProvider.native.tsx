// Module ID: 13370
// Function ID: 101668
// Name: updateSafeAreaStoreEntry
// Dependencies: []
// Exports: SafeAreaProvider, SafeAreaReporter

// Module 13370 (updateSafeAreaStoreEntry)
function updateSafeAreaStoreEntry(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  arg1(dependencyMap[8]).batchUpdates(() => {
    let obj = arg0(closure_2[3]);
    if (obj.isMetaQuest()) {
      let META_QUEST_SAFE_AREA_INSETS = tmp3(tmp4[4]).META_QUEST_SAFE_AREA_INSETS;
    } else {
      META_QUEST_SAFE_AREA_INSETS = tmp;
      if (tmp3Result.isAndroid()) {
        let safeAreaInsets = arg1(closure_2[6]).getState().byAppEntry[tmp2].safeAreaInsets;
        const obj3 = arg1(closure_2[6]);
        const rect = arg1(closure_2[7]).getStableSafeAreaInsets(tmp2);
        let tmp8 = tmp;
        if (null != rect) {
          if (rect.bottom === safeAreaInsets.bottom) {
            if (rect.top === safeAreaInsets.top) {
              tmp8 = safeAreaInsets;
            }
          }
          obj = {};
          ({ bottom: obj5.bottom, top: obj5.top } = rect);
          ({ left: obj5.left, right: obj5.right } = tmp);
          safeAreaInsets = obj;
        }
        META_QUEST_SAFE_AREA_INSETS = tmp8;
        const obj4 = arg1(closure_2[7]);
      }
      const tmp3Result = tmp3(tmp4[5]);
    }
    const arg0 = META_QUEST_SAFE_AREA_INSETS;
    arg1(closure_2[6]).setState((byAppEntry) => {
      let tmp = byAppEntry;
      if (byAppEntry.byAppEntry[closure_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
        let obj = {};
        obj = {};
        const merged = Object.assign(byAppEntry.byAppEntry);
        obj = { safeAreaInsets: META_QUEST_SAFE_AREA_INSETS };
        obj[closure_1] = obj;
        obj.byAppEntry = obj;
        tmp = obj;
      }
      return tmp;
    });
  });
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = { "Null": true, "Null": true, "Null": true };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/safe_area/SafeAreaProvider.native.tsx");

export const SafeAreaReporter = function SafeAreaReporter() {
  let obj = arg1(closure_2[9]);
  const safeAreaInsets = obj.useSafeAreaInsets();
  const arg1 = safeAreaInsets;
  const appEntryKey = arg1(closure_2[10]).useAppEntryKey();
  const importDefault = appEntryKey;
  const items = [safeAreaInsets, appEntryKey];
  const layoutEffect = React.useLayoutEffect(() => {
    callback(safeAreaInsets, appEntryKey);
  }, items);
  closure_2 = React.useRef(false);
  const items1 = [safeAreaInsets, appEntryKey];
  obj = {
    style: closure_6,
    onLayout: React.useCallback(() => {
      if (!ref.current) {
        ref.current = true;
        callback(safeAreaInsets, appEntryKey);
      }
    }, items1)
  };
  return <View {...obj} />;
};
export const SafeAreaProvider = function SafeAreaProvider(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const obj = { initialMetrics: arg1(dependencyMap[4]).INITIAL_SAFE_AREA_METRICS, children, style };
  return jsx(arg1(dependencyMap[9]).SafeAreaProvider, obj);
};
