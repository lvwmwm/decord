// Module ID: 15335
// Function ID: 116683
// Dependencies: []

// Module 15335
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const KEYBOARD_ANIMATION_CONFIG = arg1(dependencyMap[2]).KEYBOARD_ANIMATION_CONFIG;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = { code: "function ExpressionPickerKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return Math.max(bottomSheetIndex.get(),0)>0;}" };
let closure_8 = { code: "function ExpressionPickerKeyboardTsx2(){const{bottomSheetExpandingOrExpanded,maximum,minimum}=this.__closure;return{height:bottomSheetExpandingOrExpanded.get()?maximum:minimum};}" };
const memoResult = importAllResult.memo(function ExpressionPickerKeyboard(channel) {
  const chatInputRef = channel.chatInputRef;
  const arg1 = chatInputRef;
  const onClose = channel.onClose;
  const importDefault = onClose;
  const transitionState = channel.transitionState;
  const dependencyMap = transitionState;
  let obj = arg1(dependencyMap[4]);
  const sharedValue = obj.useSharedValue(-1);
  let callback = sharedValue;
  const sharedValue1 = arg1(dependencyMap[4]).useSharedValue(0);
  const ref = importAllResult.useRef(null);
  const obj2 = arg1(dependencyMap[4]);
  const isScreenReaderEnabled = arg1(dependencyMap[5]).useIsScreenReaderEnabled();
  const KEYBOARD_ANIMATION_CONFIG = isScreenReaderEnabled;
  const tmp5 = callback(ref.useState(false), 2);
  const first = tmp5[0];
  const jsx = first;
  let closure_7 = tmp5[1];
  const items = [chatInputRef];
  const items1 = [chatInputRef];
  callback = importAllResult.useCallback((arg0) => {
    const current = chatInputRef.current;
    current.insertText(onClose(transitionState[6])(arg0), null, true);
    let obj = chatInputRef(transitionState[7]);
    const result = obj.dismissGlobalKeyboard();
    const current2 = chatInputRef.current;
    obj = { type: chatInputRef(transitionState[8]).KeyboardTypes.EXPRESSION };
    current2.openCustomKeyboard(obj);
    const current3 = ref.current;
    if (null != current3) {
      current3.snapToIndex(0);
    }
  }, items);
  const items2 = [chatInputRef];
  const callback1 = importAllResult.useCallback((url) => {
    const current = chatInputRef.current;
    current.handleSelectGIF(url);
    const current2 = chatInputRef.current;
    current2.openSystemKeyboard();
  }, items1);
  const items3 = [chatInputRef];
  const callback2 = importAllResult.useCallback((sticker) => {
    const current = chatInputRef.current;
    current.handleSelectSticker(sticker);
    const current2 = chatInputRef.current;
    current2.openSystemKeyboard();
    const current3 = chatInputRef.current;
    current3.setText("");
  }, items2);
  const callback3 = importAllResult.useCallback(() => {
    const current = chatInputRef.current;
    current.backspace();
  }, items3);
  const obj3 = arg1(dependencyMap[5]);
  const keyboardContextForType = arg1(dependencyMap[9]).useKeyboardContextForType(arg1(dependencyMap[8]).KeyboardTypes.EXPRESSION);
  const tmp12 = importDefault(dependencyMap[10])();
  const minimum = tmp12.minimum;
  let closure_8 = minimum;
  const maximum = tmp12.maximum;
  const obj4 = arg1(dependencyMap[9]);
  const fn = function b() {
    return Math.max(sharedValue.get(), 0) > 0;
  };
  fn.__closure = { bottomSheetIndex: sharedValue };
  fn.__workletHash = 1982988107352;
  fn.__initData = closure_7;
  const derivedValue = arg1(dependencyMap[4]).useDerivedValue(fn);
  const obj5 = arg1(dependencyMap[4]);
  class S {
    constructor() {
      obj = { height: closure_10.get() ? maximum : minimum };
      return obj;
    }
  }
  S.__closure = { bottomSheetExpandingOrExpanded: derivedValue, maximum, minimum };
  S.__workletHash = 13253776832356;
  S.__initData = closure_8;
  const items4 = [isScreenReaderEnabled, chatInputRef];
  const animatedStyle = arg1(dependencyMap[4]).useAnimatedStyle(S);
  const items5 = [first, onClose, transitionState];
  const callback4 = importAllResult.useCallback(() => {
    callback(true);
    if (isScreenReaderEnabled) {
      const current = chatInputRef.current;
      current.openSystemKeyboard();
    }
  }, items4);
  const effect = importAllResult.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = transitionState === chatInputRef(transitionState[11]).TransitionStates.YEETED;
    }
    if (tmp) {
      if (null != onClose) {
        onClose();
      }
    }
  }, items5);
  obj = { ref, animatedIndex: sharedValue, animatedPosition: sharedValue1, forceMaxHeight: isScreenReaderEnabled, chatInputRef, animationConfigs: KEYBOARD_ANIMATION_CONFIG, onClose: callback4, renderExpressionFooter: true, transitionState };
  const obj6 = arg1(dependencyMap[4]);
  obj = { nativeID: "expression-picker-sheet", style: animatedStyle, children: jsx(importDefault(dependencyMap[13]), { bottomSheetRef: ref, bottomSheetIndex: sharedValue, onBackspace: callback3, onPressEmoji: callback, onPressGIF: callback1, onPressSticker: callback2, channel: channel.channel, expressionType: keyboardContextForType, inPortalKeyboard: true }) };
  obj.children = jsx(importDefault(dependencyMap[4]).View, obj);
  return jsx(importDefault(dependencyMap[12]), obj, "expression-picker-" + isScreenReaderEnabled);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/expression_picker/native/ExpressionPickerKeyboard.tsx");

export default memoResult;
