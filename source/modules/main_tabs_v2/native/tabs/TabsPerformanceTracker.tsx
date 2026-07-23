// Module ID: 14799
// Function ID: 112873
// Name: trackForScreen
// Dependencies: [31, 653, 3, 675, 3991, 2]
// Exports: trackTabPressed, useTrackTabPerformance

// Module 14799 (trackForScreen)
import result from "result";
import { AnalyticEvents } from "ME";
import importDefaultResult from "expandLocation";

const require = arg1;
function trackForScreen(tab, uiTime) {
  if (tmp) {
    let obj = importDefault(675);
    obj = { tab };
    ({ startTime: obj2.start_time, layoutEffectTime: obj2.layout_effect_time, layoutUITime: obj2.layout_ui_thread_time, effectTime: obj2.effect_time, uiTime: obj2.ui_thread_time } = uiTime);
    obj.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj);
    obj = { layoutEffectDuration: uiTime.layoutEffectTime - uiTime.startTime, effectDuration: uiTime.effectTime - uiTime.startTime, layoutUIDuration: uiTime.layoutUITime - uiTime.startTime, uiDuration: uiTime.uiTime - uiTime.startTime };
    importDefaultResult.info("First navigation to", tab, "took", obj);
  }
}
importDefaultResult = new importDefaultResult("TabsPerformanceTracker");
let closure_6 = {};
let closure_7 = { code: "function TabsPerformanceTrackerTsx1(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}" };
let closure_8 = { code: "function TabsPerformanceTrackerTsx2(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}" };
const result = require("timestamp").fileFinishedImporting("modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx");

export const trackTabPressed = function trackTabPressed(arg0) {
  if (null == table[arg0]) {
    const obj = {};
    const _performance = performance;
    obj.startTime = performance.now();
    table[arg0] = obj;
  }
};
export const useTrackTabPerformance = function useTrackTabPerformance(GUILDS) {
  let closure_0 = GUILDS;
  const items = [GUILDS];
  const layoutEffect = React.useLayoutEffect(() => {
    function log() {
      tmp = null != tmp;
      if (tmp) {
        tmp = null != tmp.startTime;
      }
      if (tmp) {
        const _performance = performance;
        tmp.layoutUITime = performance.now();
        outer2_9(tmp, tmp);
      }
    }
    const GUILDS = tmp;
    if (null != outer1_6[GUILDS]) {
      if (null != tmp.startTime) {
        let _performance = performance;
        tmp.layoutEffectTime = performance.now();
        const fn = function t() {
          return tmp(outer2_2[4]).runOnJS(log)();
        };
        let obj = { runOnJS: GUILDS(outer1_2[4]).runOnJS, log };
        fn.__closure = obj;
        fn.__workletHash = 7114578957129;
        fn.__initData = outer1_7;
        GUILDS(outer1_2[4]).runOnUI(fn)();
        const obj2 = GUILDS(outer1_2[4]);
      }
    }
    obj = outer1_6[GUILDS];
    if (null == obj) {
      obj = {};
    }
    outer1_6[GUILDS] = obj;
  }, items);
  const items1 = [GUILDS];
  const effect = React.useEffect(() => {
    function log() {
      tmp = null != tmp;
      if (tmp) {
        tmp = null != tmp.startTime;
      }
      if (tmp) {
        const _performance = performance;
        tmp.uiTime = performance.now();
        outer2_9(tmp, tmp);
      }
    }
    const GUILDS = tmp;
    if (null != outer1_6[GUILDS]) {
      if (null != tmp.startTime) {
        let _performance = performance;
        tmp.effectTime = performance.now();
        const fn = function t() {
          return tmp(outer2_2[4]).runOnJS(log)();
        };
        let obj = { runOnJS: GUILDS(outer1_2[4]).runOnJS, log };
        fn.__closure = obj;
        fn.__workletHash = 331508196106;
        fn.__initData = outer1_8;
        GUILDS(outer1_2[4]).runOnUI(fn)();
        const obj2 = GUILDS(outer1_2[4]);
      }
    }
    obj = outer1_6[GUILDS];
    if (null == obj) {
      obj = {};
    }
    outer1_6[GUILDS] = obj;
  }, items1);
};
