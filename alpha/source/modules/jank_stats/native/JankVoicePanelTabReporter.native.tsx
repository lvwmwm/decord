// Module ID: 19326
// Function ID: 19327
// Name: JankVoicePanelTabReporter
// Dependencies: [19, 11223, 11221, 18054, 5095, 2]
// Exports: reportJankVoicePanelTabRequest

// Module 19326 (JankVoicePanelTabReporter)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11221 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import getJankSurfaceName from "getJankSurfaceName" /* 18054 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const map = new Map();
function isDrawerShown(drawerMode, arg1) {
  return drawerMode.drawerMode && !drawerMode.hidden && arg1 === VoicePanelModes.PANEL;
}
isDrawerShown.__closure = { VoicePanelModes };
isDrawerShown.__workletHash = 4659073724332;
isDrawerShown.__initData = { code: "function isDrawerShown_JankVoicePanelTabReporterNativeTsx1(wrapperSpecs,panelMode){const{VoicePanelModes}=this.__closure;return wrapperSpecs.drawerMode&&!wrapperSpecs.hidden&&panelMode===VoicePanelModes.PANEL;}" };
const __initData = { code: "function JankVoicePanelTabReporterNativeTsx2(){const{isDrawerShown,wrapperSpecs,mode,VoicePanelModes}=this.__closure;return[isDrawerShown(wrapperSpecs.get(),mode.get()),mode.get()===VoicePanelModes.PANEL];}" };
const __initData2 = { code: "function JankVoicePanelTabReporterNativeTsx3([isShown,isPanel],previous){const{runOnJS,handleDrawerChange}=this.__closure;if(previous==null||isShown!==previous[0]||isPanel!==previous[1]){runOnJS(handleDrawerChange)(isShown,isPanel);}}" };
const memoResult = react.memo(function JankVoicePanelTabReporter(channelId) {
  channelId = channelId.channelId;
  const tab = channelId.tab;
  const wrapperSpecs = channelId.wrapperSpecs;
  const mode = channelId.mode;
  const ref = wrapperSpecs.useRef(tab);
  let items = [channelId, tab];
  const layoutEffect = wrapperSpecs.useLayoutEffect(() => {
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
  const handleDrawerChange = wrapperSpecs.useCallback((isShown, isPanel) => {
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
  let obj = channelId(tab[4]);
  const fn = function f() {
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
  let obj2 = { isDrawerShown, wrapperSpecs, mode, VoicePanelModes: mode };
  fn.__closure = obj2;
  fn.__workletHash = 16004116027159;
  fn.__initData = __initData;
  const fn2 = function _(arg0, arg1) {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const tmp3 = null != arg1 && tmp === arg1[0] && tmp2 === arg1[1];
    if (!tmp3) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback)(tmp, tmp2);
    }
  };
  fn2.__closure = { runOnJS: channelId(tab[4]).runOnJS, handleDrawerChange };
  fn2.__workletHash = 16116209487687;
  fn2.__initData = __initData2;
  ({ runOnJS: channelId(tab[4]).runOnJS, handleDrawerChange });
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const items2 = [channelId];
  const layoutEffect1 = wrapperSpecs.useLayoutEffect(() => () => {
    callback.delete(closure_1_0);
    const obj = channelId(tab[3]);
    obj.setJankVoicePanelTab(closure_1_0, null);
  }, items2);
  return null;
});
let result = size.fileFinishedImporting("modules/jank_stats/native/JankVoicePanelTabReporter.native.tsx");

export default memoResult;
export function reportJankVoicePanelTabRequest(disableControlsUpdate, disableControlsUpdate2, arg2) {
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
}
