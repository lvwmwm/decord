// Module ID: 15827
// Function ID: 122145
// Name: VoiceControlsNuxActionSheetImporter
// Dependencies: [57, 31, 4143, 10047, 4148, 33, 15828, 1934, 10046, 3991, 1334, 9678, 9679, 2]

// Module 15827 (VoiceControlsNuxActionSheetImporter)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { VoicePanelModes } from "VoicePanelModes";
import { isActivityParticipant } from "ParticipantTypes";
import { jsx } from "jsxProd";

const require = arg1;
function VoiceControlsNuxActionSheetImporter() {
  return require(1934) /* maybeLoadBundle */(15828, dependencyMap.paths);
}
let closure_9 = { code: "function VoicePanelDismissableContentTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
let closure_10 = { code: "function VoicePanelDismissableContentTsx2(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const memoResult = importAllResult.memo(function VoicePanelDismissibleContent() {
  const context = callback.useContext(focused(mode[8]));
  const channelId = context.channelId;
  focused = context.focused;
  mode = context.mode;
  const tmp2 = callback(callback.useState(false), 2);
  callback = tmp2[1];
  const items = [channelId];
  callback = callback.useCallback((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = outer1_7(outer1_5.getParticipant(channelId, arg0));
    }
    callback(tmp);
  }, items);
  let obj = channelId(mode[9]);
  const fn = function h() {
    let tmp;
    if (mode.get() === outer1_6.PANEL) {
      const value = focused.get();
      let id;
      if (null != value) {
        id = value.id;
      }
      tmp = id;
    }
    return tmp;
  };
  obj = { mode, VoicePanelModes, focused };
  fn.__closure = obj;
  fn.__workletHash = 11330064461661;
  fn.__initData = closure_9;
  const fn2 = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      channelId(mode[9]).runOnJS(callback)(arg0);
      const obj = channelId(mode[9]);
    }
  };
  obj = { runOnJS: channelId(mode[9]).runOnJS, handleFocusChange: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 15579591345007;
  fn2.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  if (tmp2[0]) {
    const items1 = [channelId(mode[10]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const obj1 = {
    contentTypes: items2,
    children(arg0) {
      let markAsDismissed;
      let visibleContent;
      ({ visibleContent, markAsDismissed } = arg0);
      let tmp = null;
      if (visibleContent === channelId(mode[10]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
        const obj = { markAsDismissed, importer: outer1_11, actionSheetKey: "VoiceControlToggleNuxActionSheet" };
        tmp = outer1_8(channelId(mode[12]).DismissibleActionSheet, obj);
      }
      return tmp;
    }
  };
  return jsx(focused(mode[11]), {
    contentTypes: items2,
    children(arg0) {
      let markAsDismissed;
      let visibleContent;
      ({ visibleContent, markAsDismissed } = arg0);
      let tmp = null;
      if (visibleContent === channelId(mode[10]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
        const obj = { markAsDismissed, importer: outer1_11, actionSheetKey: "VoiceControlToggleNuxActionSheet" };
        tmp = outer1_8(channelId(mode[12]).DismissibleActionSheet, obj);
      }
      return tmp;
    }
  });
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx");

export default memoResult;
