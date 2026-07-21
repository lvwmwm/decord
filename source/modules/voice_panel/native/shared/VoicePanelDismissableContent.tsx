// Module ID: 15652
// Function ID: 119568
// Name: VoiceControlsNuxActionSheetImporter
// Dependencies: []

// Module 15652 (VoiceControlsNuxActionSheetImporter)
function VoiceControlsNuxActionSheetImporter() {
  return arg1(dependencyMap[7])(dependencyMap[6], dependencyMap.paths);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const VoicePanelModes = arg1(dependencyMap[3]).VoicePanelModes;
const isActivityParticipant = arg1(dependencyMap[4]).isActivityParticipant;
const jsx = arg1(dependencyMap[5]).jsx;
let closure_9 = { code: "function VoicePanelDismissableContentTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
let closure_10 = { code: "function VoicePanelDismissableContentTsx2(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const memoResult = importAllResult.memo(function VoicePanelDismissibleContent() {
  const context = importAllResult.useContext(importDefault(dependencyMap[8]));
  const channelId = context.channelId;
  const arg1 = channelId;
  const focused = context.focused;
  const importDefault = focused;
  const mode = context.mode;
  const dependencyMap = mode;
  const tmp2 = callback(importAllResult.useState(false), 2);
  let callback = tmp2[1];
  const items = [channelId];
  callback = importAllResult.useCallback((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = callback2(participant.getParticipant(channelId, arg0));
    }
    callback(tmp);
  }, items);
  let obj = arg1(dependencyMap[9]);
  const fn = function h() {
    let tmp;
    if (mode.get() === constants.PANEL) {
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
  obj = { runOnJS: arg1(dependencyMap[9]).runOnJS, handleFocusChange: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 15579591345007;
  fn2.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  if (tmp2[0]) {
    const items1 = [arg1(dependencyMap[10]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX];
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
        const obj = { markAsDismissed, importer: closure_11, actionSheetKey: "VoiceControlToggleNuxActionSheet" };
        tmp = callback3(channelId(mode[12]).DismissibleActionSheet, obj);
      }
      return tmp;
    }
  };
  return jsx(importDefault(dependencyMap[11]), obj1);
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx");

export default memoResult;
