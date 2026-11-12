// Module ID: 18604
// Function ID: 18605
// Name: TabsPerformanceTracker
// Dependencies: [19, 1072, 3, 1252, 1705, 2]
// Exports: trackTabPressed, useTrackTabPerformance

// Module 18604 (TabsPerformanceTracker)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = new LoggerDefault("TabsPerformanceTracker");
let closure_5 = tmp2;
let closure_6 = {};
let closure_7 = { code: "(function TabsPerformanceTrackerTsx1(){let[scheduleOnRN,log]=this.__closure;return scheduleOnRN(log);})" };
let closure_8 = { code: "(function TabsPerformanceTrackerTsx2(){let[scheduleOnRN,log]=this.__closure;return scheduleOnRN(log);})" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx");

export function trackTabPressed(arg0) {
  if (null == closure_6[arg0]) {
    const _performance = performance;
    tmp[arg0] = { startTime: performance.now() };
    const obj = { startTime: performance.now() };
  }
}
export function useTrackTabPerformance(GUILDS) {
  let items = [GUILDS];
  const layoutEffect = react.useLayoutEffect(() => {
    let logger;
    let tab;
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp2 = GUILDS;
    GUILDS = tmp3;
    if (null != closure_1_6[GUILDS]) {
      if (null != closure_1_6[GUILDS].startTime) {
        let _performance = performance;
        closure_1_6[GUILDS].layoutEffectTime = performance.now();
        let tmp5 = GUILDS;
        const items = [closure_1_7, , ];
        const scheduleOnUI = GUILDS(dependencyMap[4]).scheduleOnUI;
        const tmp7 = GUILDS(dependencyMap[4]);
        items[1] = GUILDS(dependencyMap[4]).scheduleOnRN;
        items[2] = function log() {
          const tmp2 = null != tab && null != tab.startTime;
          if (tmp2) {
            const _performance = performance;
            tab.layoutUITime = performance.now();
            const tmp5 = null != tab.uiTime && null != tab.layoutUITime;
            if (tmp5) {
              const obj3 = { tab, start_time: null, layout_effect_time: null, layout_ui_thread_time: null, effect_time: null, ui_thread_time: null };
              ({ startTime: obj2.start_time, layoutEffectTime: obj2.layout_effect_time, layoutUITime: obj2.layout_ui_thread_time, effectTime: obj2.effect_time, uiTime: obj2.ui_thread_time } = tab);
              const obj = AnalyticsUtilsDefault;
              obj.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj3);
              const obj5 = { layoutEffectDuration: tab.layoutEffectTime - tab.startTime, effectDuration: tab.effectTime - tab.startTime, layoutUIDuration: tab.layoutUITime - tab.startTime, uiDuration: tab.uiTime - tab.startTime };
              logger.info("First navigation to", tab, "took", obj5);
            }
          }
        };
        let c0;
        let c1;
        [tmp10, tmp11, tmp12] = items;
        class TabsPerformanceTrackerTsx1 {
          constructor() {
            return _undefined(c1);
          }
        }
        const items1 = [tmp11, tmp12];
        TabsPerformanceTrackerTsx1.__closure = items1;
        TabsPerformanceTrackerTsx1.__workletHash = 9222398850673;
        TabsPerformanceTrackerTsx1.__initData = tmp10;
        scheduleOnUI(TabsPerformanceTrackerTsx1);
      }
    }
    let obj = tmp[tmp2];
    if (obj == null) {
      obj = {};
    }
    closure_1_6[tmp2] = obj;
  }, items);
  let items1 = [GUILDS];
  const effect = react.useEffect(() => {
    let logger;
    let tab;
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp2 = GUILDS;
    GUILDS = tmp3;
    if (null != closure_1_6[GUILDS]) {
      if (null != closure_1_6[GUILDS].startTime) {
        let _performance = performance;
        closure_1_6[GUILDS].effectTime = performance.now();
        let tmp5 = GUILDS;
        const items = [closure_1_8, , ];
        const scheduleOnUI = GUILDS(dependencyMap[4]).scheduleOnUI;
        const tmp7 = GUILDS(dependencyMap[4]);
        items[1] = GUILDS(dependencyMap[4]).scheduleOnRN;
        items[2] = function log() {
          const tmp2 = null != tab && null != tab.startTime;
          if (tmp2) {
            const _performance = performance;
            tab.uiTime = performance.now();
            const tmp5 = null != tab.uiTime && null != tab.layoutUITime;
            if (tmp5) {
              const obj3 = { tab, start_time: null, layout_effect_time: null, layout_ui_thread_time: null, effect_time: null, ui_thread_time: null };
              ({ startTime: obj2.start_time, layoutEffectTime: obj2.layout_effect_time, layoutUITime: obj2.layout_ui_thread_time, effectTime: obj2.effect_time, uiTime: obj2.ui_thread_time } = tab);
              const obj = AnalyticsUtilsDefault;
              obj.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj3);
              const obj5 = { layoutEffectDuration: tab.layoutEffectTime - tab.startTime, effectDuration: tab.effectTime - tab.startTime, layoutUIDuration: tab.layoutUITime - tab.startTime, uiDuration: tab.uiTime - tab.startTime };
              logger.info("First navigation to", tab, "took", obj5);
            }
          }
        };
        let c0;
        let c1;
        [tmp10, tmp11, tmp12] = items;
        class TabsPerformanceTrackerTsx2 {
          constructor() {
            return _undefined(c1);
          }
        }
        const items1 = [tmp11, tmp12];
        TabsPerformanceTrackerTsx2.__closure = items1;
        TabsPerformanceTrackerTsx2.__workletHash = 6249772318354;
        TabsPerformanceTrackerTsx2.__initData = tmp10;
        scheduleOnUI(TabsPerformanceTrackerTsx2);
      }
    }
    let obj = tmp[tmp2];
    if (obj == null) {
      obj = {};
    }
    closure_1_6[tmp2] = obj;
  }, items1);
}
