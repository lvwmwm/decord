// Module ID: 19823
// Function ID: 19824
// Name: useAccessiblePTT
// Dependencies: [32, 19, 5505, 19735, 7724, 2]
// Exports: default

// Module 19823 (useAccessiblePTT)
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5505 */;
import useStableCallbackDefault from "useStableCallback" /* 7724 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 19735 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useAccessiblePTT.tsx");

export default function useAccessiblePTT(arg0, arg1, arg2) {
  let closure_5;
  let first;
  let obj3;
  let str;
  let tmp11;
  let closure_0 = arg1;
  let closure_1 = arg2;
  const obj = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const tmp2 = useIsConnectedToVoiceChannelDefault(arg0);
  let closure_3 = tmp2;
  let closure_4 = react.useRef(false);
  [first, closure_5] = react.useState(false);
  const items = [arg1, arg2];
  const callback = react.useCallback((current) => {
    if (ref.current !== current) {
      ref.current = current;
      closure_5(current);
      if (current) {
        closure_0();
      } else {
        closure_1();
      }
    }
  }, items);
  const items1 = [tmp2, isScreenReaderEnabled, callback];
  const items2 = [isScreenReaderEnabled, callback];
  const callback1 = react.useCallback(() => {
    const tmp = closure_3 && !isScreenReaderEnabled;
    if (tmp) {
      callback(true);
    }
  }, items1);
  const items3 = [tmp2, isScreenReaderEnabled, callback];
  const callback2 = react.useCallback(() => {
    const tmp = isScreenReaderEnabled;
    if (!tmp) {
      callback(false);
    }
  }, items2);
  const callback3 = react.useCallback(() => {
    const tmp = closure_3 && isScreenReaderEnabled;
    if (tmp) {
      callback(!ref.current);
    }
  }, items3);
  const tmp9 = useStableCallbackDefault(() => callback(false));
  let closure_7 = tmp9;
  const items4 = [arg0, tmp2, isScreenReaderEnabled, tmp9];
  const layoutEffect = react.useLayoutEffect(() => {
    const tmp = closure_3;
    if (!tmp) {
      closure_7();
    }
    return closure_7;
  }, items4);
  const obj2 = { isScreenReaderEnabled, startGesture: callback1, endGesture: callback2, accessibilityProps: obj3 };
  obj3 = { onPress: callback3, accessibilityRole: str, accessibilityState: tmp11 };
  str = "button";
  if (isScreenReaderEnabled) {
    str = "togglebutton";
  }
  tmp11 = undefined;
  if (isScreenReaderEnabled) {
    tmp11 = { checked: first };
    const obj4 = { checked: first };
  }
  return obj2;
};
