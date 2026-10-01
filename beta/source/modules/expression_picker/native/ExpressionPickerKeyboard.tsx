// Module ID: 16300
// Function ID: 16301
// Name: ExpressionPickerKeyboard
// Dependencies: [32, 19, 11518, 21, 4566, 5266, 11921, 1876, 1611, 4703, 10898, 4540, 11561, 9739, 2]

// Module 16300 (ExpressionPickerKeyboard)
import Fragment from "Fragment" /* 21 */;
import KeyboardTypes from "KeyboardTypes" /* 1611 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1876 */;
import native from "native" /* 4540 */;
import PortalKeyboardConstants from "PortalKeyboardConstants" /* 11518 */;
import getEmojiTextDefault from "getEmojiText" /* 11921 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const KEYBOARD_ANIMATION_CONFIG = PortalKeyboardConstants.KEYBOARD_ANIMATION_CONFIG;
const jsx = Fragment.jsx;
let __initData = { code: "function ExpressionPickerKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return Math.max(bottomSheetIndex.get(),0)>0;}" };
let closure_8 = { code: "function ExpressionPickerKeyboardTsx2(){const{bottomSheetExpandingOrExpanded,maximum,minimum}=this.__closure;return{height:bottomSheetExpandingOrExpanded.get()?maximum:minimum};}" };
const memoResult = react.memo(function ExpressionPickerKeyboard(chatInputRef) {
  let View;
  let closure_7;
  let obj8;
  chatInputRef = chatInputRef.chatInputRef;
  const onClose = chatInputRef.onClose;
  const transitionState = chatInputRef.transitionState;
  let ref;
  const channel = chatInputRef.channel;
  let obj = chatInputRef(transitionState[4]);
  const sharedValue = obj.useSharedValue(-1);
  let obj2 = chatInputRef(transitionState[4]);
  const sharedValue1 = obj2.useSharedValue(0);
  ref = ref.useRef(null);
  const obj3 = chatInputRef(transitionState[5]);
  const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  const tmp5 = sharedValue(ref.useState(false), 2);
  const first = tmp5[0];
  __initData = tmp5[1];
  const items = [chatInputRef];
  const items1 = [chatInputRef];
  const callback = ref.useCallback((arg0) => {
    const current = chatInputRef.current;
    current.insertText(getEmojiTextDefault(arg0), null, true);
    const obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
    const current2 = chatInputRef.current;
    const obj2 = { type: KeyboardTypes.KeyboardTypes.EXPRESSION };
    current2.openCustomKeyboard(obj2);
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
  const obj4 = chatInputRef(transitionState[9]);
  const keyboardContextForType = obj4.useKeyboardContextForType(chatInputRef(transitionState[8]).KeyboardTypes.EXPRESSION);
  const tmp12 = onClose(transitionState[10])();
  const minimum = tmp12.minimum;
  const maximum = tmp12.maximum;
  const fn = function b() {
    return Math.max(sharedValue.get(), 0) > 0;
  };
  fn.__closure = { bottomSheetIndex: sharedValue };
  fn.__workletHash = 1982988107352;
  fn.__initData = __initData;
  const obj5 = chatInputRef(transitionState[4]);
  const derivedValue = obj5.useDerivedValue(fn);
  const obj6 = chatInputRef(transitionState[4]);
  class S {
    constructor() {
      const obj = { height: derivedValue.get() ? maximum : minimum };
      return obj;
    }
  }
  S.__closure = { bottomSheetExpandingOrExpanded: derivedValue, maximum, minimum };
  S.__workletHash = 13253776832356;
  S.__initData = minimum;
  const items4 = [isScreenReaderEnabled, chatInputRef];
  const animatedStyle = obj6.useAnimatedStyle(S);
  const items5 = [first, onClose, transitionState];
  const callback4 = ref.useCallback(() => {
    closure_7(true);
    const tmp2 = isScreenReaderEnabled;
    if (tmp2) {
      const current = chatInputRef.current;
      current.openSystemKeyboard();
    }
  }, items4);
  const effect = ref.useEffect(() => {
    const tmp = first && transitionState === native.TransitionStates.YEETED;
    if (tmp) {
      if (onClose != null) {
        tmp5();
      }
    }
  }, items5);
  const obj7 = { ref, animatedIndex: sharedValue, animatedPosition: sharedValue1, forceMaxHeight: isScreenReaderEnabled, chatInputRef, animationConfigs: isScreenReaderEnabled, onClose: callback4, renderExpressionFooter: true, transitionState, children: first(View, obj8) };
  obj8 = { nativeID: "expression-picker-sheet", style: animatedStyle, children: first(onClose(transitionState[13]), { bottomSheetRef: ref, bottomSheetIndex: sharedValue, onBackspace: callback3, onPressEmoji: callback, onPressGIF: callback1, onPressSticker: callback2, channel, expressionType: keyboardContextForType, inPortalKeyboard: true }) };
  const tmp17 = onClose(transitionState[12]);
  View = onClose(transitionState[4]).View;
  return first(tmp17, obj7, "expression-picker-" + isScreenReaderEnabled);
});
let result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPickerKeyboard.tsx");

export default memoResult;
