// Module ID: 15326
// Function ID: 116622
// Name: MediaKeyboardBackground
// Dependencies: []

// Module 15326 (MediaKeyboardBackground)
function MediaKeyboardBackground(arg0) {
  let pointerEvents;
  let style;
  ({ pointerEvents, style } = arg0);
  const obj = { -9223372036854775808: "row", 9223372036854775807: "center", 0: "hidden", pointerEvents };
  const intl = arg1(dependencyMap[10]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[10]).t.XONG6A);
  const items = [style, callback3().background];
  obj.style = items;
  return callback2(View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ HEADER_HANDLE_HEIGHT: closure_6, MediaPickerActionSheetEngagedActions: closure_7 } = arg1(dependencyMap[3]));
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_11 = arg1(dependencyMap[6]).isMetaQuest();
const obj2 = arg1(dependencyMap[6]);
let closure_12 = arg1(dependencyMap[7]).isIOS();
const obj3 = arg1(dependencyMap[7]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, borderRadius: importDefault(dependencyMap[9]).modules.mobile.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS };
obj.background = obj;
let closure_13 = arg1(dependencyMap[8]).createStyles(obj);
let closure_14 = { code: "function MediaKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>=0;}" };
let closure_15 = { code: "function MediaKeyboardBottomSheetTsx2(isOpen,wasOpen){const{IS_IOS,runOnJS,handleSheetOpenChange}=this.__closure;if(IS_IOS&&isOpen!==wasOpen&&(wasOpen!=null||isOpen)){runOnJS(handleSheetOpenChange)(isOpen);}}" };
let closure_16 = { code: "function MediaKeyboardBottomSheetTsx3(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}" };
let closure_17 = { code: "function MediaKeyboardBottomSheetTsx4(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}" };
const obj4 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function MediaKeyboardBottomSheet(animatedIndex) {
  let accessoriesComponent;
  let animatedPosition;
  let animationConfigs;
  let children;
  let handleComponent;
  let left;
  let overlayComponent;
  let right;
  let transitionState;
  animatedIndex = animatedIndex.animatedIndex;
  const arg1 = animatedIndex;
  const bottomSheetRef = animatedIndex.bottomSheetRef;
  const importDefault = bottomSheetRef;
  const onClose = animatedIndex.onClose;
  const dependencyMap = onClose;
  let callback = animatedIndex.onAccessibilityFocusRestore;
  let tmp12;
  let ref;
  let closure_8;
  let callback2;
  let callback3;
  ({ accessoriesComponent, animatedPosition, children, handleComponent, transitionState, animationConfigs, overlayComponent } = animatedIndex);
  const tmp2 = importDefault(dependencyMap[11])({ forceMaxHeight: false });
  const tmp3 = transitionState === arg1(dependencyMap[12]).TransitionStates.YEETED;
  const tmp = callback3();
  const tmp4 = importDefault(dependencyMap[13])("MediaKeyboardBottomSheet");
  callback = importAllResult.useCallback((arg0) => {
    const merged = Object.assign(arg0);
    return ref2(closure_18, {});
  }, []);
  const items = [tmp3, onClose];
  const callback1 = importAllResult.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["ViewComponent"] = bottomSheetRef(onClose[16]);
    obj["pressBehavior"] = "collapse";
    return ref2(animatedIndex(onClose[15]).BottomSheetBackdrop, obj);
  }, []);
  callback2 = importAllResult.useCallback((arg0, arg1) => {
    if (tmp3) {
      if (-1 !== arg1) {
        if (null != onClose) {
          onClose();
        }
      }
    }
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = 0 === arg0;
    }
    if (tmp) {
      let obj = animatedIndex(onClose[17]);
      const result = obj.triggerHapticFeedback(bottomSheetRef(onClose[18]).IMPACT_LIGHT);
      obj = { action: ref.FULLY_EXPANDED };
      bottomSheetRef(onClose[19]).track(ref.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj);
      const obj2 = bottomSheetRef(onClose[19]);
      const tmp3 = onClose;
    }
  }, items);
  let obj = arg1(dependencyMap[20]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const View = isScreenReaderEnabled;
  let tmp10 = isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    tmp10 = tmp3;
  }
  const tmp11 = callback(tmp3.useState(false), 2);
  tmp12 = tmp11[1];
  let tmp13 = null;
  ref = importAllResult.useRef(null);
  closure_8 = importAllResult.useRef(false);
  callback2 = importAllResult.useRef(null);
  const items1 = [isScreenReaderEnabled];
  callback3 = importAllResult.useCallback((arg0) => {
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
    if (arg0) {
      let tmp6 = isScreenReaderEnabled;
      if (isScreenReaderEnabled) {
        tmp6 = !ref.current;
      }
      if (tmp6) {
        const _setTimeout = setTimeout;
        ref2.current = setTimeout(() => {
          closure_9.current = null;
          closure_8.current = true;
          let obj = callback(closure_2[21]);
          obj = { ref: closure_7 };
          const result = obj.setAccessibilityFocus(obj);
        }, 100);
      }
    } else {
      ref.current = false;
    }
  }, items1);
  let obj1 = arg1(dependencyMap[22]);
  class T {
    constructor() {
      return animatedIndex.get() >= 0;
    }
  }
  T.__closure = { animatedIndex };
  T.__workletHash = 14174017487042;
  T.__initData = closure_14;
  class D {
    constructor(arg0, arg1) {
      tmp = closure_12;
      if (closure_12) {
        tmp = animatedIndex !== arg1;
      }
      if (tmp) {
        tmp2 = null;
        tmp3 = null != arg1 || animatedIndex;
        tmp = tmp3;
      }
      if (tmp) {
        tmp4 = animatedIndex;
        tmp5 = onClose;
        num = 22;
        obj = animatedIndex(onClose[22]);
        tmp6 = closure_10;
        tmp7 = obj.runOnJS(closure_10)(animatedIndex);
      }
      return;
    }
  }
  obj = { IS_IOS: closure_12, runOnJS: arg1(dependencyMap[22]).runOnJS, handleSheetOpenChange: callback3 };
  D.__closure = obj;
  D.__workletHash = 12464478404147;
  D.__initData = closure_15;
  const animatedReaction = obj1.useAnimatedReaction(T, D);
  let obj3 = arg1(dependencyMap[22]);
  class H {
    constructor() {
      return Math.max(animatedIndex.get(), 0) > 0;
    }
  }
  H.__closure = { animatedIndex };
  H.__workletHash = 12101028946794;
  H.__initData = closure_16;
  const fn = function w(arg0, arg1) {
    if (arg0 !== arg1) {
      animatedIndex(onClose[22]).runOnJS(tmp12)(arg0);
      const obj = animatedIndex(onClose[22]);
    }
  };
  obj = { runOnJS: arg1(dependencyMap[22]).runOnJS, setAccessibilityViewIsModal: tmp12 };
  fn.__closure = obj;
  fn.__workletHash = 4587285719468;
  fn.__initData = closure_17;
  const animatedReaction1 = obj3.useAnimatedReaction(H, fn);
  importDefault(dependencyMap[23])(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    if (null != callback) {
      callback();
    }
  });
  const items2 = [bottomSheetRef, tmp3, onClose];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (tmp3) {
      if (null != bottomSheetRef.current) {
        const current = bottomSheetRef.current;
        current.forceClose();
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          let tmp;
          if (null != callback) {
            tmp = callback();
          }
          return tmp;
        }, 500);
        return () => clearTimeout(closure_0);
      } else {
        if (null != onClose) {
          onClose();
        }
        const tmp3 = onClose;
      }
    }
  }, items2);
  const tmp5 = importDefault(dependencyMap[14])();
  ({ left, right } = importDefault(dependencyMap[24])());
  obj1 = {};
  if (tmp4) {
    tmp13 = tmp5;
  }
  obj1.gradient = tmp13;
  const obj2 = { style: { marginLeft: left, marginRight: right } };
  const tmp20 = importDefault(dependencyMap[24])();
  const tmp21 = callback3;
  const tmp22 = callback2;
  obj2.BodyComponent = importDefault(dependencyMap[16]);
  obj2.ref = bottomSheetRef;
  obj2.animationConfigs = animationConfigs;
  obj2.animatedIndex = animatedIndex;
  obj2.animatedPosition = animatedPosition;
  let tmp24 = !tmp10;
  if (tmp24) {
    tmp24 = !closure_11;
  }
  obj2.enableContentPanningGesture = tmp24;
  obj2.enableHandlePanningGesture = !tmp10;
  obj2.handleComponent = handleComponent;
  obj2.backgroundComponent = callback;
  obj2.backgroundStyle = tmp.background;
  obj2.backdropComponent = callback1;
  obj2.onAnimate = callback2;
  obj2.handleHeight = tmp12;
  obj2.onClose = onClose;
  const merged = Object.assign(tmp2);
  obj3 = {
    ref,
    nativeID: "media-keyboard-sheet",
    onAccessibilityEscape() {
      if (null != callback) {
        callback();
      }
      animatedIndex(onClose[27]).dismissKeyboard();
    },
    accessibilityViewIsModal: tmp11[0],
    children
  };
  obj2["children"] = callback2(arg1(dependencyMap[26]).AccessibilityViewAnimated, obj3);
  const items3 = [tmp22(importDefault(dependencyMap[15]), obj2), accessoriesComponent(tmp2), overlayComponent];
  obj1.children = items3;
  return tmp21(arg1(dependencyMap[25]).ThemeContextProvider, obj1);
});
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx");

export default memoResult;
