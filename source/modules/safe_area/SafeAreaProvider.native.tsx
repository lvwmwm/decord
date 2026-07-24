// Module ID: 13553
// Function ID: 104229
// Name: updateSafeAreaStoreEntry
// Dependencies: [31, 27, 33, 1553, 1559, 477, 1558, 1569, 682, 1560, 1453, 2]
// Exports: SafeAreaProvider, SafeAreaReporter

// Module 13553 (updateSafeAreaStoreEntry)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function updateSafeAreaStoreEntry(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  _require(682).batchUpdates(() => {
    let obj = callback(outer1_2[3]);
    if (obj.isMetaQuest()) {
      let META_QUEST_SAFE_AREA_INSETS = tmp3(tmp4[4]).META_QUEST_SAFE_AREA_INSETS;
    } else {
      META_QUEST_SAFE_AREA_INSETS = tmp;
      if (tmp3Result.isAndroid()) {
        let safeAreaInsets = callback2(outer1_2[6]).getState().byAppEntry[tmp2].safeAreaInsets;
        const obj3 = callback2(outer1_2[6]);
        const rect = callback2(outer1_2[7]).getStableSafeAreaInsets(tmp2);
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
        const obj4 = callback2(outer1_2[7]);
      }
      tmp3Result = tmp3(tmp4[5]);
    }
    callback2(outer1_2[6]).setState((byAppEntry) => {
      let tmp = byAppEntry;
      if (byAppEntry.byAppEntry[outer1_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
        let obj = {};
        obj = {};
        const merged = Object.assign(byAppEntry.byAppEntry);
        obj = { safeAreaInsets: META_QUEST_SAFE_AREA_INSETS };
        obj[outer1_1] = obj;
        obj.byAppEntry = obj;
        tmp = obj;
      }
      return tmp;
    });
  });
}
let closure_6 = { position: "absolute", width: 0, height: 0 };
const result = require("jsxProd").fileFinishedImporting("modules/safe_area/SafeAreaProvider.native.tsx");

export const SafeAreaReporter = function SafeAreaReporter() {
  let obj = safeAreaInsets(1560);
  safeAreaInsets = obj.useSafeAreaInsets();
  const appEntryKey = safeAreaInsets(1453).useAppEntryKey();
  const items = [safeAreaInsets, appEntryKey];
  const layoutEffect = React.useLayoutEffect(() => {
    outer1_7(safeAreaInsets, appEntryKey);
  }, items);
  const dependencyMap = React.useRef(false);
  const items1 = [safeAreaInsets, appEntryKey];
  obj = {
    style: closure_6,
    onLayout: React.useCallback(() => {
      if (!ref.current) {
        ref.current = true;
        outer1_7(safeAreaInsets, appEntryKey);
      }
    }, items1)
  };
  return <View style={closure_6} onLayout={React.useCallback(() => {
    if (!ref.current) {
      ref.current = true;
      outer1_7(safeAreaInsets, appEntryKey);
    }
  }, items1)} />;
};
export const SafeAreaProvider = function SafeAreaProvider(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const obj = { initialMetrics: require(1559) /* EMPTY_SAFE_AREA_INSETS */.INITIAL_SAFE_AREA_METRICS, children, style };
  return jsx(require(1560).SafeAreaProvider, { initialMetrics: require(1559) /* EMPTY_SAFE_AREA_INSETS */.INITIAL_SAFE_AREA_METRICS, children, style });
};
