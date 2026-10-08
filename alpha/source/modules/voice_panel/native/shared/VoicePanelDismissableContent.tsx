// Module ID: 17522
// Function ID: 17523
// Name: VoicePanelDismissableContent
// Dependencies: [32, 19, 6041, 11989, 5113, 21, 17523, 1999, 558, 576, 11988, 4810, 2048, 9965, 9964, 2]

// Module 17522 (VoicePanelDismissableContent)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import CallConstants from "CallConstants" /* 5113 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11989 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6041 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function VoiceControlsNuxActionSheetImporter() {
  return asyncRequire(17523, dependencyMap.paths);
}
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const isActivityParticipant = CallConstants.isActivityParticipant;
const jsx = Fragment.jsx;
const VoiceControlToggleNuxActionSheet = "VoiceControlToggleNuxActionSheet";
const __initData = { code: "function VoicePanelDismissableContentTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
const __initData2 = { code: "function VoicePanelDismissableContentTsx2(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const __initData3 = { code: "function VoicePanelDismissableContentTsx3(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
const __initData4 = { code: "function VoicePanelDismissableContentTsx4(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelDismissibleContent() {
  let focused;
  let handleFocusChange;
  let mode;
  let tmp10;
  let tmp11;
  let tmp7;
  let tmp9;
  let tmp2 = mode;
  let tmp = require;
  let obj = require("react");
  const cResult = obj.c(5);
  const context = handleFocusChange.useContext(focused(mode[10]));
  const tmp4 = focused;
  ({ channelId: require, focused } = context);
  mode = context.mode;
  const tmp6 = _slicedToArray(handleFocusChange.useState(false), 2);
  [tmp7, _slicedToArray] = tmp6;
  handleFocusChange = function handleFocusChange(arg0) {
    const tmp = null != arg0 && isActivityParticipant(ChannelRTCStore.getParticipant(require, arg0));
    _slicedToArray(tmp);
  };
  const obj2 = require("ReanimatedRexport");
  class I {
    constructor() {
      let tmp;
      if (mode.get() === VoicePanelModes.PANEL) {
        const value = focused.get();
        let id;
        if (value != null) {
          id = value.id;
        }
        tmp = id;
      }
      return tmp;
    }
  }
  const obj3 = { mode, VoicePanelModes, focused };
  I.__closure = obj3;
  I.__workletHash = 11330064461661;
  I.__initData = __initData;
  const fn = function h(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(handleFocusChange)(arg0);
    }
  };
  fn.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, handleFocusChange };
  fn.__workletHash = 15579591345007;
  fn.__initData = __initData2;
  ({ runOnJS: require("ReanimatedRexport").runOnJS, handleFocusChange });
  const animatedReaction = obj2.useAnimatedReaction(I, fn);
  if (cResult[0] !== tmp7) {
    let items1;
    if (tmp7) {
      const items = [tmp(tmp2[12]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = tmp7;
    cResult[1] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(arg0) {
        let markAsDismissed;
        let visibleContent;
        ({ visibleContent, markAsDismissed } = arg0);
        let tmp3 = null;
        const tmp = require;
        const tmp2 = mode;
        if (visibleContent === require("dismissible_content").DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
          tmp3 = jsx(tmp(tmp2[13]).DismissibleActionSheet, { markAsDismissed, importer, actionSheetKey });
        }
        return tmp3;
      }
    }
    cResult[2] = O;
    tmp10 = O;
  } else {
    class O {
      constructor(arg0) {
        let markAsDismissed;
        let visibleContent;
        ({ visibleContent, markAsDismissed } = arg0);
        let tmp3 = null;
        const tmp = require;
        const tmp2 = mode;
        if (visibleContent === require("dismissible_content").DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
          tmp3 = jsx(tmp(tmp2[13]).DismissibleActionSheet, { markAsDismissed, importer, actionSheetKey });
        }
        return tmp3;
      }
    }
  }
  if (cResult[3] !== tmp9) {
    class O {
      constructor(arg0) {
        let markAsDismissed;
        let visibleContent;
        ({ visibleContent, markAsDismissed } = arg0);
        let tmp3 = null;
        const tmp = require;
        const tmp2 = mode;
        if (visibleContent === require("dismissible_content").DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
          tmp3 = jsx(tmp(tmp2[13]).DismissibleActionSheet, { markAsDismissed, importer, actionSheetKey });
        }
        return tmp3;
      }
    }
    const tmp12 = jsx(tmp4(tmp2[14]), { contentTypes: tmp9, children: tmp10 });
    cResult[3] = tmp9;
    cResult[4] = tmp12;
    tmp11 = tmp12;
  } else {
    class O {
      constructor(arg0) {
        let markAsDismissed;
        let visibleContent;
        ({ visibleContent, markAsDismissed } = arg0);
        let tmp3 = null;
        const tmp = require;
        const tmp2 = mode;
        if (visibleContent === require("dismissible_content").DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
          tmp3 = jsx(tmp(tmp2[13]).DismissibleActionSheet, { markAsDismissed, importer, actionSheetKey });
        }
        return tmp3;
      }
    }
  }
  return tmp11;
}) : (function VoicePanelDismissibleContent() {
  let closure_3;
  let first;
  let focused;
  let handleFocusChange;
  let items2;
  let mode;
  let tmp2 = mode;
  let tmp = focused;
  const context = handleFocusChange.useContext(focused(mode[10]));
  const channelId = context.channelId;
  focused = context.focused;
  mode = context.mode;
  [first, _slicedToArray] = handleFocusChange.useState(false);
  const items = [channelId];
  handleFocusChange = handleFocusChange.useCallback((arg0) => {
    const tmp = null != arg0 && isActivityParticipant(ChannelRTCStore.getParticipant(channelId, arg0));
    closure_3(tmp);
  }, items);
  let obj = channelId(mode[11]);
  const fn = function f() {
    let tmp;
    if (mode.get() === VoicePanelModes.PANEL) {
      const value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      tmp = id;
    }
    return tmp;
  };
  const obj2 = { mode, VoicePanelModes, focused };
  fn.__closure = obj2;
  fn.__workletHash = 6904572530271;
  fn.__initData = __initData3;
  const fn2 = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback)(arg0);
    }
  };
  fn2.__closure = { runOnJS: channelId(mode[11]).runOnJS, handleFocusChange };
  fn2.__workletHash = 1489576347241;
  fn2.__initData = __initData4;
  ({ runOnJS: channelId(mode[11]).runOnJS, handleFocusChange });
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const tmp7 = channelId;
  if (first) {
    const items1 = [tmp7(tmp2[12]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX];
    items2 = items1;
  } else {
    items2 = [];
  }
  return jsx(tmp(tmp2[14]), {
    contentTypes: items2,
    children(arg0) {
      let markAsDismissed;
      let visibleContent;
      ({ visibleContent, markAsDismissed } = arg0);
      let tmp3 = null;
      const tmp = channelId;
      const tmp2 = mode;
      if (visibleContent === channelId(mode[12]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
        tmp3 = jsx(tmp(tmp2[13]).DismissibleActionSheet, { markAsDismissed, importer, actionSheetKey });
      }
      return tmp3;
    }
  });
}));
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx");

export default memoResult;
