// Module ID: 12808
// Function ID: 12809
// Name: ExpressionPickerKeyboard
// Dependencies: [32, 19, 12599, 21, 1652, 5422, 12809, 2017, 1625, 5357, 11419, 5231, 12641, 10389, 2]

// Module 12808 (ExpressionPickerKeyboard)
import Fragment from "Fragment" /* 21 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2017 */;
import native from "native" /* 5231 */;
import PortalKeyboardConstants from "PortalKeyboardConstants" /* 12599 */;
import getEmojiTextDefault from "getEmojiText" /* 12809 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const KEYBOARD_ANIMATION_CONFIG = PortalKeyboardConstants.KEYBOARD_ANIMATION_CONFIG;
let jsx = Fragment.jsx;
let closure_7 = { code: "(function ExpressionPickerKeyboardTsx1(){let[bottomSheetIndex]=this.__closure;return Math.max(bottomSheetIndex.get(),0)>0;})" };
let closure_8 = { code: "(function ExpressionPickerKeyboardTsx2(){let[bottomSheetExpandingOrExpanded,maximum,minimum]=this.__closure;return{height:bottomSheetExpandingOrExpanded.get()?maximum:minimum};})" };
const memoResult = react.memo(function ExpressionPickerKeyboard(chatInputRef) {
  let closure_6;
  let maximum;
  let minimum;
  let suggestedEmojis;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let type;
  chatInputRef = chatInputRef.chatInputRef;
  const onClose = chatInputRef.onClose;
  const transitionState = chatInputRef.transitionState;
  let isScreenReaderEnabled;
  let tmp2 = transitionState;
  const channel = chatInputRef.channel;
  let tmp = chatInputRef;
  let obj = chatInputRef(transitionState[4]);
  const sharedValue = obj.useSharedValue(-1);
  let obj2 = chatInputRef(transitionState[4]);
  const sharedValue1 = obj2.useSharedValue(0);
  const ref = isScreenReaderEnabled.useRef(null);
  const obj4 = chatInputRef(transitionState[5]);
  isScreenReaderEnabled = obj4.useIsScreenReaderEnabled();
  const tmp7 = ref(isScreenReaderEnabled.useState(false), 2);
  const animationConfigs = tmp7[0];
  jsx = tmp7[1];
  const items = [chatInputRef];
  const items1 = [chatInputRef];
  const callback = isScreenReaderEnabled.useCallback((arg0) => {
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
  const callback1 = isScreenReaderEnabled.useCallback((url) => {
    const current = chatInputRef.current;
    current.handleSelectGIF(url);
    const current2 = chatInputRef.current;
    current2.openSystemKeyboard();
  }, items1);
  const items3 = [chatInputRef];
  const callback2 = isScreenReaderEnabled.useCallback((sticker) => {
    const current = chatInputRef.current;
    current.handleSelectSticker(sticker);
    const current2 = chatInputRef.current;
    current2.openSystemKeyboard();
    const current3 = chatInputRef.current;
    current3.setText("");
  }, items2);
  const callback3 = isScreenReaderEnabled.useCallback(() => {
    const current = chatInputRef.current;
    current.backspace();
  }, items3);
  const obj5 = chatInputRef(transitionState[9]);
  const keyboardContextForType = obj5.useKeyboardContextForType(chatInputRef(transitionState[8]).KeyboardTypes.EXPRESSION);
  ({ type, suggestedEmojis } = keyboardContextForType);
  ({ minimum, maximum } = onClose(transitionState[10])());
  onClose(transitionState[10])();
  const items4 = [closure_7, sharedValue];
  let c0;
  [tmp16, tmp17] = items4;
  const obj6 = chatInputRef(transitionState[4]);
  class ExpressionPickerKeyboardTsx1 {
    constructor() {
      return Math.max(_undefined.get(), 0) > 0;
    }
  }
  const items5 = [tmp17];
  ExpressionPickerKeyboardTsx1.__closure = items5;
  ExpressionPickerKeyboardTsx1.__workletHash = 15440201615969;
  ExpressionPickerKeyboardTsx1.__initData = tmp16;
  const derivedValue = obj6.useDerivedValue(ExpressionPickerKeyboardTsx1);
  const items6 = [closure_8, derivedValue, maximum, minimum];
  c0 = undefined;
  let c1;
  let c2;
  [tmp19, tmp20, tmp21, tmp22] = items6;
  const tmpResult = tmp(tmp2[4]);
  class ExpressionPickerKeyboardTsx2 {
    constructor() {
      const obj = { height: _undefined.get() ? c1 : c2 };
      return obj;
    }
  }
  const items7 = [tmp20, tmp21, tmp22];
  ExpressionPickerKeyboardTsx2.__closure = items7;
  ExpressionPickerKeyboardTsx2.__workletHash = 10164343902621;
  ExpressionPickerKeyboardTsx2.__initData = tmp19;
  const items8 = [isScreenReaderEnabled, chatInputRef];
  const animatedStyle = tmpResult.useAnimatedStyle(ExpressionPickerKeyboardTsx2);
  const items9 = [animationConfigs, onClose, transitionState];
  const callback4 = obj3.useCallback(() => {
    closure_6(true);
    const tmp2 = isScreenReaderEnabled;
    if (tmp2) {
      const current = chatInputRef.current;
      current.openSystemKeyboard();
    }
  }, items8);
  const effect = obj3.useEffect(() => {
    const tmp = first && transitionState === native.TransitionStates.YEETED;
    if (tmp) {
      if (onClose != null) {
        tmp5();
      }
    }
  }, items9);
  onClose(tmp2[12]);
  const View = tmp14(tmp2[4]).View;
  return <tmp14Result key={"expression-picker-" + isScreenReaderEnabled} ref={ref} animatedIndex={sharedValue} animatedPosition={sharedValue1} forceMaxHeight={isScreenReaderEnabled} chatInputRef={chatInputRef} animationConfigs={animationConfigs} onClose={callback4} renderExpressionFooter transitionState={transitionState}>{null}</tmp14Result>;
});
let result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPickerKeyboard.tsx");

export default memoResult;
