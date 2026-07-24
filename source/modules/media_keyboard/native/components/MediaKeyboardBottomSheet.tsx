// Module ID: 15498
// Function ID: 119161
// Name: MediaKeyboardBackground
// Dependencies: [57, 31, 27, 1552, 653, 33, 1553, 477, 4130, 689, 1212, 11230, 4476, 1324, 3977, 5189, 3992, 4099, 4100, 675, 4528, 4539, 3991, 4559, 1557, 3842, 4525, 3989, 2]

// Module 15498 (MediaKeyboardBackground)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "getHighestActiveScreenIndex";
import DRAG_HANDLE from "DRAG_HANDLE";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import isMetaQuest from "isMetaQuest";
import set from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "get ActivityIndicator";

let closure_10;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
function MediaKeyboardBackground(arg0) {
  let pointerEvents;
  let style;
  ({ pointerEvents, style } = arg0);
  const obj = { pointerEvents, accessible: true, accessibilityRole: "adjustable" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.XONG6A);
  const items = [style, callback3().background];
  obj.style = items;
  return callback2(View, obj);
}
({ HEADER_HANDLE_HEIGHT: closure_6, MediaPickerActionSheetEngagedActions: closure_7 } = DRAG_HANDLE);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
isMetaQuest = isMetaQuest.isMetaQuest();
set = set.isIOS();
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS };
obj.background = obj;
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_14 = { code: "function MediaKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>=0;}" };
let closure_15 = { code: "function MediaKeyboardBottomSheetTsx2(isOpen,wasOpen){const{IS_IOS,runOnJS,handleSheetOpenChange}=this.__closure;if(IS_IOS&&isOpen!==wasOpen&&(wasOpen!=null||isOpen)){runOnJS(handleSheetOpenChange)(isOpen);}}" };
let closure_16 = { code: "function MediaKeyboardBottomSheetTsx3(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}" };
let closure_17 = { code: "function MediaKeyboardBottomSheetTsx4(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}" };
let result = set.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx");

export default importAllResult.memo(function MediaKeyboardBottomSheet(animatedIndex) {
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
  const bottomSheetRef = animatedIndex.bottomSheetRef;
  const onClose = animatedIndex.onClose;
  let callback = animatedIndex.onAccessibilityFocusRestore;
  let c6;
  let ref;
  let closure_8;
  let callback2;
  let callback3;
  ({ accessoriesComponent, animatedPosition, children, handleComponent, transitionState, animationConfigs, overlayComponent } = animatedIndex);
  const tmp2 = bottomSheetRef(onClose[11])({ forceMaxHeight: false });
  let tmp3 = transitionState === animatedIndex(onClose[12]).TransitionStates.YEETED;
  let tmp = callback3();
  const tmp4 = bottomSheetRef(onClose[13])("MediaKeyboardBottomSheet");
  callback = importAllResult.useCallback((arg0) => {
    const merged = Object.assign(arg0);
    return ref2(outer1_18, {});
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
    if (closure_4) {
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
    }
  }, items);
  let obj = animatedIndex(onClose[20]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  let tmp10 = isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    tmp10 = tmp3;
  }
  const tmp11 = callback(tmp3.useState(false), 2);
  c6 = tmp12;
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
          outer1_9.current = null;
          outer1_8.current = true;
          let obj = animatedIndex(onClose[21]);
          obj = { ref: outer1_7 };
          const result = obj.setAccessibilityFocus(obj);
        }, 100);
      }
    } else {
      ref.current = false;
    }
  }, items1);
  let obj1 = animatedIndex(onClose[22]);
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
      tmp = outer1_12;
      if (outer1_12) {
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
        tmp6 = c10;
        tmp7 = obj.runOnJS(c10)(animatedIndex);
      }
      return;
    }
  }
  obj = { IS_IOS: set, runOnJS: animatedIndex(onClose[22]).runOnJS, handleSheetOpenChange: callback3 };
  D.__closure = obj;
  D.__workletHash = 12464478404147;
  D.__initData = closure_15;
  const animatedReaction = obj1.useAnimatedReaction(T, D);
  let obj3 = animatedIndex(onClose[22]);
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
      animatedIndex(onClose[22]).runOnJS(c6)(arg0);
      const obj = animatedIndex(onClose[22]);
    }
  };
  obj = { runOnJS: animatedIndex(onClose[22]).runOnJS, setAccessibilityViewIsModal: tmp12 };
  fn.__closure = obj;
  fn.__workletHash = 4587285719468;
  fn.__initData = closure_17;
  const animatedReaction1 = obj3.useAnimatedReaction(H, fn);
  bottomSheetRef(onClose[23])(() => () => {
    if (null != outer1_9.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(outer1_9.current);
    }
    if (null != outer1_2) {
      outer1_2();
    }
  });
  const items2 = [bottomSheetRef, tmp3, onClose];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (closure_4) {
      if (null != bottomSheetRef.current) {
        const current = bottomSheetRef.current;
        current.forceClose();
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          let tmp;
          if (null != outer1_2) {
            tmp = outer1_2();
          }
          return tmp;
        }, 500);
        return () => clearTimeout(closure_0);
      } else if (null != onClose) {
        onClose();
      }
    }
  }, items2);
  const tmp5 = bottomSheetRef(onClose[14])();
  ({ left, right } = bottomSheetRef(onClose[24])());
  obj1 = {};
  if (tmp4) {
    tmp13 = tmp5;
  }
  obj1.gradient = tmp13;
  let obj2 = { style: { marginLeft: left, marginRight: right } };
  const tmp20 = bottomSheetRef(onClose[24])();
  const tmp21 = callback3;
  const tmp22 = callback2;
  obj2.BodyComponent = bottomSheetRef(onClose[16]);
  obj2.ref = bottomSheetRef;
  obj2.animationConfigs = animationConfigs;
  obj2.animatedIndex = animatedIndex;
  obj2.animatedPosition = animatedPosition;
  let tmp24 = !tmp10;
  if (tmp24) {
    tmp24 = !isMetaQuest;
  }
  obj2.enableContentPanningGesture = tmp24;
  obj2.enableHandlePanningGesture = !tmp10;
  obj2.handleComponent = handleComponent;
  obj2.backgroundComponent = callback;
  obj2.backgroundStyle = tmp.background;
  obj2.backdropComponent = callback1;
  obj2.onAnimate = callback2;
  obj2.handleHeight = c6;
  obj2.onClose = onClose;
  let merged = Object.assign(tmp2);
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
  obj2["children"] = callback2(animatedIndex(onClose[26]).AccessibilityViewAnimated, obj3);
  const items3 = [tmp22(bottomSheetRef(onClose[15]), obj2), accessoriesComponent(tmp2), overlayComponent];
  obj1.children = items3;
  return tmp21(animatedIndex(onClose[25]).ThemeContextProvider, obj1);
});
