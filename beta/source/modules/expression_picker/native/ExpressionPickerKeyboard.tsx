// Module ID: 16988
// Function ID: 16989
// Name: ExpressionPickerKeyboard
// Dependencies: [32, 19, 12166, 21, 558, 568, 4497, 5173, 12577, 1879, 1614, 4627, 10347, 4471, 10652, 12338, 2]

// Module 16988 (ExpressionPickerKeyboard)
import KeyboardTypes from "KeyboardTypes" /* 1614 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1879 */;
import native from "native" /* 4471 */;
import getEmojiTextDefault from "getEmojiText" /* 12577 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const KEYBOARD_ANIMATION_CONFIG = fn(12166).KEYBOARD_ANIMATION_CONFIG;
const jsx = fn(21).jsx;
let __initData = { code: "function ExpressionPickerKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return Math.max(bottomSheetIndex.get(),0)>0;}" };
let closure_8 = { code: "function ExpressionPickerKeyboardTsx2(){const{bottomSheetExpandingOrExpanded,maximum,minimum}=this.__closure;return{height:bottomSheetExpandingOrExpanded.get()?maximum:minimum};}" };
let closure_9 = { code: "function ExpressionPickerKeyboardTsx3(){const{bottomSheetIndex}=this.__closure;return Math.max(bottomSheetIndex.get(),0)>0;}" };
let closure_10 = { code: "function ExpressionPickerKeyboardTsx4(){const{bottomSheetExpandingOrExpanded,maximum,minimum}=this.__closure;return{height:bottomSheetExpandingOrExpanded.get()?maximum:minimum};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPickerKeyboard.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  const cResult = chatInputRef(transitionState[5]).c(36);
  ({ channel, chatInputRef } = onClose);
  onClose = onClose.onClose;
  transitionState = onClose.transitionState;
  let obj = chatInputRef(transitionState[5]);
  const sharedValue = chatInputRef(transitionState[6]).useSharedValue(-1);
  const obj2 = chatInputRef(transitionState[6]);
  const sharedValue1 = chatInputRef(transitionState[6]).useSharedValue(0);
  ref = ref.useRef(null);
  const obj3 = chatInputRef(transitionState[6]);
  const isScreenReaderEnabled = chatInputRef(transitionState[7]).useIsScreenReaderEnabled();
  const tmp8 = sharedValue(ref.useState(false), 2);
  const first = tmp8[0];
  __initData = tmp8[1];
  if (cResult[0] !== chatInputRef) {
    const fn = function x(arg0) {
      const current = chatInputRef.current;
      current.insertText(getEmojiTextDefault(arg0), null, true);
      const result = KeyboardManagerUtils.dismissGlobalKeyboard();
      const current2 = chatInputRef.current;
      current2.openCustomKeyboard({ type: KeyboardTypes.KeyboardTypes.EXPRESSION });
      const current3 = ref.current;
      if (current3 != null) {
        current3.snapToIndex(0);
      }
    };
    cResult[0] = chatInputRef;
    cResult[1] = fn;
  }
  if (cResult[2] !== chatInputRef) {
    class C {
      constructor(arg0) {
        current = chatInputRef.current;
        handleSelectGIFResult = current.handleSelectGIF(onClose);
        current2 = chatInputRef.current;
        openSystemKeyboardResult = current2.openSystemKeyboard();
        return;
      }
    }
    cResult[2] = chatInputRef;
    cResult[3] = C;
  } else {
    class C {
      constructor(arg0) {
        current = chatInputRef.current;
        handleSelectGIFResult = current.handleSelectGIF(onClose);
        current2 = chatInputRef.current;
        openSystemKeyboardResult = current2.openSystemKeyboard();
        return;
      }
    }
  }
  if (cResult[4] !== chatInputRef) {
    class C {
      constructor(arg0) {
        current = chatInputRef.current;
        handleSelectGIFResult = current.handleSelectGIF(onClose);
        current2 = chatInputRef.current;
        openSystemKeyboardResult = current2.openSystemKeyboard();
        return;
      }
    }
    cResult[4] = chatInputRef;
    cResult[5] = tmp13;
  } else {
    class C {
      constructor(arg0) {
        current = chatInputRef.current;
        handleSelectGIFResult = current.handleSelectGIF(onClose);
        current2 = chatInputRef.current;
        openSystemKeyboardResult = current2.openSystemKeyboard();
        return;
      }
    }
  }
  if (cResult[6] !== chatInputRef) {
    class D {
      constructor() {
        current = chatInputRef.current;
        backspaceResult = current.backspace();
        return;
      }
    }
    cResult[6] = chatInputRef;
    cResult[7] = D;
  } else {
    class D {
      constructor() {
        current = chatInputRef.current;
        backspaceResult = current.backspace();
        return;
      }
    }
  }
  const obj4 = chatInputRef(transitionState[7]);
  const keyboardContextForType = chatInputRef(transitionState[11]).useKeyboardContextForType(tmp(tmp2[10]).KeyboardTypes.EXPRESSION);
  const tmp16 = onClose(transitionState[12])();
  const minimum = tmp16.minimum;
  const maximum = tmp16.maximum;
  const tmpResult = chatInputRef(transitionState[11]);
  class M {
    constructor() {
      return Math.max(closure_3.get(), 0) > 0;
    }
  }
  M.__closure = { bottomSheetIndex: sharedValue };
  M.__workletHash = 1982988107352;
  M.__initData = __initData;
  const derivedValue = chatInputRef(transitionState[6]).useDerivedValue(M);
  const tmpResult3 = chatInputRef(transitionState[6]);
  class V {
    constructor() {
      obj = { height: closure_10.get() ? maximum : minimum };
      return obj;
    }
  }
  V.__closure = { bottomSheetExpandingOrExpanded: derivedValue, maximum, minimum };
  V.__workletHash = 13253776832356;
  V.__initData = minimum;
  const animatedStyle = chatInputRef(transitionState[6]).useAnimatedStyle(V);
  if (cResult[8] === chatInputRef) {
    class D {
      constructor() {
        current = chatInputRef.current;
        backspaceResult = current.backspace();
        return;
      }
    }
    if (cResult[11] === first) {
      class D {
        constructor() {
          current = chatInputRef.current;
          backspaceResult = current.backspace();
          return;
        }
      }
    }
    class Y {
      constructor() {
        tmp = closure_6;
        if (closure_6) {
          tmp2 = transitionState;
          tmp3 = closure_0;
          tmp4 = closure_2;
          tmp = transitionState === closure_0(closure_2[13]).TransitionStates.YEETED;
        }
        if (tmp) {
          tmp6 = null;
          if (onClose != null) {
            tmp5Result = tmp5();
          }
        }
        return;
      }
    }
    const items = [first, onClose, transitionState];
    cResult[11] = first;
    cResult[12] = onClose;
    cResult[13] = transitionState;
    cResult[14] = Y;
    cResult[15] = items;
  }
  class G {
    constructor() {
      tmp = closure_7(true);
      if (closure_5) {
        tmp2 = chatInputRef;
        current = chatInputRef.current;
        openSystemKeyboardResult = current.openSystemKeyboard();
      }
      return;
    }
  }
  cResult[8] = chatInputRef;
  cResult[9] = isScreenReaderEnabled;
  cResult[10] = G;
}) : ((channel) => {
  const chatInputRef = channel.chatInputRef;
  const onClose = channel.onClose;
  const transitionState = channel.transitionState;
  let ref;
  let derivedValue;
  const sharedValue = chatInputRef(transitionState[6]).useSharedValue(-1);
  let obj = chatInputRef(transitionState[6]);
  const sharedValue1 = chatInputRef(transitionState[6]).useSharedValue(0);
  ref = ref.useRef(null);
  const obj2 = chatInputRef(transitionState[6]);
  const isScreenReaderEnabled = chatInputRef(transitionState[7]).useIsScreenReaderEnabled();
  const tmp5 = sharedValue(ref.useState(false), 2);
  const first = tmp5[0];
  closure_7 = tmp5[1];
  const items = [chatInputRef];
  const items1 = [chatInputRef];
  const callback = ref.useCallback((arg0) => {
    const current = chatInputRef.current;
    current.insertText(getEmojiTextDefault(arg0), null, true);
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    const current2 = chatInputRef.current;
    current2.openCustomKeyboard({ type: KeyboardTypes.KeyboardTypes.EXPRESSION });
    const current3 = ref.current;
    if (current3 != null) {
      current3.snapToIndex(0);
    }
  }, items);
  const items2 = [chatInputRef];
  const callback1 = ref.useCallback((url) => {
    const current = chatInputRef.current;
    current.handleSelectGIF(url);
    const current2 = chatInputRef.current;
    current2.openSystemKeyboard();
  }, items1);
  const items3 = [chatInputRef];
  const callback2 = ref.useCallback((sticker) => {
    const current = chatInputRef.current;
    current.handleSelectSticker(sticker);
    const current2 = chatInputRef.current;
    current2.openSystemKeyboard();
    const current3 = chatInputRef.current;
    current3.setText("");
  }, items2);
  const callback3 = ref.useCallback(() => {
    const current = chatInputRef.current;
    current.backspace();
  }, items3);
  const obj3 = chatInputRef(transitionState[7]);
  const keyboardContextForType = chatInputRef(transitionState[11]).useKeyboardContextForType(chatInputRef(transitionState[10]).KeyboardTypes.EXPRESSION);
  const tmp12 = onClose(transitionState[12])();
  const minimum = tmp12.minimum;
  const maximum = tmp12.maximum;
  const obj4 = chatInputRef(transitionState[11]);
  class S {
    constructor() {
      return Math.max(closure_3.get(), 0) > 0;
    }
  }
  S.__closure = { bottomSheetIndex: sharedValue };
  S.__workletHash = 17590128332378;
  S.__initData = maximum;
  derivedValue = chatInputRef(transitionState[6]).useDerivedValue(S);
  const obj5 = chatInputRef(transitionState[6]);
  const fn = function b() {
    return { height: derivedValue.get() ? maximum : minimum };
  };
  fn.__closure = { bottomSheetExpandingOrExpanded: derivedValue, maximum, minimum };
  fn.__workletHash = 7280607865186;
  fn.__initData = derivedValue;
  const items4 = [isScreenReaderEnabled, chatInputRef];
  const animatedStyle = chatInputRef(transitionState[6]).useAnimatedStyle(fn);
  const items5 = [first, onClose, transitionState];
  const callback4 = ref.useCallback(() => {
    closure_7(true);
    if (isScreenReaderEnabled) {
      const current = chatInputRef.current;
      current.openSystemKeyboard();
    }
  }, items4);
  const effect = ref.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = transitionState === native.TransitionStates.YEETED;
    }
    if (tmp) {
      if (onClose != null) {
        tmp5();
      }
    }
  }, items5);
  const obj7 = { ref, animatedIndex: sharedValue, animatedPosition: sharedValue1, forceMaxHeight: isScreenReaderEnabled, chatInputRef, animationConfigs: isScreenReaderEnabled, onClose: callback4, renderExpressionFooter: true, transitionState, children: null };
  const obj6 = chatInputRef(transitionState[6]);
  const tmp17 = onClose(transitionState[15]);
  obj7.children = first(onClose(transitionState[6]).View, { nativeID: "expression-picker-sheet", style: animatedStyle, children: first(onClose(transitionState[14]), { bottomSheetRef: ref, bottomSheetIndex: sharedValue, onBackspace: callback3, onPressEmoji: callback, onPressGIF: callback1, onPressSticker: callback2, channel: channel.channel, expressionType: keyboardContextForType, inPortalKeyboard: true }) });
  return first(tmp17, obj7, "expression-picker-" + isScreenReaderEnabled);
}));
