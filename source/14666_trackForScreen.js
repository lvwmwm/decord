// Module ID: 14666
// Function ID: 110612
// Name: trackForScreen
// Dependencies: []
// Exports: trackTabPressed, useTrackTabPerformance

// Module 14666 (trackForScreen)
function trackForScreen(tab, uiTime) {
  if (tmp) {
    let obj = importDefault(dependencyMap[3]);
    obj = { tab };
    ({ startTime: obj2.start_time, layoutEffectTime: obj2.layout_effect_time, layoutUITime: obj2.layout_ui_thread_time, effectTime: obj2.effect_time, uiTime: obj2.ui_thread_time } = uiTime);
    obj.track(AnalyticEvents.REDESIGN_NAV_BAR_RENDERED, obj);
    obj = { layoutEffectDuration: uiTime.layoutEffectTime - uiTime.startTime, effectDuration: uiTime.effectTime - uiTime.startTime, layoutUIDuration: uiTime.layoutUITime - uiTime.startTime, uiDuration: uiTime.uiTime - uiTime.startTime };
    importDefaultResult.info("First navigation to", tab, "took", obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult("TabsPerformanceTracker");
let closure_6 = {};
let closure_7 = { code: "function TabsPerformanceTrackerTsx1(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}" };
let closure_8 = { code: "function TabsPerformanceTrackerTsx2(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}" };
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx");

export const trackTabPressed = function trackTabPressed(arg0) {
  if (null == closure_6[arg0]) {
    const obj = {};
    const _performance = performance;
    obj.startTime = performance.now();
    closure_6[arg0] = obj;
  }
};
export const useTrackTabPerformance = function useTrackTabPerformance(GUILDS) {
  const arg1 = GUILDS;
  const items = [GUILDS];
  const layoutEffect = React.useLayoutEffect(() => {
    function log() {
      let tmp = null != tmp;
      if (tmp) {
        tmp = null != tmp.startTime;
      }
      if (tmp) {
        const _performance = performance;
        tmp.layoutUITime = performance.now();
        callback(tmp, tmp);
      }
    }
    const arg0 = tmp;
    if (null != closure_6[closure_0]) {
      if (null != tmp.startTime) {
        const _performance = performance;
        tmp.layoutEffectTime = performance.now();
        const fn = function t() {
          return tmp(closure_2[4]).runOnJS(log)();
        };
        let obj = { runOnJS: arg0(closure_2[4]).runOnJS, log };
        fn.__closure = obj;
        fn.__workletHash = 7114578957129;
        fn.__initData = closure_7;
        arg0(closure_2[4]).runOnUI(fn)();
        const obj2 = arg0(closure_2[4]);
      }
    }
    obj = closure_6[closure_0];
    if (null == obj) {
      obj = {};
    }
    closure_6[arg0] = obj;
  }, items);
  const items1 = [GUILDS];
  const effect = React.useEffect(() => {
    function log() {
      let tmp = null != tmp;
      if (tmp) {
        tmp = null != tmp.startTime;
      }
      if (tmp) {
        const _performance = performance;
        tmp.uiTime = performance.now();
        callback(tmp, tmp);
      }
    }
    const arg0 = tmp;
    if (null != closure_6[closure_0]) {
      if (null != tmp.startTime) {
        const _performance = performance;
        tmp.effectTime = performance.now();
        const fn = function t() {
          return tmp(closure_2[4]).runOnJS(log)();
        };
        let obj = { runOnJS: arg0(closure_2[4]).runOnJS, log };
        fn.__closure = obj;
        fn.__workletHash = 331508196106;
        fn.__initData = closure_8;
        arg0(closure_2[4]).runOnUI(fn)();
        const obj2 = arg0(closure_2[4]);
      }
    }
    obj = closure_6[closure_0];
    if (null == obj) {
      obj = {};
    }
    closure_6[arg0] = obj;
  }, items1);
};
