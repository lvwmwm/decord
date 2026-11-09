// Module ID: 19732
// Function ID: 19733
// Name: JankVoicePanelTabReporter
// Dependencies: [19, 11363, 11361, 18404, 1652, 1705, 2]
// Exports: reportJankVoicePanelTabRequest

// Module 19732 (JankVoicePanelTabReporter)
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11361 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11363 */;
import getJankSurfaceName from "getJankSurfaceName" /* 18404 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp3;
let tmp4;
let react = react_mod;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const map = new Map();
let items = [{ code: "(function isDrawerShown_JankVoicePanelTabReporterNativeTsx1(wrapperSpecs,panelMode){let[VoicePanelModes]=this.__closure;return wrapperSpecs.drawerMode&&!wrapperSpecs.hidden&&panelMode===VoicePanelModes.PANEL;})" }, VoicePanelModes];
let c0;
[tmp3, tmp4] = items;
function isDrawerShown(drawerMode, arg1) {
  return drawerMode.drawerMode && !drawerMode.hidden && arg1 === _undefined.PANEL;
}
let items1 = [tmp4];
isDrawerShown.__closure = items1;
isDrawerShown.__workletHash = 17111317912789;
isDrawerShown.__initData = tmp3;
let closure_7 = { code: "(function JankVoicePanelTabReporterNativeTsx2(){let[isDrawerShown,wrapperSpecs,mode,VoicePanelModes]=this.__closure;return[isDrawerShown(wrapperSpecs.get(),mode.get()),mode.get()===VoicePanelModes.PANEL];})" };
let closure_8 = { code: "(function JankVoicePanelTabReporterNativeTsx3([isShown,isPanel],previous){let[scheduleOnRN,handleDrawerChange]=this.__closure;if(previous==null||isShown!==previous[0]||isPanel!==previous[1]){scheduleOnRN(handleDrawerChange,isShown,isPanel);}})" };
const memoResult = react.memo(function JankVoicePanelTabReporter(channelId) {
  let mode;
  let ref;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let wrapperSpecs;
  channelId = channelId.channelId;
  const tab = channelId.tab;
  react = undefined;
  let obj = react;
  ({ wrapperSpecs, mode } = channelId);
  react = react.useRef(tab);
  let items = [channelId, tab];
  const layoutEffect = react.useLayoutEffect(() => {
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
  const callback = react.useCallback((isShown, isPanel) => {
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
  let tmp3 = channelId;
  const items2 = [closure_7, isDrawerShown, wrapperSpecs, mode, VoicePanelModes];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp6, tmp7, tmp8, tmp9, tmp10] = items2;
  const tmp4 = tab;
  const tmp5 = channelId(tab[4]);
  class JankVoicePanelTabReporterNativeTsx2 {
    constructor() {
      const value = _undefined2.get();
      const items = [_undefined(value, _undefined3.get()), _undefined3.get() === _undefined4.PANEL];
      return items;
    }
  }
  const items3 = [tmp7, tmp8, tmp9, tmp10];
  JankVoicePanelTabReporterNativeTsx2.__closure = items3;
  JankVoicePanelTabReporterNativeTsx2.__workletHash = 2083564958222;
  JankVoicePanelTabReporterNativeTsx2.__initData = tmp6;
  const items4 = [closure_8, , ];
  const useAnimatedReaction = tmp5.useAnimatedReaction;
  items4[1] = tmp3(tmp4[5]).scheduleOnRN;
  items4[2] = callback;
  c0 = undefined;
  c1 = undefined;
  [tmp11, tmp12, tmp13] = items4;
  class JankVoicePanelTabReporterNativeTsx3 {
    constructor(arg0, arg1) {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const tmp3 = null != arg1 && tmp === arg1[0] && tmp2 === arg1[1];
      if (!tmp3) {
        _undefined(c1, tmp, tmp2);
      }
    }
  }
  const items5 = [tmp12, tmp13];
  JankVoicePanelTabReporterNativeTsx3.__closure = items5;
  JankVoicePanelTabReporterNativeTsx3.__workletHash = 4126589190035;
  JankVoicePanelTabReporterNativeTsx3.__initData = tmp11;
  const animatedReaction = useAnimatedReaction(JankVoicePanelTabReporterNativeTsx2, JankVoicePanelTabReporterNativeTsx3);
  const items6 = [channelId];
  const layoutEffect1 = obj.useLayoutEffect(() => () => {
    set.delete(closure_1_0);
    const obj = channelId(tab[3]);
    obj.setJankVoicePanelTab(closure_1_0, null);
  }, items6);
  return null;
});
let result = size.fileFinishedImporting("modules/jank_stats/native/JankVoicePanelTabReporter.native.tsx");

export default memoResult;
export function reportJankVoicePanelTabRequest(channelId, disableControlsUpdate, arg2) {
  let controlsProps;
  let tab;
  ({ tab, controlsProps } = disableControlsUpdate);
  disableControlsUpdate = disableControlsUpdate.disableControlsUpdate;
  const value = map.get(channelId);
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
    setJankVoicePanelTab(channelId, tmp10);
  }
}
