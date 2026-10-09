// Module ID: 17810
// Function ID: 17811
// Name: JankVoicePanelTabReporter
// Dependencies: [32, 19, 11926, 11924, 16357, 558, 576, 4811, 2]
// Exports: reportJankVoicePanelTabRequest

// Module 17810 (JankVoicePanelTabReporter)
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11924 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11926 */;
import getJankSurfaceName from "getJankSurfaceName" /* 16357 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const map = new Map();
function isDrawerShown(drawerMode, arg1) {
  return drawerMode.drawerMode && !drawerMode.hidden && arg1 === VoicePanelModes.PANEL;
}
isDrawerShown.__closure = { VoicePanelModes };
isDrawerShown.__workletHash = 4659073724332;
isDrawerShown.__initData = { code: "function isDrawerShown_JankVoicePanelTabReporterNativeTsx1(wrapperSpecs,panelMode){const{VoicePanelModes}=this.__closure;return wrapperSpecs.drawerMode&&!wrapperSpecs.hidden&&panelMode===VoicePanelModes.PANEL;}" };
const __initData = { code: "function JankVoicePanelTabReporterNativeTsx2(){const{isDrawerShown,wrapperSpecs,mode,VoicePanelModes}=this.__closure;return[isDrawerShown(wrapperSpecs.get(),mode.get()),mode.get()===VoicePanelModes.PANEL];}" };
const __initData2 = { code: "function JankVoicePanelTabReporterNativeTsx3(t3,previous){const{runOnJS,handleDrawerChange}=this.__closure;const[isShown_0,isPanel_0]=t3;if(previous==null||isShown_0!==previous[0]||isPanel_0!==previous[1]){runOnJS(handleDrawerChange)(isShown_0,isPanel_0);}}" };
const __initData3 = { code: "function JankVoicePanelTabReporterNativeTsx4(){const{isDrawerShown,wrapperSpecs,mode,VoicePanelModes}=this.__closure;return[isDrawerShown(wrapperSpecs.get(),mode.get()),mode.get()===VoicePanelModes.PANEL];}" };
const __initData4 = { code: "function JankVoicePanelTabReporterNativeTsx5([isShown_0,isPanel_0],previous){const{runOnJS,handleDrawerChange}=this.__closure;if(previous==null||isShown_0!==previous[0]||isPanel_0!==previous[1]){runOnJS(handleDrawerChange)(isShown_0,isPanel_0);}}" };
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function JankVoicePanelTabReporter(channelId) {
  let ref;
  let tab;
  const tmp = channelId;
  let tmp2 = tab;
  let obj = channelId(tab[6]);
  const cResult = obj.c(7);
  channelId = channelId.channelId;
  tab = channelId.tab;
  const wrapperSpecs = channelId.wrapperSpecs;
  const mode = channelId.mode;
  let obj2 = mode;
  VoicePanelModes = mode.useRef(tab);
  if (cResult[0] === channelId) {
    let tmp4;
    let tmp5;
    let tmp14;
    let tmp13;
    if (cResult[1] === tab) {
      tmp4 = cResult[2];
      tmp5 = cResult[3];
    }
    const layoutEffect = obj2.useLayoutEffect(tmp4, tmp5);
    function handleDrawerChange(isShown, isPanel) {
      const value = map.get(channelId);
      let flag;
      const obj = map;
      if (value != null) {
        flag = value.isShown;
      }
      if (flag == null) {
        flag = false;
      }
      const obj2 = { isShown, isPanel };
      const result = obj.set(tmp, obj2);
      if (isShown !== flag) {
        let tmp7 = null;
        const setJankVoicePanelTab = getJankSurfaceName.setJankVoicePanelTab;
        getJankSurfaceName;
        if (isShown) {
          let tmp9;
          const current = ref.current;
          if ("chat" === current) {
            tmp9 = "chat";
          } else if ("app_launcher" === current) {
            tmp9 = "app-launcher";
          } else {
            tmp9 = "settings";
            if ("settings" !== current) {
              tmp9 = null;
            }
          }
          tmp7 = tmp9;
        }
        setJankVoicePanelTab(channelId, tmp7);
      }
    }
    const fn2 = function k() {
      const value = wrapperSpecs.get();
      const obj = mode;
      if (typeof isDrawerShown === "function") {
        const tmp3 = value.drawerMode && !value.hidden && tmp2 === VoicePanelModes.PANEL;
        const items = [tmp3, obj.get() === VoicePanelModes.PANEL];
        return items;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let tmp8 = isDrawerShown;
    let tmp9 = VoicePanelModes;
    const obj3 = { isDrawerShown, wrapperSpecs, mode, VoicePanelModes };
    fn2.__closure = obj3;
    fn2.__workletHash = 16004116027159;
    fn2.__initData = __initData;
    const fn3 = function f(arg0, arg1) {
      let tmp2;
      let tmp3;
      [tmp2, tmp3] = arg0;
      _slicedToArray(arg0, 2);
      const tmp4 = null != arg1 && tmp2 === arg1[0] && tmp3 === arg1[1];
      if (!tmp4) {
        const obj = ReanimatedRexport;
        obj.runOnJS(handleDrawerChange)(tmp2, tmp3);
      }
    };
    const obj4 = { runOnJS: tmp(tmp2[7]).runOnJS, handleDrawerChange };
    const useAnimatedReaction = tmp(tmp2[7]).useAnimatedReaction;
    tmp(tmp2[7]);
    fn3.__closure = obj4;
    fn3.__workletHash = 630578837540;
    fn3.__initData = __initData2;
    const animatedReaction = useAnimatedReaction(fn2, fn3);
    if (cResult[4] !== channelId) {
      const fn4 = function v() {
        return () => {
          set.delete(closure_1_0);
          const obj = channelId(tab[4]);
          obj.setJankVoicePanelTab(closure_1_0, null);
        };
      };
      let items = [channelId];
      cResult[4] = channelId;
      cResult[5] = fn4;
      cResult[6] = items;
      tmp14 = items;
      tmp13 = fn4;
    } else {
      tmp13 = cResult[5];
      tmp14 = cResult[6];
    }
    const layoutEffect1 = obj2.useLayoutEffect(tmp13, tmp14);
    return null;
  }
  const fn = function c() {
    ref.current = tab;
    const value = map.get(channelId);
    let isShown;
    const tmp2 = channelId;
    if (value != null) {
      isShown = value.isShown;
    }
    if (true === isShown) {
      let tmp8;
      const setJankVoicePanelTab = getJankSurfaceName.setJankVoicePanelTab;
      getJankSurfaceName;
      if ("chat" === tab) {
        tmp8 = "chat";
      } else if ("app_launcher" === tab) {
        tmp8 = "app-launcher";
      } else {
        tmp8 = "settings";
        if ("settings" !== tab) {
          tmp8 = null;
        }
      }
      setJankVoicePanelTab(tmp2, tmp8);
    }
  };
  const items1 = [channelId, tab];
  cResult[0] = channelId;
  cResult[1] = tab;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp5 = items1;
  tmp4 = fn;
}) : (function JankVoicePanelTabReporter(channelId) {
  let ref;
  channelId = channelId.channelId;
  const tab = channelId.tab;
  const wrapperSpecs = channelId.wrapperSpecs;
  const mode = channelId.mode;
  VoicePanelModes = mode.useRef(tab);
  let items = [channelId, tab];
  const layoutEffect = mode.useLayoutEffect(() => {
    ref.current = tab;
    const value = map.get(channelId);
    let isShown;
    const tmp2 = channelId;
    if (value != null) {
      isShown = value.isShown;
    }
    if (true === isShown) {
      let tmp8;
      const setJankVoicePanelTab = getJankSurfaceName.setJankVoicePanelTab;
      getJankSurfaceName;
      if ("chat" === tab) {
        tmp8 = "chat";
      } else if ("app_launcher" === tab) {
        tmp8 = "app-launcher";
      } else {
        tmp8 = "settings";
        if ("settings" !== tab) {
          tmp8 = null;
        }
      }
      setJankVoicePanelTab(tmp2, tmp8);
    }
  }, items);
  const items1 = [channelId];
  const handleDrawerChange = mode.useCallback((isShown, isPanel) => {
    const value = map.get(channelId);
    let flag;
    const obj = map;
    if (value != null) {
      flag = value.isShown;
    }
    if (flag == null) {
      flag = false;
    }
    const obj2 = { isShown, isPanel };
    const result = obj.set(tmp, obj2);
    if (isShown !== flag) {
      let tmp7 = null;
      const setJankVoicePanelTab = getJankSurfaceName.setJankVoicePanelTab;
      getJankSurfaceName;
      if (isShown) {
        let tmp9;
        const current = ref.current;
        if ("chat" === current) {
          tmp9 = "chat";
        } else if ("app_launcher" === current) {
          tmp9 = "app-launcher";
        } else {
          tmp9 = "settings";
          if ("settings" !== current) {
            tmp9 = null;
          }
        }
        tmp7 = tmp9;
      }
      setJankVoicePanelTab(channelId, tmp7);
    }
  }, items1);
  let obj = channelId(tab[7]);
  class S {
    constructor() {
      const value = wrapperSpecs.get();
      const obj = mode;
      if (typeof isDrawerShown === "function") {
        const tmp3 = value.drawerMode && !value.hidden && tmp2 === VoicePanelModes.PANEL;
        const items = [tmp3, obj.get() === VoicePanelModes.PANEL];
        return items;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  let obj2 = { isDrawerShown, wrapperSpecs, mode, VoicePanelModes };
  S.__closure = obj2;
  S.__workletHash = 7821203254481;
  S.__initData = __initData3;
  class P {
    constructor(arg0, arg1) {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const tmp3 = null != arg1 && tmp === arg1[0] && tmp2 === arg1[1];
      if (!tmp3) {
        const obj = ReanimatedRexport;
        obj.runOnJS(callback)(tmp, tmp2);
      }
    }
  }
  P.__closure = { runOnJS: channelId(tab[7]).runOnJS, handleDrawerChange };
  P.__workletHash = 409263002593;
  P.__initData = __initData4;
  ({ runOnJS: channelId(tab[7]).runOnJS, handleDrawerChange });
  const animatedReaction = obj.useAnimatedReaction(S, P);
  const items2 = [channelId];
  const layoutEffect1 = mode.useLayoutEffect(() => () => {
    set.delete(closure_1_0);
    const obj = channelId(tab[4]);
    obj.setJankVoicePanelTab(closure_1_0, null);
  }, items2);
  return null;
}));
let result = size.fileFinishedImporting("modules/jank_stats/native/JankVoicePanelTabReporter.native.tsx");

export default memoResult;
export const reportJankVoicePanelTabRequest = function reportJankVoicePanelTabRequest(disableControlsUpdate, disableControlsUpdate2, arg2) {
  let controlsProps;
  let tab;
  ({ tab, controlsProps } = disableControlsUpdate);
  disableControlsUpdate = disableControlsUpdate.disableControlsUpdate;
  const value = map.get(disableControlsUpdate);
  let tmp2 = null != value;
  if (tmp2) {
    let isShown = true !== disableControlsUpdate;
    if (isShown) {
      let debounce;
      if (controlsProps != null) {
        debounce = controlsProps.debounce;
      }
      isShown = true !== debounce;
    }
    if (isShown) {
      let mode;
      if (controlsProps != null) {
        mode = controlsProps.mode;
      }
      if (mode == null) {
        mode = VoicePanelControlsModes.DRAWER;
      }
      isShown = mode === VoicePanelControlsModes.DRAWER;
    }
    if (isShown) {
      isShown = arg2;
    }
    if (isShown) {
      isShown = value.isPanel;
    }
    if (!isShown) {
      isShown = value.isShown;
    }
    tmp2 = isShown;
  }
  if (tmp2) {
    let tmp10;
    const setJankVoicePanelTab = getJankSurfaceName.setJankVoicePanelTab;
    getJankSurfaceName;
    if ("chat" === tab) {
      tmp10 = "chat";
    } else if ("app_launcher" === tab) {
      tmp10 = "app-launcher";
    } else {
      tmp10 = "settings";
      if ("settings" !== tab) {
        tmp10 = null;
      }
    }
    setJankVoicePanelTab(disableControlsUpdate, tmp10);
  }
};
