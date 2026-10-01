// Module ID: 11512
// Function ID: 11513
// Name: useChatInputHeightWorklet
// Dependencies: [19, 1364, 4566, 11513, 11514, 11515, 2]
// Exports: default, getIsChatInputHeightWorkletEnabled

// Module 11512 (useChatInputHeightWorklet)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useChatInputMaxHeight from "useChatInputMaxHeight" /* 11513 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let __initData = { code: "function useChatInputHeightWorkletNativeTsx1(event){const{contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;contentSize.set(event.height);textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(event.height,textFieldMinHeight.get()));}" };
let __initData2 = { code: "function useChatInputHeightWorkletNativeTsx2(){const{keyboardState,windowDimensions,getChatInputMaxHeightWorklet}=this.__closure;keyboardState.get();windowDimensions.get();return getChatInputMaxHeightWorklet();}" };
let __initData3 = { code: "function useChatInputHeightWorkletNativeTsx3(maxHeight,maxHeightPrev){const{isWorkletDriven,contentSize,textFieldHeight,getChatInputHeightAnimationTimingWorklet,textFieldMinHeight}=this.__closure;if(!isWorkletDriven||maxHeightPrev==null||maxHeight===maxHeightPrev){return;}if(contentSize.get()===0){return;}textFieldHeight.set(getChatInputHeightAnimationTimingWorklet(contentSize.get(),textFieldMinHeight.get()));}" };
let result = size.fileFinishedImporting("modules/chat_input/native/useChatInputHeightWorklet.native.tsx");

export default function useChatInputHeightWorklet(textFieldHeight) {
  let c4;
  let closure_5;
  let closure_6;
  let items;
  let items1;
  textFieldHeight = textFieldHeight.textFieldHeight;
  const textFieldMinHeight = textFieldHeight.textFieldMinHeight;
  let sharedValue;
  __initData = undefined;
  let obj = textFieldHeight(sharedValue[2]);
  sharedValue = obj.useSharedValue(0);
  const fn = function s(height) {
    const result = sharedValue.set(height.height);
    set = textFieldHeight.set;
    const obj = useChatInputMaxHeight;
    const result1 = set(obj.getChatInputHeightAnimationTimingWorklet(height.height, textFieldMinHeight.get()));
  };
  const obj2 = textFieldHeight(sharedValue[2]);
  fn.__closure = { contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[3]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  fn.__workletHash = 8560364367725;
  fn.__initData = __initData;
  ({ contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[3]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight });
  const event = obj2.useEvent(fn, ["onChangeContentSize"]);
  const obj4 = textFieldHeight(sharedValue[1]);
  const isAndroidResult = obj4.isAndroid();
  __initData = isAndroidResult;
  const tmp4 = textFieldMinHeight(sharedValue[4])();
  __initData2 = tmp4;
  const tmp5 = textFieldMinHeight(sharedValue[5])({ ignoreKeyboard: true });
  __initData3 = tmp5;
  const fn2 = function k() {
    const value = closure_5.get();
    const value2 = closure_6.get();
    const obj = useChatInputMaxHeight;
    return obj.getChatInputMaxHeightWorklet();
  };
  const useAnimatedReaction = textFieldHeight(sharedValue[2]).useAnimatedReaction;
  const tmp6 = textFieldHeight(sharedValue[2]);
  fn2.__closure = { keyboardState: tmp4, windowDimensions: tmp5, getChatInputMaxHeightWorklet: textFieldHeight(sharedValue[3]).getChatInputMaxHeightWorklet };
  fn2.__workletHash = 13334617579850;
  fn2.__initData = __initData2;
  ({ keyboardState: tmp4, windowDimensions: tmp5, getChatInputMaxHeightWorklet: textFieldHeight(sharedValue[3]).getChatInputMaxHeightWorklet });
  class H {
    constructor(arg0, arg1) {
      const tmp = c4 && null != arg1 && arg0 !== arg1 && 0 !== sharedValue.get();
      if (tmp) {
        set = textFieldHeight.set;
        const getChatInputHeightAnimationTimingWorklet = useChatInputMaxHeight.getChatInputHeightAnimationTimingWorklet;
        useChatInputMaxHeight;
        const value = sharedValue.get();
        const result = set(getChatInputHeightAnimationTimingWorklet(value, textFieldMinHeight.get()));
      }
    }
  }
  H.__closure = { isWorkletDriven: isAndroidResult, contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[3]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight };
  H.__workletHash = 9298875396681;
  H.__initData = __initData3;
  ({ isWorkletDriven: isAndroidResult, contentSize: sharedValue, textFieldHeight, getChatInputHeightAnimationTimingWorklet: textFieldHeight(sharedValue[3]).getChatInputHeightAnimationTimingWorklet, textFieldMinHeight });
  const animatedReaction = useAnimatedReaction(fn2, H);
  const obj7 = {
    registerViewTag: event.useCallback((arg0) => {
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const workletEventHandler = event.workletEventHandler;
        workletEventHandler.registerForEvents(arg0);
      }
    }, items),
    unregisterViewTag: event.useCallback((arg0) => {
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const workletEventHandler = event.workletEventHandler;
        workletEventHandler.unregisterFromEvents(arg0);
        const result = sharedValue.set(0);
      }
    }, items1)
  };
  items = [event];
  items1 = [sharedValue, event];
  return obj7;
};
export const getIsChatInputHeightWorkletEnabled = function getIsChatInputHeightWorkletEnabled() {
  const obj = PlatformUtils;
  return obj.isAndroid();
};
