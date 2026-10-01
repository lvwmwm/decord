// Module ID: 15647
// Function ID: 15648
// Name: TabsPerformanceTracker
// Dependencies: [19, 1074, 3, 1241, 4566, 2]
// Exports: trackTabPressed, useTrackTabPerformance

// Module 15647 (TabsPerformanceTracker)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = new LoggerDefault("TabsPerformanceTracker");
let closure_5 = tmp2;
let closure_6 = {};
let closure_7 = { code: "function TabsPerformanceTrackerTsx1(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}" };
let closure_8 = { code: "function TabsPerformanceTrackerTsx2(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx");

export const trackTabPressed = function trackTabPressed(arg0) {
  if (null == closure_6[arg0]) {
    const _performance = performance;
    tmp[arg0] = { startTime: performance.now() };
    const obj = { startTime: performance.now() };
  }
};
export const useTrackTabPerformance = function useTrackTabPerformance(GUILDS) {
  const items = [GUILDS];
  const layoutEffect = react.useLayoutEffect(() => {
    let logger;
    let tab;
    function log() {
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
    }
    let tmp2 = GUILDS;
    GUILDS = tmp3;
    if (null != closure_1_6[GUILDS]) {
      if (null != closure_1_6[GUILDS].startTime) {
        let _performance = performance;
        closure_1_6[GUILDS].layoutEffectTime = performance.now();
        let tmp5 = GUILDS;
        const fn = function t() {
          const obj = ReanimatedRexport;
          return obj.runOnJS(log)();
        };
        const tmp7 = GUILDS(dependencyMap[4]);
        const obj2 = { runOnJS: GUILDS(dependencyMap[4]).runOnJS, log };
        const runOnUI = tmp7.runOnUI;
        fn.__closure = obj2;
        fn.__workletHash = 7114578957129;
        fn.__initData = __initData;
        runOnUI(fn)();
      }
    }
    let obj = tmp[tmp2];
    if (obj == null) {
      obj = {};
    }
    closure_1_6[tmp2] = obj;
  }, items);
  const items1 = [GUILDS];
  const effect = react.useEffect(() => {
    let logger;
    let tab;
    function log() {
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
    }
    let tmp2 = GUILDS;
    GUILDS = tmp3;
    if (null != closure_1_6[GUILDS]) {
      if (null != closure_1_6[GUILDS].startTime) {
        let _performance = performance;
        closure_1_6[GUILDS].effectTime = performance.now();
        let tmp5 = GUILDS;
        const fn = function t() {
          const obj = ReanimatedRexport;
          return obj.runOnJS(log)();
        };
        const tmp7 = GUILDS(dependencyMap[4]);
        const obj2 = { runOnJS: GUILDS(dependencyMap[4]).runOnJS, log };
        const runOnUI = tmp7.runOnUI;
        fn.__closure = obj2;
        fn.__workletHash = 331508196106;
        fn.__initData = __initData2;
        runOnUI(fn)();
      }
    }
    let obj = tmp[tmp2];
    if (obj == null) {
      obj = {};
    }
    closure_1_6[tmp2] = obj;
  }, items1);
};
