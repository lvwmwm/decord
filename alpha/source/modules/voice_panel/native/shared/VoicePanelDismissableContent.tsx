// Module ID: 19153
// Function ID: 19154
// Name: VoicePanelDismissableContent
// Dependencies: [32, 19, 6837, 11204, 5676, 21, 19154, 1995, 11203, 5090, 4842, 10500, 10501, 2]

// Module 19153 (VoicePanelDismissableContent)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import CallConstants from "CallConstants" /* 5676 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11204 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6837 */;
import size from "module_2" /* 2 */;

function VoiceControlsNuxActionSheetImporter() {
  return asyncRequire(19154, dependencyMap.paths);
}
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const isActivityParticipant = CallConstants.isActivityParticipant;
const jsx = Fragment.jsx;
const __initData = { code: "function VoicePanelDismissableContentTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
const __initData2 = { code: "function VoicePanelDismissableContentTsx2(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const memoResult = react.memo(function VoicePanelDismissibleContent() {
  let closure_3;
  let first;
  let focused;
  let handleFocusChange;
  let importer;
  let items2;
  let mode;
  let tmp2 = mode;
  let tmp = focused;
  const context = handleFocusChange.useContext(focused(mode[8]));
  const channelId = context.channelId;
  focused = context.focused;
  mode = context.mode;
  [first, _slicedToArray] = handleFocusChange.useState(false);
  const items = [channelId];
  handleFocusChange = handleFocusChange.useCallback((arg0) => {
    const tmp = null != arg0 && isActivityParticipant(ChannelRTCStore.getParticipant(channelId, arg0));
    closure_3(tmp);
  }, items);
  let obj = channelId(mode[9]);
  const fn = function h() {
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
  fn.__workletHash = 11330064461661;
  fn.__initData = __initData;
  const fn2 = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback)(arg0);
    }
  };
  fn2.__closure = { runOnJS: channelId(mode[9]).runOnJS, handleFocusChange };
  fn2.__workletHash = 15579591345007;
  fn2.__initData = __initData2;
  ({ runOnJS: channelId(mode[9]).runOnJS, handleFocusChange });
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const tmp7 = channelId;
  if (first) {
    const items1 = [tmp7(tmp2[10]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX];
    items2 = items1;
  } else {
    items2 = [];
  }
  return jsx(tmp(tmp2[11]), {
    contentTypes: items2,
    children(arg0) {
      let markAsDismissed;
      let visibleContent;
      ({ visibleContent, markAsDismissed } = arg0);
      let tmp3 = null;
      const tmp = channelId;
      const tmp2 = mode;
      if (visibleContent === channelId(mode[10]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
        tmp3 = jsx(tmp(tmp2[12]).DismissibleActionSheet, { markAsDismissed, importer, actionSheetKey: "VoiceControlToggleNuxActionSheet" });
      }
      return tmp3;
    }
  });
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx");

export default memoResult;
