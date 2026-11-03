// Module ID: 13923
// Function ID: 13924
// Name: useChatInputHeightWorklet
// Dependencies: [19, 1377, 1652, 12948, 12949, 12950, 2]
// Exports: default, getIsChatInputHeightWorkletEnabled

// Module 13923 (useChatInputHeightWorklet)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let closure_4 = { code: "(function useChatInputHeightWorkletNativeTsx1(event){let[contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight]=this.__closure;contentSize.set(event.height);textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(event.height,textFieldMinHeight.get()));})" };
let closure_5 = { code: "(function useChatInputHeightWorkletNativeTsx2(){let[keyboardState,windowDimensions,getChatInputMaxHeightWorklet]=this.__closure;keyboardState.get();windowDimensions.get();return getChatInputMaxHeightWorklet();})" };
let closure_6 = { code: "(function useChatInputHeightWorkletNativeTsx3(maxHeight,maxHeightPrev){let[isWorkletDriven,contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight]=this.__closure;if(!isWorkletDriven||maxHeightPrev==null||maxHeight===maxHeightPrev){return;}if(contentSize.get()===0){return;}textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(contentSize.get(),textFieldMinHeight.get()));})" };
let result = size.fileFinishedImporting("modules/chat_input/native/useChatInputHeightWorklet.native.tsx");

export default function useChatInputHeightWorklet(arg0) {
  let items6;
  let items7;
  let textFieldHeight;
  let textFieldMinHeight;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ textFieldHeight, textFieldMinHeight } = arg0);
  let sharedValue;
  let tmp = sharedValue;
  let obj = sharedValue(1652);
  sharedValue = obj.useSharedValue(0);
  const items = [closure_4, sharedValue, textFieldHeight, , ];
  const useEvent = sharedValue(1652).useEvent;
  const tmp4 = sharedValue(1652);
  items[3] = sharedValue(12948).getChatInputHeightAnimationTimingWorklet;
  items[4] = textFieldMinHeight;
  [tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  function useChatInputHeightWorkletNativeTsx1(height) {
    const result = _undefined.set(height.height);
    const result1 = _undefined2.set(_undefined3(height.height, _undefined4.get()));
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9];
  useChatInputHeightWorkletNativeTsx1.__closure = items1;
  useChatInputHeightWorkletNativeTsx1.__workletHash = 620916776372;
  useChatInputHeightWorkletNativeTsx1.__initData = tmp5;
  const event = useEvent(useChatInputHeightWorkletNativeTsx1, ["onChangeContentSize"]);
  const tmpResult = tmp(1377);
  const isAndroidResult = tmpResult.isAndroid();
  const tmp12 = event(12949)();
  const items2 = [closure_5, tmp12, event(12950)({ ignoreKeyboard: true }), ];
  const tmp13 = event(12950)({ ignoreKeyboard: true });
  const useAnimatedReaction = tmp(1652).useAnimatedReaction;
  tmp(1652);
  items2[3] = tmp(12948).getChatInputMaxHeightWorklet;
  [tmp15, tmp16, tmp17, tmp18] = items2;
  function useChatInputHeightWorkletNativeTsx2() {
    const value = _undefined.get();
    const value2 = _undefined2.get();
    return _undefined3();
  }
  const items3 = [tmp16, tmp17, tmp18];
  useChatInputHeightWorkletNativeTsx2.__closure = items3;
  useChatInputHeightWorkletNativeTsx2.__workletHash = 9634242494291;
  useChatInputHeightWorkletNativeTsx2.__initData = tmp15;
  const items4 = [closure_6, isAndroidResult, sharedValue, textFieldHeight, tmp(12948).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items4;
  function useChatInputHeightWorkletNativeTsx3(arg0, arg1) {
    const tmp = c0 && null != arg1 && arg0 !== arg1 && 0 !== _undefined.get();
    if (tmp) {
      set = _undefined2.set;
      const value = _undefined.get();
      const result = set(_undefined3(value, _undefined4.get()));
    }
  }
  const items5 = [tmp20, tmp21, tmp22, tmp23, tmp24];
  useChatInputHeightWorkletNativeTsx3.__closure = items5;
  useChatInputHeightWorkletNativeTsx3.__workletHash = 14811065728720;
  useChatInputHeightWorkletNativeTsx3.__initData = tmp19;
  const animatedReaction = useAnimatedReaction(useChatInputHeightWorkletNativeTsx2, useChatInputHeightWorkletNativeTsx3);
  const obj2 = {
    registerViewTag: react.useCallback((findNodeHandleResult) => {
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const workletEventHandler = event.workletEventHandler;
        workletEventHandler.registerForEvents(findNodeHandleResult);
      }
    }, items6),
    unregisterViewTag: react.useCallback((findNodeHandleResult) => {
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const workletEventHandler = event.workletEventHandler;
        workletEventHandler.unregisterFromEvents(findNodeHandleResult);
        const result = sharedValue.set(0);
      }
    }, items7)
  };
  items6 = [event];
  items7 = [sharedValue, event];
  return obj2;
};
export function getIsChatInputHeightWorkletEnabled() {
  const obj = PlatformUtils;
  return obj.isAndroid();
}
