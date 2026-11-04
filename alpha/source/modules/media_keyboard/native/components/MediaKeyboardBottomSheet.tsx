// Module ID: 12790
// Function ID: 12791
// Name: MediaKeyboardBottomSheet
// Dependencies: [32, 19, 17, 1623, 1072, 21, 1624, 1377, 5141, 575, 1113, 12625, 5207, 5318, 5400, 1652, 5384, 5385, 1252, 5398, 6156, 1705, 5729, 1627, 6153, 5331, 2]

// Module 12790 (MediaKeyboardBottomSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ChatInputUtils from "ChatInputUtils" /* 5331 */;
import HapticUtils from "HapticUtils" /* 5384 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5385 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1623 */;
import Fragment from "Fragment" /* 21 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let dependencyMap, handleHeight;

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
const View = react_native.View;
({ HEADER_HANDLE_HEIGHT: metroRequire, MediaPickerActionSheetEngagedActions: metroImportDefault } = MediaKeyboardConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = MetaQuestUtils.isMetaQuest();
let closure_12 = PlatformUtils.isIOS();
let obj = { background: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, borderRadius: nativeDefault.modules.mobile.MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS };
let closure_13 = createStyles.createStyles(obj);
let closure_15 = { code: "(function MediaKeyboardBottomSheetTsx1(){let[animatedIndex]=this.__closure;return animatedIndex.get()>=0;})" };
let closure_16 = { code: "(function MediaKeyboardBottomSheetTsx2(isOpen,wasOpen){let[IS_IOS,scheduleOnRN,handleSheetOpenChange]=this.__closure;if(IS_IOS&&isOpen!==wasOpen&&(wasOpen!=null||isOpen)){scheduleOnRN(handleSheetOpenChange,isOpen);}})" };
let closure_17 = { code: "(function MediaKeyboardBottomSheetTsx3(){let[animatedIndex]=this.__closure;return Math.max(animatedIndex.get(),0)>0;})" };
let closure_18 = { code: "(function MediaKeyboardBottomSheetTsx4(result,previous){let[scheduleOnRN,setAccessibilityViewIsModal]=this.__closure;if(result===previous)return;scheduleOnRN(setAccessibilityViewIsModal,result);})" };
const memoResult = react.memo(function MediaKeyboardBottomSheet(onClose) {
  let accessoriesComponent;
  let animatedIndex;
  let animatedPosition;
  let animationConfigs;
  let bottomSheetRef;
  let children;
  let closure_2;
  let closure_3;
  let handleComponent;
  let items11;
  let left;
  let obj5;
  let overlayComponent;
  let right;
  let tmp14;
  let tmp15;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp39;
  let transitionState;
  ({ animatedIndex, bottomSheetRef } = onClose);
  onClose = onClose.onClose;
  dependencyMap = onClose.onAccessibilityFocusRestore;
  let isScreenReaderEnabled;
  ({ accessoriesComponent, animatedPosition, children, handleComponent, transitionState, animationConfigs, overlayComponent } = onClose);
  let tmp2 = onClose;
  const tmp3 = dependencyMap;
  let tmp = closure_13();
  let tmp4 = onClose(12625)({ forceMaxHeight: false });
  let tmp6 = transitionState === bottomSheetRef(5207).TransitionStates.YEETED;
  _slicedToArray = tmp6;
  let obj = isScreenReaderEnabled;
  const tmp7 = onClose(5318)();
  const callback = isScreenReaderEnabled.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    return closure_1_9(MediaKeyboardBackground, obj);
  }, []);
  const items = [tmp6, onClose];
  const callback1 = isScreenReaderEnabled.useCallback((arg0) => {
    const obj = { ViewComponent: onClose(closure_2[15]).View, pressBehavior: "collapse" };
    const BottomSheetBackdrop = bottomSheetRef(closure_2[14]).BottomSheetBackdrop;
    const merged = Object.assign(arg0);
    return closure_1_9(BottomSheetBackdrop, obj);
  }, []);
  const callback2 = isScreenReaderEnabled.useCallback((arg0, arg1) => {
    const tmp = closure_3;
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
  let obj2 = bottomSheetRef(5398);
  isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  [tmp14, tmp15] = obj.useState(false);
  _slicedToArray(obj.useState(false), 2);
  const ref = obj.useRef(null);
  handleHeight = obj.useRef(false);
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
          closure_1_6.current = true;
          const obj = bottomSheetRef(closure_2[20]);
          const obj2 = { ref };
          const result = obj.setAccessibilityFocus(obj2);
        }, 100);
      }
    } else {
      ref.current = false;
    }
  }, items1);
  const items2 = [closure_15, animatedIndex];
  let c0;
  [tmp19, tmp20] = items2;
  const tmp5Result = bottomSheetRef(1652);
  class MediaKeyboardBottomSheetTsx1 {
    constructor() {
      return _undefined.get() >= 0;
    }
  }
  const items3 = [tmp20];
  MediaKeyboardBottomSheetTsx1.__closure = items3;
  MediaKeyboardBottomSheetTsx1.__workletHash = 5695849548059;
  MediaKeyboardBottomSheetTsx1.__initData = tmp19;
  const items4 = [closure_16, closure_12, , ];
  const useAnimatedReaction = tmp5Result.useAnimatedReaction;
  items4[2] = bottomSheetRef(1705).scheduleOnRN;
  items4[3] = callback3;
  c0 = undefined;
  let c1;
  let c2;
  [tmp21, tmp22, tmp23, tmp24] = items4;
  class MediaKeyboardBottomSheetTsx2 {
    constructor(arg0, arg1) {
      let tmp = c0 && arg0 !== arg1;
      if (tmp) {
        tmp = null != arg1 || arg0;
      }
      if (tmp) {
        _undefined(c2, arg0);
      }
    }
  }
  const items5 = [tmp22, tmp23, tmp24];
  MediaKeyboardBottomSheetTsx2.__closure = items5;
  MediaKeyboardBottomSheetTsx2.__workletHash = 6228277612359;
  MediaKeyboardBottomSheetTsx2.__initData = tmp21;
  const animatedReaction = useAnimatedReaction(MediaKeyboardBottomSheetTsx1, MediaKeyboardBottomSheetTsx2);
  const items6 = [closure_17, animatedIndex];
  c0 = undefined;
  [tmp27, tmp28] = items6;
  const tmp5Result2 = bottomSheetRef(1652);
  class MediaKeyboardBottomSheetTsx3 {
    constructor() {
      return Math.max(_undefined.get(), 0) > 0;
    }
  }
  const items7 = [tmp28];
  MediaKeyboardBottomSheetTsx3.__closure = items7;
  MediaKeyboardBottomSheetTsx3.__workletHash = 4645791951827;
  MediaKeyboardBottomSheetTsx3.__initData = tmp27;
  const items8 = [closure_18, , ];
  const useAnimatedReaction2 = tmp5Result2.useAnimatedReaction;
  items8[1] = bottomSheetRef(1705).scheduleOnRN;
  items8[2] = tmp15;
  c0 = undefined;
  c1 = undefined;
  [tmp29, tmp30, tmp31] = items8;
  class MediaKeyboardBottomSheetTsx4 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items9 = [tmp30, tmp31];
  MediaKeyboardBottomSheetTsx4.__closure = items9;
  MediaKeyboardBottomSheetTsx4.__workletHash = 10381616509048;
  MediaKeyboardBottomSheetTsx4.__initData = tmp29;
  const animatedReaction2 = useAnimatedReaction2(MediaKeyboardBottomSheetTsx3, MediaKeyboardBottomSheetTsx4);
  tmp2(5729)(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
    if (onClose != null) {
      tmp4();
    }
  });
  const items10 = [bottomSheetRef, tmp6, onClose];
  const layoutEffect = obj.useLayoutEffect(() => {
    let closure_0;
    let tmp = closure_3;
    if (tmp) {
      if (null != bottomSheetRef.current) {
        const current = bottomSheetRef.current;
        current.forceClose();
        const _setTimeout = setTimeout;
        bottomSheetRef = setTimeout(() => {
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
  }, items10);
  ({ left, right } = tmp2(1627)());
  let obj3 = { gradient: tmp7, children: items11 };
  tmp2(1627)();
  const ThemeContextProvider = tmp5(5207).ThemeContextProvider;
  const obj4 = { style: { marginLeft: left, marginRight: right }, BodyComponent: tmp2(1652).View, ref: bottomSheetRef, animationConfigs, animatedIndex, animatedPosition, enableContentPanningGesture: tmp39, enableHandlePanningGesture: !(isScreenReaderEnabled || tmp6), handleComponent, backgroundComponent: callback, backgroundStyle: tmp.background, backdropComponent: callback1, onAnimate: callback2, handleHeight, onClose, children: closure_9(bottomSheetRef(6153).AccessibilityViewAnimated, obj5) };
  tmp39 = !tmp12;
  const tmp2Result = tmp2(5400);
  const tmp36 = closure_10;
  if (tmp39) {
    tmp39 = !closure_11;
  }
  let merged = Object.assign(tmp4);
  obj5 = {
    ref,
    nativeID: "media-keyboard-sheet",
    onAccessibilityEscape: function handleClose() {
      if (closure_2 != null) {
        tmp();
      }
      const obj = ChatInputUtils;
      obj.dismissKeyboard();
    },
    accessibilityViewIsModal: tmp14,
    children
  };
  items11 = [closure_9(tmp2Result, obj4), accessoriesComponent(tmp4), overlayComponent];
  return tmp36(ThemeContextProvider, obj3);
});
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx");

export default memoResult;
