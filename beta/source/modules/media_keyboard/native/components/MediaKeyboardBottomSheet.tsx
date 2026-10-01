// Module ID: 16299
// Function ID: 16300
// Name: MediaKeyboardBottomSheet
// Dependencies: [32, 19, 17, 1609, 1074, 21, 1610, 1364, 4836, 576, 1115, 11562, 4540, 4688, 6045, 4567, 4801, 4802, 1241, 5266, 5275, 4566, 5298, 1613, 5263, 4701, 2]

// Module 16299 (MediaKeyboardBottomSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4802 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1609 */;
import Fragment from "Fragment" /* 21 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let handleHeight;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
function MediaKeyboardBackground(arg0) {
  let intl;
  let items;
  let pointerEvents;
  let style;
  ({ pointerEvents, style } = arg0);
  const obj = { pointerEvents, accessible: true, accessibilityRole: "adjustable", accessibilityLabel: intl.string(intl2.t.XONG6A), style: items };
  const tmp = closure_13();
  intl = intl2.intl;
  items = [style, tmp.background];
  return React4(View, obj);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ HEADER_HANDLE_HEIGHT: metroRequire, MediaPickerActionSheetEngagedActions: metroImportDefault } = MediaKeyboardConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = MetaQuestUtils.isMetaQuest();
const IS_IOS = PlatformUtils.isIOS();
let obj = { background: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, borderRadius: nativeDefault.modules.mobile.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS };
let closure_13 = createStyles.createStyles(obj);
const __initData = { code: "function MediaKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>=0;}" };
const __initData2 = { code: "function MediaKeyboardBottomSheetTsx2(isOpen,wasOpen){const{IS_IOS,runOnJS,handleSheetOpenChange}=this.__closure;if(IS_IOS&&isOpen!==wasOpen&&(wasOpen!=null||isOpen)){runOnJS(handleSheetOpenChange)(isOpen);}}" };
const __initData3 = { code: "function MediaKeyboardBottomSheetTsx3(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}" };
const __initData4 = { code: "function MediaKeyboardBottomSheetTsx4(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}" };
const memoResult = react.memo(function MediaKeyboardBottomSheet(animatedIndex) {
  let accessoriesComponent;
  let animatedPosition;
  let animationConfigs;
  let children;
  let closure_3;
  let closure_4;
  let closure_6;
  let handleComponent;
  let items3;
  let left;
  let obj7;
  let overlayComponent;
  let right;
  let tmp26;
  let transitionState;
  animatedIndex = animatedIndex.animatedIndex;
  const bottomSheetRef = animatedIndex.bottomSheetRef;
  const onClose = animatedIndex.onClose;
  _slicedToArray = animatedIndex.onAccessibilityFocusRestore;
  ({ accessoriesComponent, animatedPosition, children, handleComponent, transitionState, animationConfigs, overlayComponent } = animatedIndex);
  let tmp2 = bottomSheetRef;
  const tmp3 = onClose;
  let tmp = closure_13();
  let tmp4 = bottomSheetRef(onClose[11])({ forceMaxHeight: false });
  let tmp6 = transitionState === animatedIndex(onClose[12]).TransitionStates.YEETED;
  react = tmp6;
  let obj = react;
  const tmp7 = bottomSheetRef(onClose[13])();
  const callback = react.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    return ref2(MediaKeyboardBackground, obj);
  }, []);
  const items = [tmp6, onClose];
  const callback1 = react.useCallback((arg0) => {
    const obj = { ViewComponent: bottomSheetRef(onClose[15]), pressBehavior: "collapse" };
    const BottomSheetBackdrop = animatedIndex(onClose[14]).BottomSheetBackdrop;
    const merged = Object.assign(arg0);
    return ref2(BottomSheetBackdrop, obj);
  }, []);
  const callback2 = react.useCallback((arg0, arg1) => {
    const tmp = closure_4;
    if (tmp) {
      if (-1 !== arg1) {
        if (onClose != null) {
          tmp10();
        }
      }
    }
    const tmp2 = arg0 !== arg1 && 0 === arg0;
    if (tmp2) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      const obj3 = { action: metroImportDefault.FULLY_EXPANDED };
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj3);
    }
  }, items);
  let obj2 = animatedIndex(onClose[19]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const tmp13 = _slicedToArray(obj.useState(false), 2);
  handleHeight = tmp15;
  const first = tmp13[0];
  obj.useRef(null);
  const ref = obj.useRef(false);
  const ref2 = obj.useRef(null);
  const items1 = [isScreenReaderEnabled];
  const callback3 = obj.useCallback((arg0) => {
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
    const tmp4 = arg0;
    if (tmp4) {
      const tmp6 = isScreenReaderEnabled && !ref.current;
      if (tmp6) {
        const _setTimeout = setTimeout;
        ref2.current = setTimeout(() => {
          ref2.current = null;
          closure_1_8.current = true;
          const obj = animatedIndex(onClose[20]);
          const obj2 = { ref };
          const result = obj.setAccessibilityFocus(obj2);
        }, 100);
      }
    } else {
      ref.current = false;
    }
  }, items1);
  const tmp5Result = animatedIndex(tmp3[21]);
  class T {
    constructor() {
      return animatedIndex.get() >= 0;
    }
  }
  T.__closure = { animatedIndex };
  T.__workletHash = 14174017487042;
  T.__initData = __initData;
  class D {
    constructor(arg0, arg1) {
      let tmp = IS_IOS && arg0 !== arg1;
      if (tmp) {
        tmp = null != arg1 || arg0;
      }
      if (tmp) {
        const obj = ReanimatedRexport;
        obj.runOnJS(callback3)(arg0);
      }
    }
  }
  let obj3 = { IS_IOS, runOnJS: tmp5(tmp3[21]).runOnJS, handleSheetOpenChange: callback3 };
  D.__closure = obj3;
  D.__workletHash = 12464478404147;
  D.__initData = __initData2;
  const animatedReaction = tmp5Result.useAnimatedReaction(T, D);
  const tmp5Result2 = animatedIndex(tmp3[21]);
  class H {
    constructor() {
      return Math.max(animatedIndex.get(), 0) > 0;
    }
  }
  H.__closure = { animatedIndex };
  H.__workletHash = 12101028946794;
  H.__initData = __initData3;
  const fn = function w(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_6)(arg0);
    }
  };
  fn.__closure = { runOnJS: animatedIndex(tmp3[21]).runOnJS, setAccessibilityViewIsModal: tmp13[1] };
  fn.__workletHash = 4587285719468;
  fn.__initData = __initData4;
  ({ runOnJS: animatedIndex(tmp3[21]).runOnJS, setAccessibilityViewIsModal: tmp13[1] });
  const animatedReaction1 = tmp5Result2.useAnimatedReaction(H, fn);
  tmp2(tmp3[22])(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
    if (onClose != null) {
      tmp4();
    }
  });
  const items2 = [bottomSheetRef, tmp6, onClose];
  const layoutEffect = obj.useLayoutEffect(() => {
    let closure_0;
    let tmp = closure_4;
    if (tmp) {
      if (null != bottomSheetRef.current) {
        const current = bottomSheetRef.current;
        current.forceClose();
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          let tmp;
          if (onClose != null) {
            tmp = onClose();
          }
          return tmp;
        }, 500);
        return () => clearTimeout(closure_0);
      } else if (onClose != null) {
        tmp3();
      }
    }
  }, items2);
  ({ left, right } = tmp2(tmp3[23])());
  const obj5 = { gradient: tmp7, children: items3 };
  tmp2(tmp3[23])();
  const ThemeContextProvider = tmp5(tmp3[12]).ThemeContextProvider;
  const obj6 = { style: { marginLeft: left, marginRight: right }, BodyComponent: tmp2(tmp3[15]), ref: bottomSheetRef, animationConfigs, animatedIndex, animatedPosition, enableContentPanningGesture: tmp26, enableHandlePanningGesture: !(isScreenReaderEnabled || tmp6), handleComponent, backgroundComponent: callback, backgroundStyle: tmp.background, backdropComponent: callback1, onAnimate: callback2, handleHeight, onClose, children: ref2(animatedIndex(tmp3[24]).AccessibilityViewAnimated, obj7) };
  tmp26 = !tmp12;
  const tmp23 = callback3;
  const tmp2Result = tmp2(tmp3[14]);
  if (tmp26) {
    tmp26 = !closure_11;
  }
  let merged = Object.assign(tmp4);
  obj7 = {
    ref,
    nativeID: "media-keyboard-sheet",
    onAccessibilityEscape() {
      if (closure_3 != null) {
        tmp();
      }
      const obj = ChatInputUtils;
      obj.dismissKeyboard();
    },
    accessibilityViewIsModal: first,
    children
  };
  items3 = [ref2(tmp2Result, obj6), accessoriesComponent(tmp4), overlayComponent];
  return tmp23(ThemeContextProvider, obj5);
});
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx");

export default memoResult;
