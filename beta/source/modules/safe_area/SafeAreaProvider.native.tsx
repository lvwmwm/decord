// Module ID: 14137
// Function ID: 14138
// Name: SafeAreaProvider
// Dependencies: [19, 17, 21, 1610, 1615, 1364, 1614, 1625, 1248, 1616, 1482, 2]
// Exports: SafeAreaProvider, SafeAreaReporter

// Module 14137 (SafeAreaProvider)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react_native2 from "react-native" /* 1248 */;
import SafeAreaConstants from "SafeAreaConstants" /* 1615 */;
import _mod1616 from "module_1616" /* 1616 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const View = react_native.View;
const jsx = Fragment.jsx;
const style = { position: "absolute", width: 0, height: 0 };
const result = size.fileFinishedImporting("modules/safe_area/SafeAreaProvider.native.tsx");

export const SafeAreaReporter = function SafeAreaReporter() {
  let ref;
  let safeAreaInsets;
  let obj = safeAreaInsets(1616);
  safeAreaInsets = obj.useSafeAreaInsets();
  let obj2 = safeAreaInsets(1482);
  const appEntryKey = obj2.useAppEntryKey();
  const items = [safeAreaInsets, appEntryKey];
  const layoutEffect = react.useLayoutEffect(() => {
    let closure_0 = safeAreaInsets;
    let closure_1 = appEntryKey;
    const obj = react_native2;
    obj.batchUpdates(() => {
      let META_QUEST_SAFE_AREA_INSETS;
      const tmp = META_QUEST_SAFE_AREA_INSETS;
      const tmp2 = closure_1;
      let tmp3 = closure_0;
      let obj = closure_0(closure_1_2[3]);
      if (obj.isMetaQuest()) {
        META_QUEST_SAFE_AREA_INSETS = tmp3(tmp4[4]).META_QUEST_SAFE_AREA_INSETS;
      } else {
        META_QUEST_SAFE_AREA_INSETS = tmp;
        const tmp3Result = tmp3(closure_1_2[5]);
        if (tmp3Result.isAndroid()) {
          let obj3 = closure_1(tmp4[6]);
          safeAreaInsets = obj3.getState().byAppEntry[tmp2].safeAreaInsets;
          const obj4 = closure_1(closure_1_2[7]);
          const rect = obj4.getStableSafeAreaInsets(tmp2);
          let tmp7 = tmp;
          if (null != rect) {
            if (rect.bottom === safeAreaInsets.bottom) {
              if (rect.top === safeAreaInsets.top) {
                tmp7 = safeAreaInsets;
              }
            }
            const rect1 = { bottom: null, top: null, left: null, right: null };
            ({ bottom: obj5.bottom, top: obj5.top } = rect);
            ({ left: obj5.left, right: obj5.right } = tmp);
            safeAreaInsets = rect1;
          }
          META_QUEST_SAFE_AREA_INSETS = tmp7;
        }
      }
      const obj6 = closure_1(closure_1_2[6]);
      obj6.setState((byAppEntry) => {
        let obj2;
        let tmp3 = byAppEntry;
        if (byAppEntry.byAppEntry[closure_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
          const obj = { byAppEntry: obj2 };
          obj2 = {};
          const merged = Object.assign(byAppEntry.byAppEntry);
          const obj3 = { safeAreaInsets: tmp2 };
          obj2[tmp] = obj3;
          tmp3 = obj;
        }
        return tmp3;
      });
    });
  }, items);
  dependencyMap = react.useRef(false);
  const items1 = [safeAreaInsets, appEntryKey];
  return <View style={style} onLayout={react.useCallback(() => {
    let tmp;
    if (!ref.current) {
      tmp.current = true;
      let tmp2 = safeAreaInsets;
      let tmp3 = appEntryKey;
      let closure_0 = safeAreaInsets;
      let closure_1 = appEntryKey;
      const tmp4 = require;
      let obj = react_native2;
      obj.batchUpdates(() => {
        let META_QUEST_SAFE_AREA_INSETS;
        const tmp = META_QUEST_SAFE_AREA_INSETS;
        const tmp2 = closure_1;
        let tmp3 = closure_0;
        let obj = closure_0(closure_1_2[3]);
        if (obj.isMetaQuest()) {
          META_QUEST_SAFE_AREA_INSETS = tmp3(tmp4[4]).META_QUEST_SAFE_AREA_INSETS;
        } else {
          META_QUEST_SAFE_AREA_INSETS = tmp;
          const tmp3Result = tmp3(closure_1_2[5]);
          if (tmp3Result.isAndroid()) {
            let obj3 = closure_1(tmp4[6]);
            safeAreaInsets = obj3.getState().byAppEntry[tmp2].safeAreaInsets;
            const obj4 = closure_1(closure_1_2[7]);
            const rect = obj4.getStableSafeAreaInsets(tmp2);
            let tmp7 = tmp;
            if (null != rect) {
              if (rect.bottom === safeAreaInsets.bottom) {
                if (rect.top === safeAreaInsets.top) {
                  tmp7 = safeAreaInsets;
                }
              }
              const rect1 = { bottom: null, top: null, left: null, right: null };
              ({ bottom: obj5.bottom, top: obj5.top } = rect);
              ({ left: obj5.left, right: obj5.right } = tmp);
              safeAreaInsets = rect1;
            }
            META_QUEST_SAFE_AREA_INSETS = tmp7;
          }
        }
        const obj6 = closure_1(closure_1_2[6]);
        obj6.setState((byAppEntry) => {
          let obj2;
          let tmp3 = byAppEntry;
          if (byAppEntry.byAppEntry[closure_1].safeAreaInsets !== META_QUEST_SAFE_AREA_INSETS) {
            const obj = { byAppEntry: obj2 };
            obj2 = {};
            const merged = Object.assign(byAppEntry.byAppEntry);
            const obj3 = { safeAreaInsets: tmp2 };
            obj2[tmp] = obj3;
            tmp3 = obj;
          }
          return tmp3;
        });
      });
    }
  }, items1)} />;
};
export const SafeAreaProvider = function SafeAreaProvider(arg0) {
  let children;
  ({ children, style } = arg0);
  const SafeAreaProvider = _mod1616.SafeAreaProvider;
  return <SafeAreaProvider initialMetrics={SafeAreaConstants.INITIAL_SAFE_AREA_METRICS} style={style}>{children}</SafeAreaProvider>;
};
