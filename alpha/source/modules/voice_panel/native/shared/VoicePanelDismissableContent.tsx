// Module ID: 19561
// Function ID: 19562
// Name: VoicePanelDismissableContent
// Dependencies: [32, 19, 6978, 11411, 5815, 21, 19562, 2123, 11410, 1652, 1705, 4974, 10698, 10699, 2]

// Module 19561 (VoicePanelDismissableContent)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import CallConstants from "CallConstants" /* 5815 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11410 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11411 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6978 */;
import size from "module_2" /* 2 */;

let tmp;
const SelectedDismissibleContentDefault = tmp(10698);
function VoiceControlsNuxActionSheetImporter() {
  return asyncRequire(19562, dependencyMap.paths);
}
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const isActivityParticipant = CallConstants.isActivityParticipant;
const jsx = Fragment.jsx;
let closure_10 = { code: "(function VoicePanelDismissableContentTsx1(){let[mode,VoicePanelModes,focused]=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;})" };
let closure_11 = { code: "(function VoicePanelDismissableContentTsx2(manualId,previousManualId){let[scheduleOnRN,handleFocusChange]=this.__closure;if(manualId!==previousManualId){scheduleOnRN(handleFocusChange,manualId);}})" };
const memoResult = react.memo(function VoicePanelDismissibleContent() {
  let closure_1;
  let first;
  let focused;
  let importer;
  let items6;
  let mode;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp9;
  let tmp2 = dependencyMap;
  let tmp = importDefault;
  const context = react.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  ({ focused, mode } = context);
  [first, importDefault] = react.useState(false);
  const items = [channelId];
  const callback = react.useCallback((arg0) => {
    const tmp = null != arg0 && isActivityParticipant(ChannelRTCStore.getParticipant(channelId, arg0));
    closure_1(tmp);
  }, items);
  const items1 = [closure_10, mode, VoicePanelModes, focused];
  let c0;
  let c1;
  let c2;
  [tmp9, tmp10, tmp11, tmp12] = items1;
  const tmp8 = channelId(1652);
  class VoicePanelDismissableContentTsx1 {
    constructor() {
      let tmp;
      if (_undefined.get() === _undefined2.PANEL) {
        const value = _undefined3.get();
        let id;
        if (value != null) {
          id = value.id;
        }
        tmp = id;
      }
      return tmp;
    }
  }
  const items2 = [tmp10, tmp11, tmp12];
  VoicePanelDismissableContentTsx1.__closure = items2;
  VoicePanelDismissableContentTsx1.__workletHash = 2390811461540;
  VoicePanelDismissableContentTsx1.__initData = tmp9;
  const items3 = [closure_11, , ];
  const useAnimatedReaction = tmp8.useAnimatedReaction;
  items3[1] = channelId(1705).scheduleOnRN;
  items3[2] = callback;
  c0 = undefined;
  c1 = undefined;
  [tmp13, tmp14, tmp15] = items3;
  class VoicePanelDismissableContentTsx2 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items4 = [tmp14, tmp15];
  VoicePanelDismissableContentTsx2.__closure = items4;
  VoicePanelDismissableContentTsx2.__workletHash = 15261631446843;
  VoicePanelDismissableContentTsx2.__initData = tmp13;
  const animatedReaction = useAnimatedReaction(VoicePanelDismissableContentTsx1, VoicePanelDismissableContentTsx2);
  if (first) {
    const items5 = [channelId(4974).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX];
    items6 = items5;
  } else {
    items6 = [];
  }
  return jsx(SelectedDismissibleContentDefault, {
    contentTypes: items6,
    children(arg0) {
      let markAsDismissed;
      let visibleContent;
      ({ visibleContent, markAsDismissed } = arg0);
      let tmp3 = null;
      const tmp = channelId;
      const tmp2 = dependencyMap;
      if (visibleContent === channelId(dependencyMap[11]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
        tmp3 = jsx(tmp(tmp2[13]).DismissibleActionSheet, { markAsDismissed, importer, actionSheetKey: "VoiceControlToggleNuxActionSheet" });
      }
      return tmp3;
    }
  });
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx");

export default memoResult;
